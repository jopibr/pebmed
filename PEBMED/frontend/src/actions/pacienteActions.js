import axios from 'axios';
import {
    PACIENTE_LIST_REQUEST,
    PACIENTE_LIST_SUCESS,
    PACIENTE_LIST_FAIL,
    PACIENTE_DETAIL_REQUEST,
    PACIENTE_DETAIL_SUCESS,
    PACIENTE_DETAIL_FAIL,
    PACIENTE_MODAL_DETALHE_REQUEST,
    PACIENTE_MODAL_DETALHE_SUCCESS,
    PACIENTE_MODAL_DETALHE_FAIL,
    NOVO_PACIENTE_REQUEST,
    NOVO_PACIENTE_SUCCESS,
    NOVO_PACIENTE_FAIL,
    EDITAR_PACIENTE_REQUEST,
    EDITAR_PACIENTE_SUCCESS,
    EDITAR_PACIENTE_FAIL,
    AGENDAMENTO_LIST_FAIL,
    AGENDAMENTO_LIST_SUCESS,
    AGENDAMENTO_LIST_REQUEST,
    AGENDAMENTO_MODAL_FAIL,
    AGENDAMENTO_MODAL_REQUEST,
    AGENDAMENTO_MODAL_SUCESS,
    DETALHE_AGENDAMENTO_REQUEST,
    DETALHE_AGENDAMENTO_SUCCESS,
    DETALHE_AGENDAMENTO_FAIL,
    EDITAR_DETALHE_AGENDAMENTO_FAIL,
    EDITAR_DETALHE_AGENDAMENTO_REQUEST,
    EDITAR_DETALHE_AGENDAMENTO_SUCCESS,
    DELETAR_AGENDAMENTO_FAIL,
    DELETAR_AGENDAMENTO_REQUEST,
    DELETAR_AGENDAMENTO_SUCCESS
} from '../constants/pacienteConstants';

/* PACIENTE DETALHE */
export const listPacienteDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PACIENTE_DETAIL_REQUEST
        });

        const { data } = await axios.get(`/api/paciente/${id}`);
        dispatch({
            type: PACIENTE_DETAIL_SUCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PACIENTE_DETAIL_FAIL,
            payload: error.response && error.response.data.message ? error.message.data.message : error.message
        });
    }
};

/* DETALHE AGENDAMENTO */
export const detalheAgendamentoIdAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DETALHE_AGENDAMENTO_REQUEST
        });

        const { data } = await axios.get(`/api/pacientes/agendamento/${id}`);
        console.log(data);
        dispatch({
            type: DETALHE_AGENDAMENTO_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DETALHE_AGENDAMENTO_FAIL,
            payload: error.response && error.response.data.message ? error.message.data.message : error.message
        });
    }
};

/* EDITA AGENDAMENTO */
export const EditaAgendamentoAction = (id, nome, data_agendamento) => async (dispatch) => {
    try {
        dispatch({
            type: EDITAR_DETALHE_AGENDAMENTO_REQUEST,
        })

        const { data } = await axios.put(`/api/pacientes/agendamento/${id}`,
            { id, nome, data_agendamento },
        )

        dispatch({
            type: EDITAR_DETALHE_AGENDAMENTO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EDITAR_DETALHE_AGENDAMENTO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


/* LISTA TODOS PACIENTES */
export const listPacientes = () => async (dispatch) => {

    try {
        dispatch({
            type: PACIENTE_LIST_REQUEST
        });

        const { data } = await axios.get('/api/pacientes');

        dispatch({
            type: PACIENTE_LIST_SUCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: PACIENTE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.message.data.message : error.message
        })
    }
};

/* LISTA TODOS OS AGENDAMENTOS */
export const listAgendamentos_ = () => async (dispatch) => {
    try {
        dispatch({
            type: AGENDAMENTO_LIST_REQUEST
        });

        const { data } = await axios.get('/api/pacientes/agendamentos');
        dispatch({
            type: AGENDAMENTO_LIST_SUCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: AGENDAMENTO_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.message.data.message : error.message
        })
    }
};




export const ModalPacienteDetalhe = (data_atendimento, atendimento, id) => async (dispatch) => {
    try {
        dispatch({
            type: PACIENTE_MODAL_DETALHE_REQUEST,
        })

        const { data } = await axios.put(`/api/paciente_update/${id}`,
            { data_atendimento, atendimento, id },
        )

        dispatch({
            type: PACIENTE_MODAL_DETALHE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PACIENTE_MODAL_DETALHE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

/* INSERE NA TABELA AGENDAMENTO PELO MODAL */
export const ModalAgendamento = (data_agendamento, nome) => async (dispatch) => {
    try {
        dispatch({
            type: AGENDAMENTO_MODAL_REQUEST,
        })

        const { data } = await axios.post(`/api/paciente/agendamento`,
            { data_agendamento, nome },
        )

        dispatch({
            type: AGENDAMENTO_MODAL_SUCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: AGENDAMENTO_MODAL_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const NovoPacienteAction = (nome, data_nascimento, telefone, peso, altura, sexo) => async (dispatch) => {
    try {
        dispatch({
            type: NOVO_PACIENTE_REQUEST,
        })

        const { data } = await axios.post(`/api/paciente`,
            { nome, data_nascimento, telefone, peso, altura, sexo },
        )

        dispatch({
            type: NOVO_PACIENTE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: NOVO_PACIENTE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const EditaPacienteAction = (id, nome, data_nascimento, telefone, peso, altura, sexo) => async (dispatch) => {
    try {
        dispatch({
            type: EDITAR_PACIENTE_REQUEST,
        })

        const { data } = await axios.put(`/api/paciente_update_detalhe/${id}`,
            { id, nome, data_nascimento, telefone, peso, altura, sexo },
        )

        dispatch({
            type: EDITAR_PACIENTE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EDITAR_PACIENTE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const DeletarPacienteAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: EDITAR_PACIENTE_REQUEST,
        })

        const { data } = await axios.delete(`/api/paciente/${id}`)

        dispatch({
            type: EDITAR_PACIENTE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EDITAR_PACIENTE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const DeletarAgendamentoAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETAR_AGENDAMENTO_REQUEST,
        })

        const { data } = await axios.delete(`/api/paciente/agendamento/${id}`)
        dispatch({
            type: DELETAR_AGENDAMENTO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: DELETAR_AGENDAMENTO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
