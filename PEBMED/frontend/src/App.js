import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PacienteScreen from './screens/PacienteScreen';
import AgendamentoScreen from './screens/AgendamentoScreen';
import NovoPaciente from './screens/NovoPacienteScreen';
import PacienteDetalhe from './screens/PacienteDetalhe';
import DetalheAgendamento from './screens/DetalheAgendamentoScreen';
import EditarPaciente from './screens/EditarPacienteScreen';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className='py-3'>
        <Container>
          <Route path='/' component={PacienteScreen} exact />
          <Route path='/pacientes' component={PacienteScreen} />
          <Route path='/agendamentos' component={AgendamentoScreen} />
          <Route path='/novo_paciente' component={NovoPaciente} />
          <Route path='/paciente_detalhe/:id' component={PacienteDetalhe} />
          <Route path='/agendamento_detalhe/:id' component={DetalheAgendamento} />
          <Route path='/editar_paciente/:id' component={EditarPaciente} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
