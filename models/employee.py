from odoo import models, fields, api, _


class Employee(models.Model):
    _inherit = 'hr.employee'

    image = fields.Binary(string="Image", attachment=True)
    bank_branch = fields.Char(string="Bank Branch")
    employee_code = fields.Char(string="Employee ID")
    job_grad = fields.Selection([
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

    password = fields.Char(string="Password")

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
