CREATE TABLE testTable (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES testTable(id)
);

INSERT INTO testTable (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);

SELECT 
    a.id, 
    a.name, 
    b.name AS parent_name
FROM 
    testTable AS a
LEFT JOIN 
    testTable AS b ON a.parent_id = b.id;
