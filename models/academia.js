module.exports = (sequelize, type) => {
    return sequelize.define('academia',
        {
            id_academia: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: type.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'academia',
            createdAt: false,
            updatedAt: false
        }
    );
}