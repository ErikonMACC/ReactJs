import './App.css'

function App() {
  let veiculo = {
    marca: "Volksvagem",
    modelo: "Gol",
    ano: 2013,
    cor: "Preto",
    proprietario: {
      nome: "Carlitos",
      endereco: {
        rua: "rua quebrada",
        bairro: "Centro",
        cidade: "Iperó",
        UF: "SP"
      },
      telefones: [
        "15-999999999",
        "15-999999999",
        "15-999999999"
      ]
    },
    fotos: [
      'https://blog.olhonocarro.com.br/wp-content/uploads/2023/07/image-107.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9iQmyLC6nDmP3Sq-eZvzWEaq5maqoNGusQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Yt6WuIRq490IS2tXieRIAjRDeZSe-xyuOA&s'
    ],
    thumbnail: {
      largura: 100,
      altura: 100,
      borda: '1px solid red'
    }
  }
  return (
    <>
      <div>
        <h1>Marca: {veiculo.marca}</h1>
        <h2>Modelo: {veiculo.modelo}</h2>
        <h2>Ano: {veiculo.ano}</h2>
        <h2>Cor: {veiculo.cor}</h2>
        <hr />
        <h1>Informações do proprietário:</h1>
        <h2>Nome: {veiculo.proprietario.nome}</h2>
        <h2>Rua: {veiculo.proprietario.endereco.rua}</h2>
        <h2>Bairro: {veiculo.proprietario.endereco.bairro}</h2>
        <h2>Cidade: {veiculo.proprietario.endereco.bairro} / {veiculo.proprietario.endereco.UF}</h2>
        <h2>Telefones:</h2>
        {
          veiculo.proprietario.telefones?.map((telefone, index) => (
            <div key={index}><h3>{telefone}</h3></div>
          ))
        }
        <h2>Fotos:</h2>
        {
          veiculo.fotos?.map((fotos, index) => (
            <div key={index}>
              <img src={fotos}
                style={
                  {
                    width: veiculo.thumbnail.largura,
                    height: veiculo.thumbnail.altura,
                    border: veiculo.thumbnail.borda
                  }
                } />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
