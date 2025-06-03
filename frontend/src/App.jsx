import { useEffect, useState } from 'react';
import api from './services/api';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Summary from './components/Summary';

function App() {
  const [students, setStudents] = useState([]);
  const [averages, setAverages] = useState([]);
  const [aboveAvg, setAboveAvg] = useState([]);
  const [belowAttendance, setBelowAttendance] = useState([]);

  const fetchData = async () => {
    const res = await api.get('/summary');
    setStudents(res.data.students);
    setAverages(res.data.averages);
    setAboveAvg(res.data.aboveAvg);
    setBelowAttendance(res.data.belowAttendance);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
