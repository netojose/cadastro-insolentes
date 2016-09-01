import React from 'react';
import {render} from 'react-dom'

import Input from './Input.jsx'

require('es6-promise').polyfill()
require('isomorphic-fetch');

class Form extends React.Component {

	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.setValue =  this.setValue.bind(this)
		this.state = {
			values: {},
			sent: false
		}
  	}

  	handleSubmit(evt){
  		evt.preventDefault()
  		
  		fetch('/server.php', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(this.state.values)
		})

		this.setState({sent: true})
  	}

  	setValue(name, value){
  		let values = this.state.values
  		values[name] = value
  		this.setState({values: values})
  	}

  render () {
    return (
    	<form onSubmit={this.handleSubmit}>
    	  <h1>Cadastro</h1>
		  <Input label="Nome" name="nome" setValue={this.setValue} />
		  <Input label="Função" name="funcao" setValue={this.setValue} />
		  <Input label="Idade" name="idade" setValue={this.setValue} />
		  <Input label="Região onde reside" name="regiao_onde_reside" setValue={this.setValue} />
		  <Input label="RG" name="rg" setValue={this.setValue} />
		  <Input label="Data de nascimento" name="data_nascimento" setValue={this.setValue} />
		  <Input label="CPF" name="cpf" setValue={this.setValue} />
		  <Input label="Endereço" name="endereco" setValue={this.setValue} />
		  <Input label="Bairro" name="bairro" setValue={this.setValue} />
		  <Input label="CEP" name="cep" setValue={this.setValue} />
		  <Input label="Atual ou Último salário" name="salario" setValue={this.setValue} />
		  <Input label="Benefícios e valores" name="beneficios" setValue={this.setValue} />
		  <Input label="Inglês - nível de fluência" name="ingles" setValue={this.setValue} />
		  <Input label="Espanhol - nível de fluência" name="espanhol" setValue={this.setValue} />
		  <Input label="Pretensão salarial" name="pretensao" setValue={this.setValue} />
		  <Input label="Numero do celular" name="celular" setValue={this.setValue} />
		  <Input label="Email" name="email" setValue={this.setValue} />
		  {(() => {
		  	if(this.state.sent){
		  		return <div className="alert alert-success" role="alert">Dados enviados com sucesso</div>
		  	}
		  })()}
		  <button type="submit" className="btn btn-default">Enviar</button>
		</form>
	);
  }
}

export default Form