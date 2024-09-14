// react class component: rcc
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      // .d-flex.justify-content-center.align-items-center.border.rounded.p-3
      <div className='d-flex flex-column justify-content-center align-items-center border rounded p-3'>
        <div
          className='spinner-border text-primary'
          style={{width: '3rem', height: '3rem'}}>
          {/* span.visually-hidden{Carregando...} */}
          <span className='visually-hidden'>{this.props.mensagem}</span>
        </div>
        <p className='text-primary mt-3'>{this.props.mensagem}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
  mensagem: 'Carregando'
}
