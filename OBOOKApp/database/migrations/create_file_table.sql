CREATE TABLE file (
    id INT AUTO_INCREMENT PRIMARY KEY,
    senderCode VARCHAR(255) NOT NULL,
    fileName VARCHAR(255) NOT NULL
);

INSERT INTO file (senderCode, fileName) VALUES ('SAMPLE_SENDER_CODE1', 'sample1.txt');
INSERT INTO file (senderCode, fileName) VALUES ('SAMPLE_SENDER_CODE2', 'sample2.txt');

SELECT * FROM file;

UPDATE file SET senderCode = 'UPDATED_SENDER_CODE', fileName = 'updated.txt' WHERE id = 1;

DELETE FROM file WHERE id = 2;
