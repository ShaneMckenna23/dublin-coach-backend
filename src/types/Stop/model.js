export default (sequelize, DataTypes) => {
    return sequelize.define("stop", {
      name: {
        type: DataTypes.STRING
      },
      lat: {
        type: DataTypes.DECIMAL(10, 8)
      },
      long: {
        type: DataTypes.DECIMAL(11, 8)
      }
    });
  };

  