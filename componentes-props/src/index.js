import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
const App = () => {
  return <div className='container border p-4'>
    <div className='row'>
      <div className='col-12'>
       <h1 className='display-5 text-center border-bottom mb-4'>Seus pedidos</h1>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-12 col-lg-6 col-xxl-4'>
        <Cartao cabecalho="22/05/2022">
          <Pedido 
            titulo="SSD"
            descricao="SSD 256Gb"
            icone="fa-solid fa-hard-drive fa-2x"/>
        </Cartao>
      </div>
      <div className='col-sm-12 col-lg-6 col-xxl-4'>
        <Cartao cabecalho="23/06/2024">
        <Pedido 
            titulo="Memória"
            descricao="Memória 16Gb"
            icone="fa-solid fa-memory fa-2x" />
        </Cartao>
      </div>
      <div className='col-sm-12 col-lg-12 col-xxl-4'>
        <Cartao cabecalho="22/01/2024">
          <Pedido 
              titulo="Foguete"
              descricao="Foguete de verdade"
              icone="fa-solid fa-shuttle-space fa-2x" />   
        </Cartao>
      </div>      
    </div>
    
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
