import { useState } from 'react';
import api from '../services/api';

export default function StudentForm({ onAdd }) {
  //Adição de cada novo aluno na lista
  const [name, setName] = useState('');
  const [grades, setGrades] = useState(Array(5).fill(''));
  const [attendance, setAttendance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numericGrades = grades.map(Number);
    await api.post('/students', {
      name,
      grades: numericGrades,
      attendance: Number(attendance)
    });
    setName('');
    setGrades(Array(5).fill(''));
    setAttendance('');
    onAdd();
  };
  //Formulário para preenchimento de informação de cada aluno
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <div className="grades">
        {grades.map((g, i) => (
          <input key={i} type="number" placeholder={`Nota ${i + 1}`} value={g} onChange={e => {
                const newGrades = [...grades];
                newGrades[i] = e.target.value;
                setGrades(newGrades);
              }} required />
        ))}
      </div>
      <input type="number" placeholder="Frequência (%)" value={attendance} onChange={e => setAttendance(e.target.value)} required />
      <button type="submit">Adicionar Aluno</button>
    </form>
  );
}
