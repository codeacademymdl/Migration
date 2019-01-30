

module.exports = (sequelize, DataTypes) => {
  const shops = sequelize.define('shops', {
    shopName: {
      type: DataTypes.STRING,
      validate: {
        len: [4, 20],
      },
    },
  }, {});
  // shops.associate = function(models) {
  //   // associations can be defined here
  //   shops.hasMany(models.coffee);
  // };

  shops.generate = name => shops.create({
    shopName: name,
  }).catch(err => new Error('Length is invalid'));


  return shops;
};
