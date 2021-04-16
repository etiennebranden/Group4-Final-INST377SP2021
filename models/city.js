export default (sequelize, DataTypes) => {
    const city = sequelize.define(
      'city',
      {
        city_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        city_name: {
          type: DataTypes.STRING
        },
        city_population: {
            type: DataTypes.INTEGER
        },
        pop_denstiy: {
            type: DataTypes.FLOAT
        },
        pollution_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        env_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        demo_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return city;
  };