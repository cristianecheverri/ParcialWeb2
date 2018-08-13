module.exports = (sequelize, type) => {
    return sequelize.define('profesor',
        {
            id_profesor: {
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
            tableName: 'profesor',
            createdAt: false,
            updatedAt: false
        }
    );
}