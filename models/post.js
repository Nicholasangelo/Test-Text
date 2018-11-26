module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [15]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,

    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "adrift"
    }
  });
  return Post;
};
