export default (sequelize, DataTypes) => {
    const pol_party = sequelize.define(
      'pol_party',
      {
        pol_party_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        party_name: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return pol_party;
};
  