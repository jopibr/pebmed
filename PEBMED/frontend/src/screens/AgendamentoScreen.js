import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Modal, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { listAgendamentos_, ModalAgendamento } from '../actions/pacienteActions';
import AgendamentoGrid from '../components/AgendamentoGrid';

const AgendamentosScreen = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();

    const listarAgendamentos = useSelector((state) =>
        state.listarAgendamentos
    );

    const { loading, error, pacientes } = listarAgendamentos;

    useEffect(() => {
        dispatch(listAgendamentos_());
    }, [dispatch]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(ModalAgendamento(txtData, txtNome));

        pacientes.data_agendamento = txtData;
        pacientes.nome = txtNome;

        setTxtData('');
        setTxtNome('');
        setShow(false);

        addToast('Novo agendamento salvo com sucesso!', { appearance: 'success', autoDismiss: true });

        history.push('/');
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [txtData, setTxtData] = useState('');
    const [txtNome, setTxtNome] = useState('');

    return (
        <>
            <div className="btn-toolbar">
                <h1 className="col-sm">Agendamentos</h1>
                <Link className='btn btn btn-outline-dark float-right my-3' onClick={handleShow}>Novo Agendamento</Link>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Paciente</th>
                        <th>Data</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :
                        pacientes.map(pacientes => (
                            <AgendamentoGrid pacientes={pacientes} />
                        ))
                    }
                </tbody>
            </Table>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Novo agendamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} controlId="formModal">
                            <Form.Label column sm='3'>Paciente:</Form.Label>
                            <Col sm='5'>
                                <Form.Control required as="input" type='text' value={txtNome}
                                    onChange={(e) => setTxtNome(e.target.value)}>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm='3'>Data:</Form.Label>
                            <Col sm='5'>
                                <Form.Control required type="date" placeholder="Data" value={txtData}
                                    onChange={(e) => setTxtData(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Button variant="btn btn-outline-danger float-left btn-md" onClick={handleClose}>Fechar</Button>
                        <Button variant="btn btn-outline-success float-right btn-md" type='submit'>Salvar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AgendamentosScreen;

