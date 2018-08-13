const Sequelize = require('sequelize');
const AcademiaModel = require('./models/academia');
const EmpleadoModel = require('./models/empleado');
const ProfesorModel = require('./models/profesor');
const CursoModel = require('./models/curso');
const EstudianteModel = require('./models/estudiante');
const VehiculoModel = require('./models/vehiculo');

const sequelize = new Sequelize('academiacceg', 'postgres', 'admin',
    {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }

    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});


const Academia = AcademiaModel(sequelize, Sequelize);
const Empleado = EmpleadoModel(sequelize, Sequelize);
const Profesor = ProfesorModel(sequelize, Sequelize);
const Curso = CursoModel(sequelize, Sequelize);
const Estudiante = EstudianteModel(sequelize, Sequelize);
const Vehiculo = VehiculoModel(sequelize, Sequelize);
const Clase = sequelize.define('clase',
    {
        id_clase: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        horario: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'clase',
        createdAt: false,
        updatedAt: false
    }
);


Curso.belongsTo(Academia, { foreignKey: 'fk_academia' });
Empleado.belongsTo(Academia, { foreignKey: 'fk_academia' });
Profesor.belongsTo(Academia, { foreignKey: 'fk_academia' });

Clase.belongsTo(Profesor, { foreignKey: 'fk_profesor' });
Clase.belongsTo(Vehiculo, { foreignKey: 'fk_vehiculo' });
Clase.belongsTo(Estudiante, { foreignKey: 'fk_estudiante' });
Clase.belongsTo(Curso, { foreignKey: 'fk_curso' });




sequelize.sync({ force: false }).then(() => {
    console.log('\n¡Database and tables created!');
});