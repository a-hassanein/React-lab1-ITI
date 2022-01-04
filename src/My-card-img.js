import React from "react";
// import cover from './baner-black.png';
import Mybtn from "./My-btn1";
import './CardImg.css';
import Card from 'react-bootstrap/Card';

class McardImg extends React.Component {

	constructor(props){
		super()
        this.state = { 
			title: "CONTACT ME"
		}
	}


	render(){
		return(
			<div className="col-12">
            <Card className="bg-dark text-white" >
            <Card.Img className="img-fluid " src={require('./baner-black3.png')}  alt="Card image"/>
            <Card.ImgOverlay>
                <div className="col-7">
                <div className="text-center" style={{marginTop: "200px"}}>
                <Card.Title style={{fontSize: "5em" }}>Ahmed Hassanein Ahmed</Card.Title>
                <Card.Text style={{fontSize: "2.5em" }}>Web Developer and Designer</Card.Text>
                <Mybtn  title="CONTACT ME" color="outline-light"/> 
                </div>
                <div className="col-5">

                </div>
                </div>
            </Card.ImgOverlay>
            </Card>
			</div>
		)
	}



}

export default McardImg;