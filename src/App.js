import logo from './logo.svg';
import './App.css';
import home from './home.png'
import { Routes ,Route } from 'react-router-dom';
import homepage from './components/pages/homepage';


function App() {
  return (
    // <Route path="/" component={homepage} />
    <div className="container mx-auto">
      <div className='flex justify-center	py-5 border-b-2' style={{background:"#f5f5f5"}}><img className='w-28 h-7' src={home} /></div>
      <div className='flex flex justify-center py-8 space-x-2 '>
          <div className='w-16 h-7 py-1 ' style={{background: "#FCFCFC",border: "1px solid #BEBEC2" ,left: "79px",
          top: "10px",
          height: "30px", 
          width:"66px", borderRadius: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "18px", letterSpacing: "-0.154px", textAlign:"center"}}>Email</div>
          <div className='w-16 h-7 py-1 ' style={{background: "#FCFCFC",border: "1px solid #BEBEC2" ,left: "79px",
          top: "10px",
          height: "30px", 
          width:"66px", borderRadius: "10px",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "18px", letterSpacing: "-0.154px", textAlign:"center"}}>Phone</div>
         
      </div> 
      
      <div className='px-4 flex justify-center'>
              <input type="text" className='w-full' style={{padding:"20px", borderRadius:"8px",background: "#FCFCFC",border: "1px solid #BEBEC2",height: "45px", fontStyle: "normal",
              fontFamily:"Manrope",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "22px", color:"#828282"}} placeholder='Ex (337) 378 8383'   />
        </div>

        <div className='px-4 flex justify-center py-8'>
              <button className='' style={{padding: "0px 10px 0px 20px",background:"#BEBEC2",borderRadius: "10px", 
              fontWeight: "600",
              fontSize: "16px",height: "40px" , width:"124px"  ,            
              lineHeight: "22px", color:"#FFFFFF"}}>Continue</button>
        </div>

        <div className='px-4 flex justify-center py-6'>
             <p style={{fontFamily: "Manrope", fontStyle: "normal", fontWeight: "normal", fontSize: "12px", lineHeight: "16px" ,textAlign: "center", color: "#6F6E73", textAlign:"center"}}>
             by clicking continue you must agree to near labs  <span style={{color:"blue"}}>Terms & Conditions </span>ans <span  style={{color:"blue"}}>Privacy Policy</span>
             </p>
        </div>
        <div className='px-4 flex justify-center py-6'>
             <hr style={{color:"red"}}></hr>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <p>Already have NEAR account?</p>
          <button style={{width: "186px",
height: "40px",
left: "87px",
top: "376px",
background: "#414047",
borderRadius: "10px"}}>Log in with NEAR</button>

        </div>


    </div>
  );
}

export default App;
