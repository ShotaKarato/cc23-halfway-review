CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  content VARCHAR(250) NOT NULL
);

INSERT INTO notes (title, content)
VALUES ('test', 'This is dummy data 3'),
('hello!', 'This is dummy data 4'),
('nice', 'This is dummy data 5'),
('change', 'This is dummy data 6'),
('feature', 'This is dummy data 7'),
('memo', 'This is dummy data 8');