{
    'name': 'Buna Bank Exam Management System',
    'author': 'Internship Projects',
    'sequence': -500,
    'license': 'LGPL-3',
    'version': '1.0',
    'depends': [
        'base',
        'mail',
        'hr'
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/exam_views.xml',
        'views/employee.xml',
        'views/exam_question_views.xml',
        'views/exam_result_views.xml',
        'views/exam_menu_views.xml',
        'views/employee.xml',
        'views/exam_list.xml',
        'report/scorecard_report.xml',

    ],
    'installable': True,
    'application': True,
}
