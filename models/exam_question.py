from odoo import models, fields

class ExamQuestion(models.Model):
    _name = 'exam.question'
    _description = 'Exam Question Bank'

    name = fields.Text(string='Question Text', required=True)

    question_type = fields.Selection([
        ('true_false', 'True/False'),
        ('multiple_choice', 'Multiple Choice'),
        ('matching', 'Matching'),
        ('essay', 'Essay'),
    ], string='Question Type', required=True)

    options = fields.Text(string='Options (Comma-separated)')
    correct_answer = fields.Char(string='Correct Answer')
    exam_ids = fields.Many2many('exam.management', string='Used In Exams')
