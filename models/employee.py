from odoo import models, fields,api,_

class Employee(models.Model):
    _inherit = 'hr.employee'  # Inherit only, no _name override

    image = fields.Binary(string="Image", attachment=True)
    bank_branch = fields.Char(string="Bank Branch")
    employee_code = fields.Char(string="Employee ID")
    job_grade = fields.Char(string="Job Grade")

    # Link to exam results (optional if employee is examiner/taker)
    exam_result_ids = fields.One2many('exam.result', 'employee_id', string="Exam Results")