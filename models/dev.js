export default (sequelize, DataTypes) => {
  const dev = sequelize.define(
    'dev',
    {
      development_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      HDI: {
        type: DataTypes.DOUBLE
      },
      consumption: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return dev;
};
