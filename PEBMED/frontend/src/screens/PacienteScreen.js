import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listPacientes } from '../actions/pacienteActions';
import PacienteGrid from '../components/PacienteGrid';


const PacienteScreen = () => {
    const dispatch = useDispatch();

    const pacienteList = useSelector((state) =>
        state.pacienteList
    );

    const { loading, error, pacientes } = pacienteList;

    useEffect(() => {
        dispatch(listPacientes());
    }, [dispatch]);

    return (
        <>
            <div className="btn-toolbar">
                <h1 className="col-sm">Pacientes</h1>
                <Link className='btn btn-outline-dark float-right my-3' to='/novo_paciente'>Novo Paciente</Link>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Data Nascimento</th>
                        <th>Sexo</th>
                        <th>Telefone</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :
                        pacientes.map(paciente => (
                            <PacienteGrid paciente={paciente} />
                        ))
                    }
                </tbody>
            </Table>

        </>
    )
}

export default PacienteScreen;
