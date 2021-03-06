'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Champion extends Model {
    static associate(models) {
      this.belongsToMany(models.Deck, {
        foreignKey: 'championId',
        through: 'Deck_Champion',
        as: 'Deck',
      });
    }
  }
  Champion.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Champion',
    },
  );
  return Champion;
};
