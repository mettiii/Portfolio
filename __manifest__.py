{
    'name': 'Buna Bank Exam Management System',
    'author': 'Internship Projects',
    'sequence': -200,
    'license': 'LGPL-3',
    'version': '1.0',
    'depends': [
        'base',
        'mail',
        'hr'
    ],
    'data': [
        'security/ir.model.access.csv',
        'views/employee.xml',
        'views/exam_list.xml',
        'views/menu_views.xml',
    ],
    'installable': True,
    'application': True,
}
