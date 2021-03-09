import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { useToasts } from 'react-toast-notifications';
import { Form, Button, Col } from 'react-bootstrap';
import { EditaAgendamentoAction, detalheAgendamentoIdAction, DeletarAgendamentoAction } from '../actions/pacienteActions';

import Loader from '../components/Loader';
import Message from '../components/Message';

const DetalheAgendamentoScreen = ({ match }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    useEffect(() => {
        dispatch(detalheAgendamentoIdAction(match.params.id));
    }, [dispatch, match]);

    const detalheAgendamento = useSelector((state) =>
        state.detalheAgendamento
    );

    const { loading, error, agendamentoDetalhe } = detalheAgendamento;

    const [txtNomePaciente, setTxtNomePaciente] = useState('');
    const [txtDataAgendamentoPaciente, setTxtDataAgendamentoPaciente] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(EditaAgendamentoAction(match.params.id, txtNomePaciente, txtDataAgendamentoPaciente));

        setTxtNomePaciente('');
        setTxtDataAgendamentoPaciente('');

        addToast('Agendamento editado com sucesso!', { appearance: 'success', autoDismiss: true });
    }

    const deletarAgendamento = (e) => {
        e.preventDefault();
        const id = match.params.id;

        dispatch(DeletarAgendamentoAction(id));
        addToast('Agendamento deletado com sucesso!', { appearance: 'success', autoDismiss: true });

        history.push('/')
    }

    return (
        <>
            <div className="btn-toolbar">
                <h1 className="col-sm">Detalhe agendamento</h1>
                <Link className='btn btn-outline-dark float-right my-3' to='/agendamentos'>Voltar</Link>
            </div>
            {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :
                <Form onSubmit={submitHandler}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNome">
                            <Form.Label>Nome: {agendamentoDetalhe.nome}</Form.Label>
                            <Form.Control required placeholder='Edite o nome' value={txtNomePaciente}
                                onChange={(e) => setTxtNomePaciente(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDataAgendamento">
                            <Form.Label>Data: {agendamentoDetalhe.data_agendamento}</Form.Label>
                            <MaskedFormControl required mask="1111-11-11" type="text" placeholder='Edite a data' value={txtDataAgendamentoPaciente}
                                onChange={(e) => setTxtDataAgendamentoPaciente(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="btn btn-outline-danger float-left btn-md" onClick={deletarAgendamento}>Excluir</Button>
                    <Button variant="btn btn-outline-primary float-right btn-md" type='submit'>Editar</Button>
                </Form>
            }
        </>
    )
}

export default DetalheAgendamentoScreen
