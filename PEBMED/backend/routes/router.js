let express = require('express');
let router = express.Router();

const paciente = require('../controllers/controller.js');

router.post('/api/paciente', paciente.createPaciente); // CADASTRA PACIENTE
router.get('/api/paciente/:id', paciente.getPaciente); // SELECIONA PACIENTE
router.get('/api/pacientes', paciente.pacientes); // SELECIONA TODOS OS PACIENTES
router.get('/api/pacientes/agendamentos', paciente.AgendamentoPacientes); // SELECIONA TODOS OS AGENDAMENTOS
router.get('/api/pacientes/agendamento/:id', paciente.AgendamentoDetalhe); // SELECIONA AGENDAMENTO DETALHE
router.put('/api/pacientes/agendamento/:id', paciente.updateAgendamentoDetalhe); // ATUALIZA AGENDAMENTO
router.post('/api/paciente/agendamento', paciente.CadastraAgendamentos); // CADASTRA OS NOVOS AGENDAMENTOS
router.put('/api/paciente_update/:id', paciente.updatePacienteModalDetalhe); // ATUALIZA PACIENTE
router.put('/api/paciente_update_detalhe/:id', paciente.updatePacienteDoDetalhe); // ATUALIZA PACIENTE COMPLETO
router.delete('/api/paciente/:id', paciente.deletePaciente); // DELETA PACIENTE
router.delete('/api/paciente/agendamento/:id', paciente.deletaAgendamento); // DELETA PACIENTE

module.exports = router;