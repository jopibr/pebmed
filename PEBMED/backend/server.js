const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const db = require('./config/db.config.js');

const Paciente = db.Paciente;
const Agendamento = db.Agendamento;

let router = require('./routes/router.js');

const cors = require('cors')
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', router);


const server = app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});

/* COMENTAR APÓ INICIAR O SERVER (INÍCIO COMENTÁRIO) */
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
    Paciente.sync().then(() => {
        const paciente = [
            {
                cod_cliente: 1, nome: 'Mestre IODA', sexo: 'Masculino',
                telefone: '(21)9999-0123', data_nascimento: '28/11/1982', peso: '73', altura: '1.73',
                data_consulta: '01/01/2021', atendimento: 'O paciente aprentou uma melhora significativa desde a última visita.'
            },
            {
                cod_cliente: 2, nome: 'Princesa Fiona', sexo: 'Feminino',
                telefone: '(21)9999-4567', data_nascimento: '14/10/1983', peso: '65', altura: '1.68',
                data_consulta: '05/08/1990', atendimento: 'Foi receitado um remédio para diminuir as cólicas menstruais.'
            },
            {
                cod_cliente: 3, nome: 'Friedrich Nietzsche', sexo: 'Masculino',
                telefone: '(21)9999-8965', data_nascimento: '28/11/1890', peso: '80', altura: '1.90',
                data_consulta: '02/09/1900', atendimento: 'O paciente não apresentou melhoras, orientado a fazer novos exames que constam na guia entregue.'
            },
        ]

        for (let i = 0; i < paciente.length; i++) {
            Paciente.create(paciente[i]);
        }
    })
});

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
    Agendamento.sync().then(() => {
        const agendamento = [
            {
                idpaciente_agendamento: 1, nome: 'Sigmund Freud', data_agendamento: '12/10/2021'
            },
            {
                idpaciente_agendamento: 2, nome: 'Sócrates', data_agendamento: '21/08/2021'
            },
            {
                idpaciente_agendamento: 3, nome: 'Eliphas Levi', data_agendamento: '01/01/1999'
            },
        ]

        for (let i = 0; i < agendamento.length; i++) {
            Agendamento.create(agendamento[i]);
        }
    })
});
/* COMENTAR APÓ INICIAR O SERVER (FIM COMENTÁRIO) */
