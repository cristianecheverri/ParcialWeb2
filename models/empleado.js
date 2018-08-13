module.exports = (sequelize, type) => {
    return sequelize.define('empleado',
        {
            documento: {
                type: type.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: type.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'empleado',
            createdAt: false,
            updatedAt: false
        }
    );
}