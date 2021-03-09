const db = require('../config/db.config.js');
const Paciente = db.Paciente;
const Agendamento = db.Agendamento;

exports.createPaciente = (req, res) => {
    let paciente = {};

    try {
        paciente.cod_cliente = req.body.id;
        paciente.nome = req.body.nome;
        paciente.sexo = req.body.sexo;
        paciente.telefone = req.body.telefone;
        paciente.data_nascimento = req.body.data_nascimento;
        paciente.peso = req.body.peso;
        paciente.altura = req.body.altura;

        // Save to MySQL database
        Paciente.create(paciente,
            { attributes: ['idpaciente', 'cod_cliente', 'nome', 'sexo', 'telefone', 'data_nascimento', 'peso', 'altura'] })
            .then(result => {
                res.status(200).json(result);
            });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar inserir paciente.",
            error: error.message
        });
    }
}


exports.pacientes = (req, res) => {
    try {
        Paciente.findAll({ attributes: ['idpaciente', 'nome', 'sexo', 'telefone', 'data_nascimento', 'data_consulta'] })
            .then(pacientes => {
                res.status(200).json(pacientes);
            })
    } catch (error) {
        // log on console
        console.log(error);
        res.status(500).json({
            message: "Erro ao tentar buscar todos os pacientes.",
            error: error.message
        });
    }
}

exports.AgendamentoPacientes = (req, res) => {
    try {
        Agendamento.findAll({ attributes: ['idpaciente_agendamento', 'nome', 'data_agendamento'] })
            .then(agendamento => {
                res.status(200).json(agendamento);
            })
    } catch (error) {
        // log on console
        console.log(error);
        res.status(500).json({
            message: "Erro ao tentar buscar todos os pacientes.",
            error: error.message
        });
    }
}


exports.CadastraAgendamentos = (req, res) => {
    let paciente = {};

    paciente.nome = req.body.nome;
    paciente.data_agendamento = req.body.data_agendamento;

    try {
        Agendamento.create(paciente,
            { attributes: ['idpaciente_agendamento', 'nome', 'data_agendamento'] })
            .then(agendamento => {
                res.status(200).json(agendamento);
            })
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar inserir agendamento.",
            error: error.message
        });
    }
}


exports.AgendamentoDetalhe = (req, res) => {
    Agendamento.findByPk(req.params.id,
        {
            attributes: ['idpaciente_agendamento', 'nome', 'data_agendamento']
        })
        .then(agendamento => {
            res.status(200).json(agendamento);
        }).catch(error => {
            // log on console
            console.log(error);
            res.status(500).json({
                message: "Erro ao tentar buscar agendamento.",
                error: error
            });
        })
}

exports.getPaciente = (req, res) => {
    Paciente.findByPk(req.params.id,
        {
            attributes: ['idpaciente', 'nome', 'sexo', 'telefone', 'data_nascimento', 'peso', 'altura', 'data_consulta', 'atendimento']
        })
        .then(paciente => {
            res.status(200).json(paciente);
        }).catch(error => {
            // log on console
            console.log(error);
            res.status(500).json({
                message: "Erro ao tentar buscar único paciente.",
                error: error
            });
        })
}

exports.updateAgendamentoDetalhe = async (req, res) => {
    try {
        let agendamento = await Agendamento.findByPk(req.params.id);

        if (!agendamento) {
            res.status(404).json({
                message: `Agendamento com id ${id} não foi encontrado`,
                error: "404"
            });
        } else {
            let updatedObject = {
                idpaciente_agendamento: req.body.id,
                nome: req.body.nome,
                data_agendamento: req.body.data_agendamento
            }

            let result = await Agendamento.update(updatedObject,
                {
                    returning: true,
                    where: { idpaciente_agendamento: req.body.id },
                    attributes: ['idpaciente_agendamento', 'nome', 'data_agendamento']
                }
            );

            if (!result) {
                res.status(500).json({
                    message: `Não foi possivel atulizar Agendamento com o ID: ${req.params.id}`,
                    error: "Não foi atualizado!",
                });
            }

            res.status(200).json(result[1]);
        }
    } catch (error) {
        res.status(500).json({
            message: `Não foi possivel atulizar Agendamento com o ID: ${req.params.id}`,
            error: error.message
        });
    }
}

exports.updatePacienteModalDetalhe = async (req, res) => {
    try {
        let paciente = await Paciente.findByPk(req.params.id);

        if (!paciente) {
            // return a response to client
            res.status(404).json({
                message: `Paciente com id ${id} não foi encontrado`,
                error: "404"
            });
        } else {
            let updatedObject = {
                cod_cliente: req.body.id,
                data_consulta: req.body.data_atendimento,
                atendimento: req.body.atendimento
            }

            let result = await Paciente.update(updatedObject,
                {
                    returning: true,
                    where: { idpaciente: req.body.id },
                    attributes: ['cod_cliente', 'data_consulta', 'atendimento']
                }
            );

            if (!result) {
                res.status(500).json({
                    message: `Não foi possivel atulizar Paciente com o ID: ${req.params.id}`,
                    error: "Não foi atualizado!",
                });
            }

            res.status(200).json(result[1]);
        }
    } catch (error) {
        res.status(500).json({
            message: `Não foi possivel atulizar Paciente com o ID: ${req.params.id}`,
            error: error.message
        });
    }
}

exports.updatePacienteDoDetalhe = async (req, res) => {

    try {
        let paciente = await Paciente.findByPk(req.body.id);

        if (!paciente) {
            // return a response to client
            res.status(404).json({
                message: `Paciente com id ${id} não foi encontrado`,
                error: "404"
            });
        } else {
            let updatedObject = {
                nome: req.body.nome,
                sexo: req.body.sexo,
                telefone: req.body.telefone,
                data_nascimento: req.body.data_nascimento,
                peso: req.body.peso,
                altura: req.body.altura,
            }

            let result = await Paciente.update(updatedObject,
                {
                    returning: true,
                    where: { idpaciente: req.body.id },
                    attributes: ['idpaciente', 'nome', 'sexo', 'telefone', 'data_nascimento', 'peso', 'altura']
                }
            );

            if (!result) {
                res.status(500).json({
                    message: `Não foi possivel atulizar Paciente do detalhe com o ID: ${req.params.id}`,
                    error: "Não foi atualizado!",
                });
            }

            res.status(200).json(result[1]);
        }
    } catch (error) {
        res.status(500).json({
            message: `Não foi possivel atulizar Paciente do detalhe com o ID: ${req.params.id}`,
            error: error.message
        });
    }
}

exports.deletePaciente = async (req, res) => {
    try {
        let pacienteId = req.params.id;
        let paciente = await Paciente.findByPk(pacienteId);

        if (!paciente) {
            res.status(404).json({
                message: `Não existe paciente com ID: ${pacienteId}`,
                error: "404",
            });
        } else {
            await paciente.destroy();
            res.status(200).json({
                message: `Paciente com ID: ${req.params.id} foi deletado com sucesso!`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Não foi possivel deletar paciente com ID: ${req.params.idpaciente}`,
            error: error.message
        });
    }
}

exports.deletaAgendamento = async (req, res) => {
    try {
        let agendamentoId = req.params.id;
        let agendamento = await Agendamento.findByPk(agendamentoId);

        if (!agendamento) {
            res.status(404).json({
                message: `Não existe paciente com ID: ${agendamentoId}`,
                error: "404",
            });
        } else {
            await agendamento.destroy();
            res.status(200).json({
                message: `Paciente com ID: ${req.params.id} foi deletado com sucesso!`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: `Não foi possivel deletar paciente com ID: ${req.params.idpaciente_agendamento}`,
            error: error.message
        });
    }
}