import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Col, Form, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import { EditaPacienteAction, listPacienteDetails } from '../actions/pacienteActions';

const EditarPacienteScreen = ({ match }) => {
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    useEffect(() => {
        dispatch(listPacienteDetails(match.params.id));
    }, [dispatch, match]);

    const pacienteDetails = useSelector((state) =>
        state.pacienteDetails
    );

    const { loading, error, paciente } = pacienteDetails;

    //console.log(paciente)

    const [txtNome, setTxtNome] = useState(paciente.nome);
    const [txtDataNascimento, setTxtDataNascimento] = useState(paciente.data_nascimento);
    const [txtTelefone, setTxtTelefone] = useState(paciente.telefone);
    const [txtPeso, setTxtPeso] = useState(paciente.peso);
    const [txtAltura, setTxtAltura] = useState(paciente.altura);
    const [txtSexo, setTxtSexo] = useState(paciente.sexo);

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(EditaPacienteAction(match.params.id, txtNome, txtDataNascimento, txtTelefone, txtPeso, txtAltura, txtSexo));

        setTxtNome('');
        setTxtDataNascimento('');
        setTxtTelefone('');
        setTxtPeso('');
        setTxtAltura('');
        setTxtSexo('');

        addToast('Editado com sucesso!', { appearance: 'success', autoDismiss: true });
    }

    return (
        <>
            <div className="btn-toolbar">
                <Link className='btn btn-outline-dark float-left my-3' to={`/paciente_detalhe/${match.params.id}`}>Voltar</Link>
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
                        <MaskedFormControl required mask='1111-11-11' type="date" placeholder="Data de nascimento" value={txtDataNascimento}
                            onChange={(e) => setTxtDataNascimento(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSexo">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control required as="select" value={txtSexo} onChange={(e) => setTxtSexo(e.target.value)}>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <MaskedFormControl required mask='(11)11111-1111' placeholder='Número do telefone' value={txtTelefone}
                            onChange={(e) => setTxtTelefone(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSexo">
                        <Form.Label>Peso</Form.Label>
                        <MaskedFormControl required mask='11' placeholder='Número do telefone' value={txtPeso}
                            onChange={(e) => setTxtPeso(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTelefone">
                        <Form.Label>Altura</Form.Label>
                        <MaskedFormControl required mask='1.11' placeholder='Número do telefone' value={txtAltura}
                            onChange={(e) => setTxtAltura(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Button variant="outline-success" type="submit">Gravar</Button>
            </Form>
        </>
    )
}

export default EditarPacienteScreen
