from odoo import models, fields



class ExamManagement(models.Model):
    _name = "exam.management"
    _description = "Exam Master"

    name = fields.Char(string="Exam Title", required=True)
    department_id = fields.Many2one('hr.department', string="Department", required=True)
    number_of_questions = fields.Integer(string="Number of Questions")
    passing_score = fields.Float(string="Passing Score (%)")
    exam_date = fields.Date(string="Exam Date")
    duration_minutes = fields.Integer(string="Duration (Minutes)")

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

    result_ids = fields.One2many('exam.result', 'exam_id', string="Exam Results")
    question_file = fields.Binary(string="Upload Questions (CSV)")
