SHOW databases;
USE kdt;

CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done TINYINT(1) NOT NULL DEFAULT 0
);

DESC todo;

INSERT INTO todo VALUES ('ms todo1', 0);
INSERT INTO todo VALUES ('ms todo2', 1);
INSERT INTO todo VALUES ('ms todo3', 0);
INSERT INTO todo VALUES ('ms todo4', 1);
INSERT INTO todo VALUES ('ms todo5', 1);
INSERT INTO todo VALUES ('ms todo6', 0);

SELECT * FROM todo;