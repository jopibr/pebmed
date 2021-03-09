module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define('Paciente', {
        idpaciente: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cod_cliente: {
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING
        },
        sexo: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING
        },
        data_nascimento: {
            type: Sequelize.STRING
        },
        peso: {
            type: Sequelize.STRING
        },
        altura: {
            type: Sequelize.STRING
        },
        data_consulta: {
            type: Sequelize.STRING
        },
        atendimento: {
            type: Sequelize.STRING
        }
    });

    return Paciente;
}