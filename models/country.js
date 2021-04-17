export default (sequelize, DataTypes) => {
    const country = sequelize.define(
      'country',
      {
        country_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        country_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        continent: {
          type: DataTypes.STRING,
          allowNull: false
        },
        development_development_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return country;
  };
  