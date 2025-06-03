import { useEffect, useState } from 'react';    //useState - guarda informacoes / useEffect - executa acoes quando a tela carrega
import api from './services/api';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Summary from './components/Summary';

function App() {
  const [students, setStudents] = useState([]);   //guardar os dados que o backend envia
  const [averages, setAverages] = useState([]);
  const [aboveAvg, setAboveAvg] = useState([]);
  const [belowAttendance, setBelowAttendance] = useState([]);

  const fetchData = async () => {     //funcao que pede os dados para o back-end e guarda nas caixinhas (useState)
    const res = await api.get('/summary');
    setStudents(res.data.students);
    setAverages(res.data.averages);
    setAboveAvg(res.data.aboveAvg);
    setBelowAttendance(res.data.belowAttendance);
  };

  useEffect(() => {   //quando o app carrega pela primeira vez, usa fetch data para buscar os dados
    fetchData();
  }, []);

  return (    //mostra interface na tela -> passa a funcao fetchData para que os outros componentes possam atualizar os dados quando necessario
    <div>
      <h1>Sistema de Notas - Prof. Carlos</h1>
      <div className='container'>
        <StudentForm onAdd={fetchData} />
        <StudentList students={students} onUpdate={fetchData} />
        <Summary averages={averages} aboveAvg={aboveAvg} belowAttendance={belowAttendance} />
      </div>
    </div>
  );
}

export default App;
