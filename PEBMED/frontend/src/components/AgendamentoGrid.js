import React from 'react';
import { Link } from 'react-router-dom';

const AgendamentoGrid = ({ pacientes }) => {
    return (
        <tr key={pacientes.idpaciente_agendamento}>
            <td>{pacientes.idpaciente_agendamento}</td>
            <td>{pacientes.nome}</td>
            <td>{pacientes.data_agendamento}</td>
            <td>
                <Link className='btn btn-outline-primary btn-sm' to={`/agendamento_detalhe/${pacientes.idpaciente_agendamento}`}>Ver detalhe</Link>
            </td>
        </tr>
    )
}

export default AgendamentoGrid;
