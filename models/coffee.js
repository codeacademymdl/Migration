'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffee = sequelize.define('coffee', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  // coffee.associate = function(models) {
  //   // associations can be defined here
  //   coffee.belongsTo(model.shop);
  // };
  return coffee;
  
};