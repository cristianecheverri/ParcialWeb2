module.exports = (sequelize, type) => {
    return sequelize.define('vehiculo',
        {
            id_vehiculo: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: type.STRING,
                allowNull: false
            },
            placa: {
                type: type.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'vehiculo',
            createdAt: false,
            updatedAt: false
        }
    );
}