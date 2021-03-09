import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { Modal, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import { listPacienteDetails, ModalPacienteDetalhe, DeletarPacienteAction } from '../actions/pacienteActions';
import PacienteGridDetail from '../components/PacienteGridDetail';
import Loader from '../components/Loader';
import Message from '../components/Message';

const PacienteDetalhe = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts();

    const [txtData, setTxtData] = useState('');
    const [txtAtendimento, setTxtAtendimento] = useState('');



    const pacienteDetails = useSelector((state) =>
        state.pacienteDetails
    );

    const { loading, error, paciente } = pacienteDetails;


    useEffect(() => {
        dispatch(listPacienteDetails(match.params.id));
    }, [dispatch, match]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(ModalPacienteDetalhe(txtData, txtAtendimento, match.params.id));

        paciente.data_consulta = txtData;
        paciente.atendimento = txtAtendimento;

        setTxtData('');
        setTxtAtendimento('');
        setShow(false);

        addToast('Salvo com sucesso!', { appearance: 'success', autoDismiss: true });
    }

    const deletarCadastro = (e) => {
        e.preventDefault();
        const id = match.params.id;

        dispatch(DeletarPacienteAction(id));
        //alert(`Paciente de nome: ${paciente.nome} foi deletado com sucesso!`)

        addToast('Deletado com sucesso!', { appearance: 'success', autoDismiss: true });

        history.push('/pacientes')
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="btn-toolbar">
                <h1 className="col-sm">Paciente - {paciente.nome}</h1>
                <Link className='btn btn-outline-primary float-right mr-2 my-3' to={`/editar_paciente/${match.params.id}`}>Editar cadastro</Link>
                {' '}
                <Link className='btn btn-outline-danger float-right my-3' to='/' onClick={deletarCadastro}>Excluir cadastro</Link>
            </div>

            <div className="row">
                <div className="col">
                    <h4><b>Nome:</b>{' '}{paciente.nome}</h4>
                </div>
                <div className="col">
                    <h4><b>Altura:</b> {' '}{paciente.altura} cm</h4>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4><b>Sexo:</b> {' '}{paciente.sexo}</h4>
                </div>
                <div className="col">
                    <h4><b>Peso:</b> {' '}{paciente.peso} Kg</h4>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4><b>Telefone:</b>{' '}{paciente.telefone}</h4>
                </div>
            </div>

            <Link className='btn btn-outline-info float-left my-3' onClick={handleShow}>Inserir anotações</Link>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Data consulta</th>
                        <th>Atendimento</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :
                        paciente.length > 1 ?
                            paciente.map(paciente => (
                                <PacienteGridDetail paciente={paciente} />
                            ))
                            :
                            <tr key={paciente.idpaciente}>
                                <td>{paciente.idpaciente}</td>
                                <td>{paciente.data_consulta}</td>
                                <td>{paciente.atendimento}</td>
                            </tr>
                    }
                </tbody>
            </Table>

            <Modal size="lg" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Anotações do atendimento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group as={Row} controlId="formModal">
                            <Form.Label column sm='3'>Data da consulta:</Form.Label>
                            <Col sm='5'>
                                <Form.Control required as="input" type='text' value={txtData}
                                    onChange={(e) => setTxtData(e.target.value)}>
                                </Form.Control>
                            </Col>
                            <br />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea" name='txtAreaAtendimento' value={txtAtendimento}
                                onChange={(e) => setTxtAtendimento(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="btn btn-outline-danger float-left btn-md" onClick={handleClose}>Fechar</Button>
                        <Button variant="btn btn-outline-success float-right btn-md" type='submit'>Salvar</Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default PacienteDetalhe;
