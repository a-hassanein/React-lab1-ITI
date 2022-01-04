import React from "react";



class Myabout extends React.Component {

	constructor(props){
		super()
		
	}


	render(){
		return(
			<>
                <div className="col-3 text-center" >
                    <h1 style={{fontSize: "3.5em" , textShadow:" 3px 3px #d4d0cb" ,color:"#333333"}}>About me</h1>
                </div>
                <div className="col-9">
                <p style={{color:"#383838"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum totam exercitationem et, dignissimos odit iure. Nemo ducimus dolorem explicabo neque facere. Hic, omnis corporis? Fugit quos sapiente in vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore earum a esse beatae eveniet expedita, consequatur, cupiditate distinctio aliquid et necessitatibus laborum quidem natus minima ullam repellendus explicabo laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure, eos consectetur, cum exercitationem similique assumenda sit molestiae harum neque dolor aut doloribus velit totam a ducimus repellat veniam officia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eum totam exercitationem et, dignissimos odit iure. Nemo ducimus dolorem explicabo neque facere. Hic, omnis corporis? Fugit quos sapiente in vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore earum a esse beatae eveniet expedita, consequatur, cupiditate distinctio aliquid et necessitatibus laborum quidem natus minima ullam repellendus explicabo laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure, eos consectetur, cum exercitationem similique assumenda sit molestiae harum neque dolor aut doloribus velit totam a ducimus repellat veniam officia!</p>
                </div>
			</>
			)
	}



}

export default Myabout;