# Teste_DTI

---

## Funcionalidades

- Cadastrar alunos com:
  - Nome
  - Notas em 5 disciplinas (0 a 10)
  - Frequência (%)  
- Calcular:
  - Média individual de cada aluno
  - Média da turma por disciplina
  - Alunos com média acima da média da turma
  - Alunos com frequência abaixo de 75%
- Listar todos os alunos cadastrados
- Remoção de alunos da lista.

---

## Tecnologias utilizadas

- **Front-end:** React
- **Back-end:** Node.js + Express
- **Comunicação:** Axios (HTTP requests)
- **Estilização:** CSS puro

---

## Como executar o projeto

### Requisitos

- Node.js e npm instalados (`sudo dnf install nodejs npm -y` no Fedora)

---

### Clonar o projeto e instalar dependências

```bash
git clone https://github.com/GabrielPessottiDeus/Teste_DTI.git
cd Teste_DTI
```

#### 1. Rodar o back-end

```bash
cd backend
npm install
npm start
```

> O back-end estará disponível em: `http://localhost:3001`

#### 2. Rodar o front-end

Em outro terminal:

```bash
cd frontend
npm install
npm start
```

> O front-end abrirá em: `http://localhost:3000`

---

## Estrutura do projeto

```
student-manager/
│
├── backend/             # API REST com Node.js
│   ├── index.js
│   ├── data.js
│   └── package.json
│
└── frontend/            # Interface com React
    ├── src/
    │   ├── App.jsx
    │   ├── index.js
    │   ├── index.css
    │   ├── services/
    │   │   └── api.js
    │   └── components/
    │       ├── StudentForm.jsx
    │       ├── StudentList.jsx
    │       └── Summary.jsx
    └── package.json
```

---

## Premissas e decisões

- Considera-se que o professor pode em algum momento querer remover algum aluno, portanto o projeto inclui um meio de deletar um aluno da lista.
- Considera-se que o nome do aluno é único (para simplificar a remoção)
- Os dados são armazenados apenas em memória (sem banco de dados)
- A interface foi estilizada apenas com **CSS puro**.
- Manter o projeto simples, didático e de fácil entendimento.

---

## Autor

Desenvolvido por **Gabriel Pessotti de Deus**  
