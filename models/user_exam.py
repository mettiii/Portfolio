from odoo import models, fields, api


class ExamQuestionDisplay(models.Model):
    _name = 'exam.question.display'
    _description = 'Display Exam Questions'

    exam_id = fields.Many2one('exam.management', string='Exam', required=True)

    mcq_lines = fields.One2many(
        'exam.question.line', 'display_id', string='Multiple Choice Questions',
        domain=[('question_type', '=', 'multiple_choice')]
    )
    tf_lines = fields.One2many(
        'exam.question.line', 'display_id', string='True/False Questions',
        domain=[('question_type', '=', 'true_false')]
    )
    essay_lines = fields.One2many(
        'exam.question.line', 'display_id', string='Essay Questions',
        domain=[('question_type', '=', 'essay')]
    )
    matching_lines = fields.One2many(
        'exam.question.line', 'display_id', string='Matching Questions',
        domain=[('question_type', '=', 'matching')]
    )

    @api.onchange('exam_id')
    def _onchange_exam_id(self):
        for record in self:
            if record.exam_id:
                # Clear existing lines
                record.mcq_lines = [(5, 0, 0)]
                record.tf_lines = [(5, 0, 0)]
                record.essay_lines = [(5, 0, 0)]
                record.matching_lines = [(5, 0, 0)]

                # Fetch all questions related to the exam
                questions = self.env['exam.question'].search([
                    ('exam_ids', 'in', record.exam_id.id)
                ])

                # Prepare lists to add question lines
                mcq_vals = []
                tf_vals = []
                essay_vals = []
                matching_vals = []

                for question in questions:
                    vals = {
                        'name': question.name,
                        'question_type': question.question_type,
                        'display_id': record.id,  # Ensures correct linkage
                    }

                    if question.question_type == 'multiple_choice':
                        vals.update({
                            'option_a': question.option_a,
                            'option_b': question.option_b,
                            'option_c': question.option_c,
                            'option_d': question.option_d,
                            'correct_answer': question.correct_answer,
                        })
                        mcq_vals.append((0, 0, vals))

                    elif question.question_type == 'true_false':
                        vals.update({
                            'true_false_answer': question.correct_answer,
                        })
                        tf_vals.append((0, 0, vals))

                    elif question.question_type == 'essay':
                        vals.update({
                            'essay_answer': '',
                        })
                        essay_vals.append((0, 0, vals))

                    elif question.question_type == 'matching':
                        vals.update({
                            'match_question': question.match_question,
                            'match_answer': question.match_answer,
                        })
                        matching_vals.append((0, 0, vals))

                # Assign the values to the One2many fields
                record.mcq_lines = mcq_vals
                record.tf_lines = tf_vals
                record.essay_lines = essay_vals
                record.matching_lines = matching_vals
