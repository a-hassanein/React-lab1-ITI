import React from "react";
import Button from 'react-bootstrap/Button'



class Mybtn extends React.Component {

	constructor(props){
		super()
		const mystyle = {
			padding: "10px"
		};
	}


	render(){
		return(
			<>
			<Button variant={this.props.color} style={{width: "100%", maxWidth: "300px" ,padding: "10px" ,fontSize:"1.5em"}}>{this.props.title}</Button>{' '}
			 </>
			)
	}



}

export default Mybtn;