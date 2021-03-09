module.exports = (sequelize, Sequelize) => {
    const Agendamento = sequelize.define('Agendamento', {
        idpaciente_agendamento: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING
        },
        data_agendamento: {
            type: Sequelize.STRING
        },
    });

    return Agendamento;
}