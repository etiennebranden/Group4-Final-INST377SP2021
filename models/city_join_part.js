export default (sequelize, DataTypes) => {
    const city_join_part = sequelize.define(
      'city_join_part',
      {
        city_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        pol_party_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        spectrum: {
          type: DataTypes.ENUM,
          allowNull: false
        },
        city_city_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        political_party_pol_party_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
      },
      { freezeTableName: true, timestamps: false }
    );
    return city_join_part;
  };