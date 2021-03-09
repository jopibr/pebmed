import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { useToasts } from 'react-toast-notifications';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import { NovoPacienteAction } from '../actions/pacienteActions';

const NovoPaciente = () => {
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const novoPaciente = useSelector((state) =>
        state.novoPaciente
    );

    const [txtNome, setTxtNome] = useState('');
    const [txtDataNascimento, setTxtDataNascimento] = useState('');
    const [txtTelefone, setTxtTelefone] = useState('');
    const [txtPeso, setTxtPeso] = useState('');
    const [txtAltura, setTxtAltura] = useState('');
    const [txtSexo, setTxtSexo] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(NovoPacienteAction(txtNome, txtDataNascimento, txtTelefone, txtPeso, txtAltura, txtSexo));

        setTxtNome('');
        setTxtDataNascimento('');
        setTxtTelefone('');
        setTxtPeso('');
        setTxtAltura('');
        setTxtSexo('');

        addToast('Gravado com sucesso!', { appearance: 'success', autoDismiss: true });
    }

    return (
        <>
            <div className="btn-toolbar">
                <Link className='btn btn-outline-dark float-left my-3' to='/pacientes'>Voltar</Link>
                { /* 
                    <Alert className='mt-2 ml-4' variant='success' style={{ height: '47px' }}> Paciente inserido com sucesso! </Alert>
                */}
            </div>

            <Form onSubmit={submitHandler}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control required placeholder="Nome do paciente" value={txtNome}
                            onChange={(e) => setTxtNome(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDataNascimento">
                        <Form.Label>Data de nascimento</Form.Label>
                        <MaskedFormControl required type="text" mask="1111-11-11" placeholder="Data de nascimento" value={txtDataNascimento}
                            onChange={(e) => setTxtDataNascimento(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSexo">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control required as="select" value={txtSexo}
                            onChange={(e) => setTxtSexo(e.target.value)}>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <MaskedFormControl type='text' required mask="(11)11111-1111" placeholder='Número do telefone' value={txtTelefone}
                            onChange={(e) => setTxtTelefone(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSexo">
                        <Form.Label>Peso</Form.Label>
                        <MaskedFormControl required mask="11" placeholder='Número do telefone' value={txtPeso}
                            onChange={(e) => setTxtPeso(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTelefone">
                        <Form.Label>Altura</Form.Label>
                        <MaskedFormControl required mask="1.11" placeholder='Número do telefone' value={txtAltura}
                            onChange={(e) => setTxtAltura(e.target.value)} />
                    </Form.Group>
                </Form.Row>


                <Button variant="outline-success" type="submit">Gravar</Button>

            </Form>
        </>
    )
}

export default NovoPaciente;
