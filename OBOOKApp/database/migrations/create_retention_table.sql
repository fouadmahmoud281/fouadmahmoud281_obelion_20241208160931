CREATE TABLE retention (
  id INT AUTO_INCREMENT PRIMARY KEY,
  retentionPeriod INT NOT NULL CHECK (retentionPeriod >= 1)
);

INSERT INTO retention (retentionPeriod) VALUES (30);
INSERT INTO retention (retentionPeriod) VALUES (60);

SELECT * FROM retention;

UPDATE retention SET retentionPeriod = 90 WHERE id = 1;

DELETE FROM retention WHERE id = 2;
