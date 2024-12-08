module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('file', [
    { senderCode: 'TEST_CODE_1', fileName: 'testfile1.txt' },
    { senderCode: 'TEST_CODE_2', fileName: 'testfile2.txt' }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('file', null, {})
};
