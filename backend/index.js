import express from 'express';      //framework que cria o servidor HTTP de forma simmples
import cors from 'cors';            //permite que o front-end converse com o back-end
import { students } from './data.js';   //pega a lista de alunos de data.js

const app = express();      //criamos uma instancia do servidor
app.use(cors());        //permite que qualquer origem envie requisicoes para o servidor
app.use(express.json());    //permite que o servidor entenda dados no formato JSON envviados pelo front-end

app.get('/students', (req, res) => {    //pede os alunos, o servidor responde com a lista students e formato json
    res.json({students});
});

app.post('/students', (req, res) => {   //recebe os dados de um aluno novo vindo do forulario no React
    const {name, grades, attendance} = req.body;
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    students.push({name, grades, attendance, average});     //adiciona esse aluno na lista de alunos do servidor
    res.status(201).json({message: 'Student added'});
});

app.delete('/students/:name', (req, res) => {
    const {name} = req.params;
    const index = students.findIndex(s => s.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        return res.json({message: 'Aluno removido.'});
    }
    res.status(404).json({error: 'Aluno nao encontrado.'});
});

app.get('/summary', (req, res) => {     //para mostrar o resumo da turma
    if (students.length === 0) {
        return res.json({students: [], averages: [], aboveAvg: [], belowAttendance: []});
    }

    const disciplineCount = 5;
    const averages = Array(disciplineCount).fill(0);    //media da turma por diciplina - cria uma lista com 5 zeros inicialmente para mostrar a media da turma por diciplina

    for (let i = 0; i < disciplineCount; i++) {     //para cada diciplina, calcula a media da sala
        averages[i] = students.reduce((sum, s) => sum + s.grades[i], 0) / students.length;
    }

    const aboveAvg = students.filter(s => s.average > (students.reduce((sum, s) => sum + s.average, 0) / students.length));
    const belowAttendance = students.filter(s => s.attendance < 75);

    res.json({students, averages, aboveAvg, belowAttendance});
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));