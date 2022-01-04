import React from "react";
import './App.css';
import Card from 'react-bootstrap/Card'


class Mycard extends React.Component {

	constructor(props){
		super()
	}


	render(){
		return(
			<>
                {/* <div className="col-4 text-center">
                   <div style={{backgroundColor:this.props.cardcolor}} id="cardID"> {this.props.cardcontent} </div>
                </div> */}

                <div className="card text-center" style={{backgroundColor: this.props.cardcolor ,width:"18erm" ,height:"300px" ,color:"#fff" ,fontSize:"4em" ,marginTop:"25px"}} >
                <div className="card-body" id="cardcenterID">
                    <h5 className="card-title" >{this.props.cardcontent}</h5>
                </div>
                </div>
			</>
		)
	}



}

export default Mycard;