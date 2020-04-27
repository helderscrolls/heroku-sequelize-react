'use strict';

const items = [
  {
    id: 'TOTO-1234',
    name: 'Toto',
  },
  {
    id: 'TATA-5678',
    name: 'Tata',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map((item) => item.id) },
      },
      {}
    );
  },
};
