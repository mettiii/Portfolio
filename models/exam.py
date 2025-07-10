from odoo import models, fields, api
from odoo.exceptions import ValidationError
import base64
import csv
import io

class ExamManagement(models.Model):
    _name = "exam.management"
    _description = "Exam Master"
    _inherit = ['mail.thread', 'mail.activity.mixin']  # Optional, for chatter and activity tracking

    name = fields.Char(string="Exam Title", required=True, tracking=True)
    department_id = fields.Many2one('hr.department', string="Department", required=True, tracking=True)
    number_of_questions = fields.Integer(string="Number of Questions", required=True, tracking=True)
    passing_score = fields.Float(string="Passing Score (%)", required=True, tracking=True)
    scheduled_datetime = fields.Datetime(string="Scheduled Date/Time", tracking=True)
    duration_minutes = fields.Integer(string="Duration (Minutes)", tracking=True)
    question_file = fields.Binary(string="Upload Questions (CSV)")
    question_file_name = fields.Char(string="File Name")
    exam_file_ids = fields.One2many('exam.management.file', 'exam_id', string="Upload Question Files")
    question_ids = fields.Many2many('exam.question', string="Questions")
    result_ids = fields.One2many('exam.result', 'exam_id', string="Exam Results")
    exam_type = fields.Selection([
        ('recruitment', 'Recruitment'),
        ('promotion', 'Promotion'),
        ('psychometric', 'Psychometric Assessments'),
    ], string="Exam Type", required=True, tracking=True)
    job_grade = fields.Selection([
        ('junior', 'Junior'),
        ('mid', 'Mid-Level'),
        ('senior', 'Senior'),
        ('executive', 'Executive')
    ], string="Job Grade", tracking=True)
    job_role = fields.Selection([
        ('acc', 'Accountant'),
        ('it', 'IT'),
        ('secretary', 'Secretary')
    ], string="Job Role", tracking=True)
    assigned_employees = fields.Many2many('hr.employee', string="Assigned Employees", tracking=True)
    responsible_hr = fields.Many2one('hr.employee', string="Responsible HR", tracking=True)
    remarks = fields.Text(string="Remarks")
    is_mandatory = fields.Boolean(string="Is Mandatory?", default=True)
    active = fields.Boolean(string="Active", default=True)

    @api.constrains('scheduled_datetime')
    def _check_schedule_date(self):
        for rec in self:
            if rec.scheduled_datetime and rec.scheduled_datetime < fields.Datetime.now():
                raise ValidationError("You cannot schedule an exam in the past.")

    def import_questions(self):
        for record in self:
            total_imported = 0
            questions_to_import = record.number_of_questions

            for exam_file in record.exam_file_ids:
                if total_imported >= questions_to_import:
                    break

                # Decode and read CSV content
                file_content = base64.b64decode(exam_file.file_data)
                file_io = io.StringIO(file_content.decode('utf-8'))
                reader = csv.reader(file_io)
                next(reader, None)  # Skip header

                for row in reader:
                    if total_imported >= questions_to_import:
                        break
                    if len(row) < 2:
                        continue

                    question_text = row[0].strip()
                    question_type = row[1].strip()

                    question_data = {
                        'name': question_text,
                        'question_type': question_type,
                    }

                    if question_type == 'matching':
                        match_question = row[9].strip() if len(row) > 9 else None
                        match_answer = row[10].strip() if len(row) > 10 else None

                        if not match_question or not match_answer:
                            raise ValidationError(
                                "Both Match Question and Match Answer must be provided for matching questions.")

                        question_data.update({
                            'match_question': match_question,
                            'match_answer': match_answer,
                        })

                    elif question_type == 'multiple_choice':
                        if len(row) > 6:
                            question_data.update({
                                'option_a': row[2].strip(),
                                'option_b': row[3].strip(),
                                'option_c': row[4].strip(),
                                'option_d': row[5].strip(),
                                'correct_answer': row[6].strip(),
                            })
                        else:
                            raise ValidationError("Multiple choice questions require at least 7 columns.")

                    elif question_type == 'true_false':
                        # True/False questions store correct answer in true_false_answer
                        if len(row) > 6:
                            question_data['true_false_answer'] = row[6].strip()
                        else:
                            raise ValidationError("True/False questions require a correct answer in column 7.")

                    elif question_type == 'essay':
                        # For essay, correct_answer can be empty or expected answer in column 6
                        if len(row) > 6:
                            question_data['essay_answer'] = row[6].strip()

                    else:
                        raise ValidationError(f"Unknown question type: {question_type}")

                    question = self.env['exam.question'].create(question_data)
                    record.write({'question_ids': [(4, question.id)]})
                    total_imported += 1

            if total_imported < questions_to_import:
                raise ValidationError(
                    f"Only {total_imported} valid questions imported from CSV files, but {questions_to_import} were expected.")

    def generate_scorecards(self):
        for result in self.result_ids:
            score = result.score
            feedback = self.provide_feedback(score)
            self.env['candidate.scorecard'].create({
                'candidate_id': result.employee_id.id,
                'exam_id': self.id,
                'score': score,
                'feedback': feedback
            })

    def provide_feedback(self, score):
        """Provide feedback based on the score."""
        if score >= self.passing_score:
            return "Passed the exam."
        else:
            return "Failed the exam. Needs improvement."
