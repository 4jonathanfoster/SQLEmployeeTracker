USE company_db;

INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 102000, 4),
    ('Salesperson', 90000, 4),
    ('Lead Engineer', 180000, 1),
    ('Software Engineer', 100000, 1),
    ('Account Manager', 130000, 2),
    ('Accountant', 120000, 2),
    ('Legal Team Lead', 200000, 3),
    ('Lawyer', 180000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Otis', 'Revels', 1, null),
    ('Jocelyn','Wommack', 2, 1),
    ('Quintin', 'Heng', 3, null),
    ('Katelyn', 'Camel', 4, 3),
    ('Yasuko', 'Dimmick', 5, null),
    ('Etsuko', 'Domingues', 6, 5),
    ('Leota', 'Lindley', 7, null),
    ('Fritz', 'Thao', 8, 7);