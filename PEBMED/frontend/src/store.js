import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    pacienteListReducer,
    pacienteDetailsReducer,
    pacienteModalReducer,
    NovoPacienteReducer,
    EditaPacienteReducer,
    DeletarPacienteReducer,
    AgendamentoListReducer,
    AgendamentoCadastraReducer,
    AgendamentoDetalheReducer,
    AgendamentoEditarDetalheReducer,
    DeletarAgendamentoReducer
} from './reducers/pacienteReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Cria os reducer
const reducer = combineReducers({
    pacienteList: pacienteListReducer,
    pacienteDetails: pacienteDetailsReducer,
    modalPacienteDetalhe: pacienteModalReducer,
    novoPaciente: NovoPacienteReducer,
    editaPaciente: EditaPacienteReducer,
    DeletarPaciente: DeletarPacienteReducer,
    listarAgendamentos: AgendamentoListReducer,
    cadastraModalAgendamento: AgendamentoCadastraReducer,
    detalheAgendamento: AgendamentoDetalheReducer,
    editaDetalheAgendamento: AgendamentoEditarDetalheReducer,
    DeletarAgendamento_: DeletarAgendamentoReducer
});

// objeto vazio para o estado incial
const initialState = {};

// cria um middleware
const middleware = [thunk];

// Cria o Store do redux
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
