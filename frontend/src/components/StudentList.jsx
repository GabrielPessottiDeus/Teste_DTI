import api from '../services/api';

export default function StudentList({ students, onUpdate }) {
    const removeStudent = async (name) => {
        try {
            await api.delete(`/students/${name}`);
            onUpdate();
        } catch (err) {
            alert('Erro ao remover aluno');
        }
    };
    return (
      <div className='student-list'>
        <h2>Alunos</h2>
        <ul>
          {students.map((s, i) => (
            <li key={i}>
              {s.name} - Média: {s.average.toFixed(2)} - Frequência: {s.attendance}%
              <button className='remove-btn' onClick={() => removeStudent(s.name)}>
                Remover Aluno
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
