{
    'name': 'Bunna Bank Exam Management System',
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
        'views/exam_question_views.xml',
        'views/exam_views.xml',
        'views/employee.xml',
        'views/exam_list.xml',
        'views/exam_result_views.xml',
        'views/question_display.xml',
        'views/exam_menu_views.xml',
        'report/scorecard_report.xml',
    ],
    'asset':{
        'web.backend':[
'static\src\js\exam_protection.js',
        ]
    },
    'installable': True,
    'application': True,
}
