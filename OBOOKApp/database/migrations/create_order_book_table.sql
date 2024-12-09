CREATE TABLE `OrderBook` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `field1` VARCHAR(255) NOT NULL,
  `field2` VARCHAR(255) NOT NULL,
  `field3` VARCHAR(255) NOT NULL
);

INSERT INTO `OrderBook` (`field1`, `field2`, `field3`) VALUES ('value1', 'value2', 'value3');

SELECT * FROM `OrderBook`;

UPDATE `OrderBook` SET `field1` = 'newValue1', `field2` = 'newValue2', `field3` = 'newValue3' WHERE `id` = 1;

DELETE FROM `OrderBook` WHERE `id` = 1;
