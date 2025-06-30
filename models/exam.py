from odoo import models, fields, api
import base64
import csv
import io


class ExamManagement(models.Model):
    _name = "exam.management"
    _description = "Exam Management"

    name = fields.Char(string="Exam Title", required=True)
    department_id = fields.Many2one('hr.department', string="Department", required=True)
    number_of_questions = fields.Integer(string="Number of Questions", required=True)
    passing_score = fields.Float(string="Passing Score (%)", required=True)
    exam_date = fields.Date(string="Exam Date", required=True)
    duration_minutes = fields.Integer(string="Duration (Minutes)", required=True)

    exam_type = fields.Selection([
        ('recruitment', 'Recruitment'),
        ('promotion', 'Promotion'),
        ('psychometric', 'Psychometric Assessments'),
    ], string="Exam Type", required=True)

    assigned_employees = fields.Many2many('hr.employee', string="Assigned Employees")
    responsible_hr = fields.Many2one('hr.employee', string="Responsible HR", required=True)
    remarks = fields.Text(string="Remarks")
    is_mandatory = fields.Boolean(string="Is Mandatory?", default=True)
    active = fields.Boolean(string="Active", default=True)

    result_ids = fields.One2many('exam.result', 'exam_id', string="Exam Results")

    # New field for question types
    question_type = fields.Selection([
        ('true_false', 'True/False'),
        ('multiple_choice', 'Multiple Choice'),
        ('matching', 'Matching'),
        ('essay', 'Essay'),
    ], string="Question Type", required=True)

    # Field for uploading files
    question_file = fields.Binary(string="Upload Questions (CSV/XLSX)")
    question_file_name = fields.Char(string="File Name")

    # Method to import questions
    @api.model
    def import_questions(self):
        if not self.question_file:
            return

        file_content = base64.b64decode(self.question_file)
        file_io = io.StringIO(file_content.decode('utf-8'))
        reader = csv.reader(file_io)

        for row in reader:
            # Assuming the CSV has columns: question, type, options (for multiple choice)
            question = row[0]
            q_type = row[1]
            options = row[2] if len(row) > 2 else None

            # Logic to create question records goes here
            # For example:
            self.env['exam.question'].create({
                'name': question,
                'question_type': q_type,
                'options': options,  # Store options if needed
                'exam_id': self.id,  # Link to the current exam
            })