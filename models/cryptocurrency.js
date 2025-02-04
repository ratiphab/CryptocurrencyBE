module.exports = (sequelize, Sequelize) => {
    const cryptocurrency = sequelize.define(
      "cryptocurrency",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        symbol: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        name :{
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        createdAt: true,
        updatedAt: true,
        tableName: "Cryptocurrencies",
      }
    );
    return cryptocurrency;
  };
  