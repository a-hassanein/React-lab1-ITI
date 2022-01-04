// import logo from './logo.svg';
import './App.css';
import McardImg from "./My-card-img";
import Myabout from './MyAbout';
import Myskils from './Myskils';
import Myprogress from './MyProgressBar';
import Mycard from './Mycards';
import Myfooter from './Myfooter';


function App() {
  return (
    <div className="App">
      {/* Start hero section */}
      <div className="container-fluid" id='heroID'>
        <div className='row'>
          <div className='col-12' id='CardImgID'>
            <McardImg/>
          </div>
        </div>
      </div>

      {/* Start about section */}
      <div className="container-fluid" id='aboutID'>

        <div className='row'>
          <Myabout/>
        </div>
      
        {/* Start Download resume Bonus*/}
        <div className='row '>
          <div className='col-3'></div>
          <div className='col-9 text-left' id='resumeID'>
            <a href="resume.jpg" download="resume.jpg" style={{padding: "15px" ,backgroundColor:"#333333" ,color: "white" , fontSize: "1.3em" ,width: "300px" ,border:"none" ,textDecoration:"none" }}>Download Resume</a>   
          </div>
        </div>

      </div>

      {/* Start Skills section */}
      <div className="container-fluid" id='skilsID'>
        <div className='row text-center' id='skilsContentID'>  
          <Myskils/>  
        </div>

        <div className='row text-center' id='skilsContent2ID'>  
          <div className='col-6 text-center'id='skilsdivID' >
            <h2 style={{color:"white"}}>My Focus</h2>
            <div className='text-center ' id='skillsFocus' style={{width:"300px" ,height:"5px" ,backgroundColor:"white"}}></div>
            <ul style={{color:"#fff",listStyleType:"none"}}>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Web Design</li>
              <li>Mobile App Design</li>
            </ul>
          </div> 

        

          <div className='col-6'>
            <Myprogress title="HTML" degree="80%"/>
            <br></br>
            <Myprogress title="CSS" degree="80%"/>
            <br></br>
            <Myprogress title="JS" degree="70%"/>
            <br></br>
            <Myprogress title="REACT" degree="60%"/>
            <br></br>
            <Myprogress title="PHOTOSHOP" degree="70%"/>
            <br></br>
            <Myprogress title="ADOBE XD" degree="80%"/>
            <br></br>
            <Myprogress title="NODE JS" degree="30%"/>
            <br></br>
            <Myprogress title="WORDPRESS" degree="10%"/>
          </div> 
        </div>
      </div>

      
    {/* Start Portfolio section */}
    <div className="container-fluid text-center" >
      <div className='row text-center'>
        <div className="col-4 text-center" >
          <h1 style={{fontSize: "3.5em" , textShadow:" 3px 3px #d4d0cb" ,color:"#333333" ,marginTop:"100px"}}>Portfolio</h1>
        </div>
        <div className='col-8'></div></div>
      </div>

      <div className='row text-center'id='PortfolioID'>

        <div className="col-4 text-center" >
          <Mycard cardcolor="#383838" cardcontent="Web Design"/>
        </div>

        <div className="col-4 text-center" >
          <Mycard cardcolor="#6e6e6e" cardcontent="Mobile Design"/>
        </div>
        
        <div className="col-4 text-center" >
            <Mycard cardcolor="#383838" cardcontent="Logo Design"/>
        </div>

        <div className="col-4 text-center" >
          <Mycard cardcolor="#6e6e6e" cardcontent="WEB APPLICATION DEVELOPMENT"/>
        </div>

        <div className="col-4 text-center" >
          <Mycard cardcolor="#383838" cardcontent="MOBILE APPLICATION DEVELOPMENT"/>
        </div>
        
        <div className="col-4 text-center" >
            <Mycard cardcolor="#6e6e6e" cardcontent="PWA DEVELOPMENT"/>
        </div>

      </div>


      {/* Start Portfolio section */}
      <div className="container-fluid" id='footerID'>
        <div className='row text-center'>  
          <Myfooter/>  
        </div>
      </div>


</div>

  );
}

export default App;
