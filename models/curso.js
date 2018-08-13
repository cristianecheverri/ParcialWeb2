module.exports = (sequelize, type) => {
    return sequelize.define('curso',
        {
            id_curso: {
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
            tableName: 'curso',
            createdAt: false,
            updatedAt: false
        }
    );
}