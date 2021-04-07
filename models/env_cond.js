export default (sequelize, DataTypes) => {
  const env_cond = sequelize.define(
    'env_cond',
    {
      env_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      tempurature: {
        type: DataTypes.DOUBLE
      },
      wind_speed: {
        type: DataTypes.DOUBLE
      },
      air_pressure: {
        type: DataTypes.DOUBLE
      },
      humidity: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return env_cond;
};
