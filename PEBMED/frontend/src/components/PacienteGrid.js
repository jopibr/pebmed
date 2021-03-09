import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PacienteGrid = ({ paciente }) => {
    return (
        <tr key={paciente.idpaciente}>
            <td>{paciente.idpaciente}</td>
            <td>{paciente.nome}</td>
            <td>{paciente.data_nascimento}</td>
            <td>{paciente.sexo}</td>
            <td>{paciente.telefone}</td>
            <td>
                <Link className='btn btn-outline-primary btn-sm' to={`/paciente_detalhe/${paciente.idpaciente}`}>Ver paciente</Link>
            </td>
        </tr>
    )
}

export default PacienteGrid;
