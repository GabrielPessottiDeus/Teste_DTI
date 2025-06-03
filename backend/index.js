import express from 'express';
import cors from 'cors';
import { students } from './data.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/students', (req, res) => {
    res.json({students});
});

app.post('/students', (req, res) => {
    const {name, grades, attendance} = req.body;
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    students.push({name, grades, attendance, average});
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

app.get('/summary', (req, res) => {
    if (students.length === 0) {
        return res.json({students: [], averages: [], aboveAvg: [], belowAttendance: []});
    }

    const disciplineCount = 5;
    const averages = Array(disciplineCount).fill(0);

    for (let i = 0; i < disciplineCount; i++) {
        averages[i] = students.reduce((sum, s) => sum + s.grades[i], 0) / students.length;
    }

    const aboveAvg = students.filter(s => s.average > (students.reduce((sum, s) => sum + s.average, 0) / students.length));
    const belowAttendance = students.filter(s => s.attendance < 75);

    res.json({students, averages, aboveAvg, belowAttendance});
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));