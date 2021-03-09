import {
    PACIENTE_LIST_REQUEST,
    PACIENTE_LIST_SUCESS,
    PACIENTE_LIST_FAIL,
    PACIENTE_DETAIL_FAIL,
    PACIENTE_DETAIL_SUCESS,
    PACIENTE_DETAIL_REQUEST,
    PACIENTE_MODAL_DETALHE_REQUEST,
    PACIENTE_MODAL_DETALHE_SUCCESS,
    PACIENTE_MODAL_DETALHE_FAIL,
    NOVO_PACIENTE_REQUEST,
    NOVO_PACIENTE_SUCCESS,
    NOVO_PACIENTE_FAIL,
    EDITAR_PACIENTE_REQUEST,
    EDITAR_PACIENTE_SUCCESS,
    EDITAR_PACIENTE_FAIL,
    DELETAR_PACIENTE_REQUEST,
    DELETAR_PACIENTE_SUCCESS,
    DELETAR_PACIENTE_FAIL,
    AGENDAMENTO_LIST_FAIL,
    AGENDAMENTO_LIST_SUCESS,
    AGENDAMENTO_LIST_REQUEST,
    AGENDAMENTO_MODAL_FAIL,
    AGENDAMENTO_MODAL_SUCESS,
    AGENDAMENTO_MODAL_REQUEST,
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

/* LISTA TODOS OS pacientes */
export const pacienteListReducer = (state = { pacientes: [] }, action) => {
    switch (action.type) {
        case PACIENTE_LIST_REQUEST:
            return { loading: true, pacientes: [] }
        case PACIENTE_LIST_SUCESS:
            return { loading: false, pacientes: action.payload }
        case PACIENTE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

export const AgendamentoDetalheReducer = (state = { agendamentoDetalhe: [] }, action) => {
    switch (action.type) {
        case DETALHE_AGENDAMENTO_REQUEST:
            return { loading: true, ...state }
        case DETALHE_AGENDAMENTO_SUCCESS:
            return { loading: false, agendamentoDetalhe: action.payload }
        case DETALHE_AGENDAMENTO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

/** */
export const AgendamentoEditarDetalheReducer = (state = { pacientes: [] }, action) => {
    switch (action.type) {
        case EDITAR_DETALHE_AGENDAMENTO_REQUEST:
            return { loading: true, pacientes: [] }
        case EDITAR_DETALHE_AGENDAMENTO_SUCCESS:
            return { loading: false, pacientes: action.payload }
        case EDITAR_DETALHE_AGENDAMENTO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

export const AgendamentoListReducer = (state = { pacientes: [] }, action) => {
    switch (action.type) {
        case AGENDAMENTO_LIST_REQUEST:
            return { loading: true, pacientes: [] }
        case AGENDAMENTO_LIST_SUCESS:
            return { loading: false, pacientes: action.payload }
        case AGENDAMENTO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

/* REDUCER CADASTRA MODAL AGENDAMENTO */
export const AgendamentoCadastraReducer = (state = { pacientes: [] }, action) => {
    switch (action.type) {
        case AGENDAMENTO_MODAL_REQUEST:
            return { loading: true, pacientes: [] }
        case AGENDAMENTO_MODAL_SUCESS:
            return { loading: false, pacientes: action.payload }
        case AGENDAMENTO_MODAL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

/* DETALHES DO PACIENTE */
export const pacienteDetailsReducer = (state = { paciente: [] }, action) => {
    switch (action.type) {
        case PACIENTE_DETAIL_REQUEST:
            return { loading: true, ...state }
        case PACIENTE_DETAIL_SUCESS:
            return { loading: false, paciente: action.payload }
        case PACIENTE_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    };
};

/* INSERE MODAL DETALHE PACIENTE */
export const pacienteModalReducer = (state = {}, action) => {
    switch (action.type) {
        case PACIENTE_MODAL_DETALHE_REQUEST:
            return { loading: true }
        case PACIENTE_MODAL_DETALHE_SUCCESS:
            return { loading: false, paciente: action.payload }
        case PACIENTE_MODAL_DETALHE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

/* INSERE NOVO PACIENTE */
export const NovoPacienteReducer = (state = {}, action) => {
    switch (action.type) {
        case NOVO_PACIENTE_REQUEST:
            return { loading: true }
        case NOVO_PACIENTE_SUCCESS:
            return { loading: false, paciente: action.payload }
        case NOVO_PACIENTE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

/* EDITA PACIENTE */
export const EditaPacienteReducer = (state = {}, action) => {
    switch (action.type) {
        case EDITAR_PACIENTE_REQUEST:
            return { loading: true }
        case EDITAR_PACIENTE_SUCCESS:
            return { loading: false, paciente: action.payload }
        case EDITAR_PACIENTE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

/* EDITA PACIENTE */
export const DeletarPacienteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETAR_PACIENTE_REQUEST:
            return { loading: true }
        case DELETAR_PACIENTE_SUCCESS:
            return { loading: false, paciente: action.payload }
        case DELETAR_PACIENTE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

/* EDITA PACIENTE */
export const DeletarAgendamentoReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETAR_AGENDAMENTO_REQUEST:
            return { loading: true }
        case DELETAR_AGENDAMENTO_SUCCESS:
            return { loading: false, paciente: action.payload }
        case DELETAR_AGENDAMENTO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}