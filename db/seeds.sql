USE company_db;

INSERT INTO department (name)
VALUES
    ("HR"),
    ('Engineering'),
    ('Finance'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('HR Specialist', 102000, 1),
    ('Account Manager', 130000, 2),
    ('Engineer', 180000, 3),
    ('Accountant', 120000, 4),
    ('Salesperson', 90000, 5),
    


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Otis', 'Revels', 1, null),
    ('Jocelyn','Wommack', 1, 1),
    ('Quintin', 'Heng', 3, 2),
    ('Katelyn', 'Camel', 5, 2),
 