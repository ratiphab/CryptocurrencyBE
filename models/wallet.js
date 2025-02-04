module.exports = (sequelize, Sequelize) => {
    const wallet = sequelize.define('wallet', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cryptoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      balance: {
        type: Sequelize.DECIMAL(20, 8),
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
      tableName: "Wallets",
    }
  );
    return wallet;
  };