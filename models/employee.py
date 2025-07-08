from odoo import models, fields, api, _

class Employee(models.Model):
    _inherit = 'hr.employee'

    image = fields.Binary(string="Image", attachment=True)
    bank_branch = fields.Char(string="Bank Branch")
    employee_code = fields.Char(string="Employee ID")
    job_grade = fields.Char(string="Job Grade")  # Add the job_grade field

    user_id = fields.Many2one(
        'res.users',
        string="Related User",
        help="System user account linked to this employee"
    )

    exam_result_ids = fields.One2many(
        'exam.result',
        'employee_id',
        string="Exam Results"
    )
