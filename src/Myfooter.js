import React from "react";
import Mybtn from "./My-btn1";


class Myfooter extends React.Component {

	constructor(props){
		super()
		
	}


	render(){
		return(
			<>
                <div className="col-4 text-left" >
                    <p style={{color:"#fff"}}>GET IN TOUCH</p>
                    <div className="col-12 text-left" >
                        <p style={{color:"#fff"}}>ahassaneina7@gmail.com</p>
                    </div>
                    <div className="col-12 text-left" >
                        <p style={{color:"#fff"}}>+201001325527</p>
                    </div>
                </div>

                <div className="col-4 text-center">
                    <div className="col-12 text-center">   
                        <Mybtn  title="CONTACT ME" color="outline-light"/> 
                    </div>
                </div>

                <div className="col-4 text-right">
                <div className="col-12 text-right" >
                        <p style={{color:"#fff"}}>ahassaneina7@gmail.com</p>
                </div>

                <div className="col-12 text-right" >
                        <p style={{color:"#fff"}}>Copyright &copy;2019 KR</p>
                </div>
                </div>
			</>
			)
	}



}

export default Myfooter;