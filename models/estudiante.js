module.exports = (sequelize, type) => {
    return sequelize.define('estudiante',
        {
            id_estudiante: {
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
            tableName: 'estudiante',
            createdAt: false,
            updatedAt: false
        }
    );
}