from odoo import models, fields

class ExamManagementFile(models.Model):
    _name = 'exam.management.file'
    _description = 'Exam CSV File'

    exam_id = fields.Many2one('exam.management', string='Exam', required=True, ondelete='cascade')
    file_data = fields.Binary(string='CSV File', required=True)
    file_name = fields.Char(string='Filename')
