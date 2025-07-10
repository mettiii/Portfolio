from odoo import models, fields, api


class ExamQuestionDisplay(models.Model):
    _name = 'exam.question.display'
    _description = 'Display Exam Questions'

    exam_id = fields.Many2one('exam.management', string='Exam', required=True)

    mcq_lines = fields.One2many(
        'exam.question', compute='_compute_mcq_lines', string='Multiple Choice Questions', store=False)
    tf_lines = fields.One2many(
        'exam.question', compute='_compute_tf_lines', string='True/False Questions', store=False)
    essay_lines = fields.One2many(
        'exam.question', compute='_compute_essay_lines', string='Essay Questions', store=False)
    matching_lines = fields.One2many(
        'exam.question', compute='_compute_matching_lines', string='Matching Questions', store=False)

    def submit_exam(self):
        employee = self._get_employee()
        answer_model = self.env['exam.answer']

        # Example: Simulate creating answers
        for question in self.exam_id.question_ids:
            posted_val = self.env.context.get(f'answer_{question.id}')
            answer_model.create({
                'question_id': question.id,
                'employee_id': employee.id,
                'display_id': self.id,
                'selected_option': posted_val,  # Or essay_response/matching_response
            })

        return {
            'type': 'ir.actions.client',
            'tag': 'display_notification',
            'params': {
                'title': 'Exam Submitted',
                'message': 'Your answers were submitted successfully!',
                'type': 'success',
            }
        }

    @api.depends('exam_id')
    def _compute_mcq_lines(self):
        for rec in self:
            rec.mcq_lines = rec.exam_id and rec.exam_id.question_ids.filtered(lambda q: q.question_type == 'multiple_choice') or False

    @api.depends('exam_id')
    def _compute_tf_lines(self):
        for rec in self:
            rec.tf_lines = rec.exam_id and rec.exam_id.question_ids.filtered(lambda q: q.question_type == 'true_false') or False

    @api.depends('exam_id')
    def _compute_essay_lines(self):
        for rec in self:
            rec.essay_lines = rec.exam_id and rec.exam_id.question_ids.filtered(lambda q: q.question_type == 'essay') or False

    @api.depends('exam_id')
    def _compute_matching_lines(self):
        for rec in self:
            rec.matching_lines = rec.exam_id and rec.exam_id.question_ids.filtered(lambda q: q.question_type == 'matching') or False

