import api from '../services/api';

export default function StudentList({ students, onUpdate }) {
    const removeStudent = async (name) => {     //quando clica no botao de remover
        try {
            await api.delete(`/students/${name}`);  //envia um pedido de delete para o beck-end
            onUpdate();     //atualizar a tela
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
