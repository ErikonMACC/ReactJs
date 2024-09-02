import './App.css'

let alunos = [
  { nome: "Savalo Horse", cursos: ['DS', 'ADM'] },
  { nome: "Miranata Filoxina", cursos: ['MA', 'ADM'] },
];

function App() {
  return (
    <>
      {alunos.map((aluno) => (
        <div key={aluno.nome}>
          <div>{aluno.nome}</div>
          {aluno.cursos.map((curso, index) => (
            <h2 key={index}>{curso}</h2>
          ))}
        </div>
      ))}
    </>
  )
}

export default App