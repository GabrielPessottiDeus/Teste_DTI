import api from '../services/api';

export default function StudentList({ students, onUpdate }) {
    const removeStudent = async (id) => {
        try {
            await api.delete(`/students/${id}`);
            onUpdate();
        } catch (err) {
            alert('Erro ao remover aluno');
        }
    };
    //Mostra lista de alunos
    return (
      <div className='student-list'>
        <h2>Alunos</h2>
        <ul>
          {students.map((s, i) => (
            <li key={i}>
              {s.name} - Média: {s.average.toFixed(2)} - Frequência: {s.attendance}%
              <button className='remove-btn' onClick={() => removeStudent(s.id)}>
                Remover Aluno
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
