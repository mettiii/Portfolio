from odoo import models, fields,api,_


class ExamAnswer(models.Model):
    _name = 'exam.answer'
    _description = 'Candidate Answer'

    display_id = fields.Many2one('exam.question.display', string="Display Link")
    employee_id = fields.Many2one('hr.employee', string="Employee", required=True)
    question_id = fields.Many2one('exam.question', string="Question", required=True)

    selected_option = fields.Char(string="Selected Option")  # A, B, C, D or True/False
    essay_response = fields.Text(string="Essay Answer")
    matching_response = fields.Char(string="Matching Answer")

    is_correct = fields.Boolean(string="Is Correct", compute="_compute_is_correct", store=False)

    @api.depends('selected_option', 'question_id.correct_answer')
    def _compute_is_correct(self):
        for rec in self:
            if rec.question_id.question_type in ['multiple_choice', 'true_false']:
                rec.is_correct = rec.selected_option == rec.question_id.correct_answer
            else:
                rec.is_correct = False
