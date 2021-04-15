export default (sequelize, DataTypes) => {
    const dev = sequelize.define(
      'pol_party',
      {
        development_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        party_name: {
          type: DataTypes.VARCHAR
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return pol_party;
};
  