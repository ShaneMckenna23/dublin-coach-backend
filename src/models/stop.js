// Thought
export default (sequelize, DataTypes) => {
  return sequelize.define("stops", {
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
