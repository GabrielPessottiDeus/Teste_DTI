export default function Summary({ averages, aboveAvg, belowAttendance }) {
    //Mostra sumario com as informacoes da turma
    return (
      <div className="summary">
        <h3>Média da turma por disciplina</h3>
        <p>{averages.map((a, i) => `D${i + 1}: ${a.toFixed(2)}`).join(' | ')}</p>
  
        <h3>Alunos com média acima da média da turma</h3>
        {aboveAvg.length > 0 ? <ul>{aboveAvg.map((s, i) => <li key={i}>{s.name}</li>)}</ul> : <p>Nenhum</p>}
  
        <h3>Alunos com frequência abaixo de 75%</h3>
        {belowAttendance.length > 0 ? <ul>{belowAttendance.map((s, i) => <li key={i}>{s.name}</li>)}</ul> : <p>Nenhum</p>}
      </div>
    );
  }
