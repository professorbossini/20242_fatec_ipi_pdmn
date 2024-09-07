import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //new Date(ano, mes, dia): mes de 0 a 11, dia de 1 a 31
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estouNoSul = latitude < 0
    if(data >= d1 && data < d2)
      return estouNoSul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return estouNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estouNoSul ? 'Verão' : 'Inverno'
    return estouNoSul ? 'Outono' : 'Primavera'
  }

  obterLocalizacao = () => {
    //1. obter a localização do usuário usando o método getCurrentPosition
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        //2. quando ela estiver disponível:
        //2.1 obter a data atual do sistema
        const dataAtual = new Date()
        //2.2 obter a estação climática do usuario usando a função obter estação
        const estacao = this.obterEstacao(dataAtual, posicao.coords.latitude)
        //2.3 obter o nome do ícone usando o mapa de ícones
        const icone = this.icones[estacao]
        //2.4 atualizar o estado usando a função this.setState
        // this.state.latitude = posicao.coords.latitude
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleString(),
          icone: icone
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
      }
    )
  }

  icones = {
    'Primavera': 'fa-seedling',
    'Verão': 'fa-sun',
    'Outono': 'fa-tree',
    'Inverno': 'fa-snowflake'
  }

  render(){
    return (
      <div className='container p-4 border mt-2'>
        <div className='row justify-content-center'>
          <div className='col-sm-12 col-md-8'>
            <div className='card'>
              <div className='card-body'>
                <div
                  style={{height: '6rem'}} 
                  className='d-flex align-items-center rounded mb-2'>
                    <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
                    <p className='w-75 ms-3 text-center fs-1'>{this.state.estacao}</p>
                </div>
                <p className='text-center'>
                  {
                    this.state.latitude ?
                      `Coordenadas: ${this.state.latitude},${this.state.longitude}. Data: ${this.state.data}`
                    :
                      this.state.mensagemDeErro ?
                        this.state.mensagemDeErro
                      :
                        'Clique no botão para saber a sua estação climática'
                  }
                </p>
                <button
                  onClick={this.obterLocalizacao} 
                  className='btn btn-outline-primary w-100 mt-2'>
                  Qual a minha estação?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

