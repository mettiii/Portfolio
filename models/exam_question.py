from odoo import models, fields, api
from odoo.exceptions import ValidationError

class ExamQuestion(models.Model):
    _name = 'exam.question'
    _description = 'Exam Questions'

    display_id = fields.Many2one('exam.question.display', string='Question Display')
    name = fields.Text(string='Question Text', required=True)
    question_type = fields.Selection([
        ('true_false', 'True/False'),
        ('multiple_choice', 'Multiple Choice'),
        ('matching', 'Matching'),
        ('essay', 'Essay'),
    ], string='Question Type', required=True)

    # Fields for multiple choice options
    option_a = fields.Char(string='Option A')
    option_b = fields.Char(string='Option B')
    option_c = fields.Char(string='Option C')
    option_d = fields.Char(string='Option D')

    # Field for correct answer
    correct_answer = fields.Char(string='Correct Answer', required=True, help="The correct answer for grading purposes")

    # Fields for matching
    match_question = fields.Char(string='Match Question')
    match_answer = fields.Char(string='Match Answer')

    # Many2many relationship to exams
    exam_ids = fields.Many2many('exam.management', string='Used In Exams')

    @api.constrains('question_type', 'match_question', 'match_answer')
    def _check_matching_fields(self):
        for record in self:
            if record.question_type == 'matching':
                if not record.match_question or not record.match_answer:
                    raise ValidationError("Both Match Question and Match Answer must be provided for matching questions.")
