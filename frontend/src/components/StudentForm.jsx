import { useState } from 'react';
import api from '../services/api';

export default function StudentForm({ onAdd }) {   //guarda as informacoes
  const [name, setName] = useState('');
  const [grades, setGrades] = useState(Array(5).fill(''));
  const [attendance, setAttendance] = useState('');

  const handleSubmit = async (e) => {  //quando o botao de enviar eh clicado
    e.preventDefault();     //impede o formulario de recarregar a pagina
    const numericGrades = grades.map(Number);   //transforma as notas em numeros
    await api.post('/students', {       //evia os dados para o back-end com o POST /students
      name,
      grades: numericGrades,
      attendance: Number(attendance)
    });
    setName('');      //limpa os campos depois do envio
    setGrades(Array(5).fill(''));
    setAttendance('');
    onAdd();    //update dos dados no app
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <div className="grades">
        {grades.map((g, i) => (
          <input key={i} type="number" placeholder={`Nota ${i + 1}`} value={g}
              onChange={e => {
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
