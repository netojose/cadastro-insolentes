import React from 'react';
import {render} from 'react-dom';

class Input extends React.Component {
	
	constructor(props){
		super(props)
		this.change = this.change.bind(this);
		this.state = {
			value: '',
			name: ''
		}
  	}

  	change(evt) {
  		this.setState({value: evt.target.value})
  		this.props.setValue(this.props.name, evt.target.value);
  	}

  	componentDidMount() {
  	    this.setState({name: this.props.name})
  	}

  	render () {
    	return (
	  	<div className="form-group">
	    <label htmlFor="exampleInputEmail1">{this.props.label}</label>
	    	<input type="txt" value={this.state.value} className="form-control" onChange={this.change} />
	  	</div>
		);
  	}
}

export default Input