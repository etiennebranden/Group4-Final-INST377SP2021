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
        type: DataTypes.FLOAT
      },
      wind_speed: {
        type: DataTypes.FLOAT
      },
      air_pressure: {
        type: DataTypes.FLOAT
      },
      humidity: {
        type: DataTypes.FLOAT
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return env_cond;
};
