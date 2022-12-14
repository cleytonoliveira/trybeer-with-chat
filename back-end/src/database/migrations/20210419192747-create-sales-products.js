module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {   
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' },  
        primaryKey: true,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' }, 
        primaryKey: true,    
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }, 
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  },
};
