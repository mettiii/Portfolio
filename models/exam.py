from odoo import models, fields, api
from odoo.exceptions import ValidationError
import base64
import csv
import io

class ExamManagement(models.Model):
    _name = "exam.management"
    _description = "Exam Master"

    name = fields.Char(string="Exam Title", required=True)
    department_id = fields.Many2one('hr.department', string="Department", required=True)
    number_of_questions = fields.Integer(string="Number of Questions", required=True)
    passing_score = fields.Float(string="Passing Score (%)", required=True)
    scheduled_datetime = fields.Datetime(string="Scheduled Date/Time")
    duration_minutes = fields.Integer(string="Duration (Minutes)")
    question_file = fields.Binary(string="Upload Questions (CSV)")
    question_file_name = fields.Char(string="File Name")

    question_ids = fields.Many2many('exam.question', string="Questions")
    result_ids = fields.One2many('exam.result', 'exam_id', string="Exam Results")

    exam_type = fields.Selection([
        ('recruitment', 'Recruitment'),
        ('promotion', 'Promotion'),
        ('psychometric', 'Psychometric Assessments'),
    ], string="Exam Type", required=True)

    job_grade = fields.Selection([
        ('junior', 'Junior'),
        ('mid', 'Mid-Level'),
        ('senior', 'Senior'),
        ('executive', 'Executive')
    ], string="Job Grade")

    job_role = fields.Selection([
        ('acc', 'Accountant'),
        ('it', 'IT'),
        ('secretary', 'Secretary')
    ], string="Job Role")

    assigned_employees = fields.Many2many('hr.employee', string="Assigned Employees")
    responsible_hr = fields.Many2one('hr.employee', string="Responsible HR")
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
            if not record.question_file:
                continue

            file_content = base64.b64decode(record.question_file)
            file_io = io.StringIO(file_content.decode('utf-8'))
            reader = csv.reader(file_io)
            next(reader, None)  # Skip header

            for row in reader:
                if len(row) < 10:
                    continue

                question_text = row[0].strip()
                question_type = row[1].strip()

                correct_answer=option_a = option_b = option_c = option_d = None
                match_question = match_answer = None

                if question_type == 'matching':
                    match_question = row[9].strip() if len(row) > 9 else None
                    match_answer = row[10].strip() if len(row) > 10 else None

                    if not match_question or not match_answer:
                        raise ValidationError(
                            "Both Match Question and Match Answer must be provided for matching questions.")

                    question = self.env['exam.question'].create({
                        'name': question_text,
                        'question_type': question_type,
                        'match_question': match_question,
                        'match_answer': match_answer,
                    })

                elif question_type == 'multiple_choice':
                    if len(row) > 5:
                        option_a = row[2].strip()
                        option_b = row[3].strip()
                        option_c = row[4].strip()
                        option_d = row[5].strip()
                        correct_answer = row[6].strip() if len(row) > 6 else None

                    question = self.env['exam.question'].create({
                        'name': question_text,
                        'question_type': question_type,
                        'option_a': option_a,
                        'option_b': option_b,
                        'option_c': option_c,
                        'option_d': option_d,
                        'correct_answer': correct_answer,
                    })

                else:
                    # For other types like true_false or essay, create with minimal fields
                    question = self.env['exam.question'].create({
                        'name': question_text,
                        'question_type': question_type,
                        'correct_answer': row[6].strip() if len(row) > 6 else None,
                    })

                # Append new question to many2many without overwriting
                record.write({'question_ids': [(4, question.id)]})

    def generate_scorecards(self):
        for result in self.result_ids:
            score = result.score
            feedback = self.provide_feedback(score)
            self.env['candidate.scorecard'].create_scorecard(
                candidate_id=result.employee_id.id,
                exam_id=self.id,
                score=score,
                feedback=feedback
            )

    def provide_feedback(self, score):
        """Provide feedback based on the score."""
        if score >= self.passing_score:
            return "Passed the exam."
        else:
            return "Failed the exam. Needs improvement."