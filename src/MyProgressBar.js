import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Badge from 'react-bootstrap/Badge'
import './App.css';


class Myprogress extends React.Component {

	constructor(props){
		super()
	}


	render(){
		return(
            <>
			<div className="row">
                
                <div className="col-12" >
                    <div className="progress" id="bar" >
                        <div id="labelId" style={{width:"200px" ,height: "250px"}}>{this.props.title}</div><div className="progress-bar" role="progressbar" style={{width: this.props.degree }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> 
                </div>
			</div>
            </>
		)
	}



}
export default Myprogress;