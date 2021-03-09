import React from 'react';

const PacienteGridDetail = ({ paciente }) => {
    return (
        <tr key={paciente.idpaciente}>
            <td>{paciente.idpaciente}</td>
            <td>{paciente.data_consulta}</td>
            <td>{paciente.atendimento}</td>
        </tr>
    )
}

export default PacienteGridDetail;
