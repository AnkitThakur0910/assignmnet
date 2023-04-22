import React, { useEffect, useState } from 'react'
import './style.css'
import imag1 from '../assests/logo.png'
import imag2 from '../assests/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import imag3 from '../assests/Website Management.png'
import imag4 from '../assests/software-testing.jpg'
import imag5 from '../assests/mobile-app.png'
import p1 from '../assests/person1.jpg'
import p2 from '../assests/person2.jpg'
import p3 from '../assests/person3.jpg'
import p4 from '../assests/person4.jpg'
import p5 from '../assests/person5.jpg'
import p6 from '../assests/person6.jpg'
import team1 from '../assests/team1.jpg'
import team2 from '../assests/team2.webp'
import team3 from '../assests/team3.webp'

function Header() {
let i=0
  useEffect(()=>{

   const interval = setInterval(()=>{
     
      if(i<13)
      {
        console.log(i)
        document.getElementById('testimonials').scrollBy(200,0);
        document.getElementById('testimonials').style.scrollBehavior = "smooth";
        i++;
        
      }
      else{
        clearInterval(interval)
      }
    },3000)
 
})

const func1 = ()=>{
  document.getElementsByClassName('navigate')[0].classList.remove('d-n')
}

const func2 = ()=>{
  document.getElementsByClassName('navigate')[0].classList.add('d-n')
}
 
  return (
    <div className='page'>
    <div className='backimage'>
    <div className='header'>
    
     <div style={{maxWidth:"80px",minWidth : "80px"}} className='logo'>
       <img style={{height:"auto",width : "100%",}} src={imag1} alt = "logo" />
     </div>
     
       
     <div onMouseOver={()=>func1()} onMouseOut={()=>func2()} className='sections'>

       <div style={{height : "3px",width : "20px", backgroundColor : "black"}}></div>
       <div style={{height : "3px",width : "20px", backgroundColor : "black"}}></div>
       <div style={{height : "3px",width : "20px", backgroundColor : "black"}}></div>
       <div className='navigate d-n'>
         <div className='three'>
          <div className='about'>
            <a style={{textDecoration : "none"}} href='#about'><span style={{fontSize : "1rem",fontWeight : "bold",fontFamily : "'Open Sans',sans-serif"}}>About</span></a>
          </div>
          <div className='services'>
          <a style={{textDecoration : "none"}} href='#services'><span style={{fontSize : "1rem",fontWeight : "bold",fontFamily : "'Open Sans',sans-serif"}}>Services</span></a>
          </div>
          <div className='testimonials'>
          <a style={{textDecoration : "none"}} href='#testimonials'><span style={{fontSize : "1rem",fontWeight : "bold",fontFamily : "'Open Sans',sans-serif"}}>Testimonials</span></a>
          </div>
         </div>
         <div className='two'>
          <div className='team'>
          <a style={{textDecoration : "none"}} href='#team'><span style={{fontSize : "1rem",fontWeight : "bold",fontFamily : "'Open Sans',sans-serif"}}>Team</span></a>
          </div>
          <div className='contact'>
          <a style={{textDecoration : "none"}} href='#contact'><span style={{fontSize : "1rem",fontWeight : "bold",fontFamily : "'Open Sans',sans-serif"}}>Contact</span></a>
          </div>
         </div>
       </div>
     </div>
     
     <div ></div>
     <div ></div>
     <div ></div>
     <div ></div>
    </div>
    <div className='content-image'>
     <span style={{fontSize : "2.0rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",color : "black"}}>Software Services</span>
     <span style={{fontSize : "1.1rem",fontWeight : "400",color : "black"}}>Use our free web services for your website</span>
     <button className='sign-in' style={{width : "100px",padding:"0.6rem",border : "none",backgroundColor : "#001242",color : "white", fontSize : "1rem", fontFamily : "'Inter',sans-serif",marginTop : "2rem",fontWeight : "bold"}}>Sign In</button>
    </div>
    </div>
    <section id='about'>
     <div className='imge'>
        <img style={{width : "100%",height : "auto",borderRadius : "10px"}}  src={imag2} alt = "services" />
     </div>
     <div className='about2'>
       <span style={{color : "white",fontFamily : "'Open Sans',sans-serif",fontSize : "1.4rem",fontWeight : "bold"}}>About Us</span>
       <div className='about2-content'>
        <span style={{color : "white",fontSize : "1.1rem",lineHeight : "1.7rem",wordSpacing : "0.4rem"}}>Quality-centered and adherent to mature software development practices, ScienceSoft provides application development services to startups, software companies, and enterprises across 30+ industries. We are ready to offer end-to-end development that covers everything from business analysis to software delivery and support. </span>
       </div>
     </div>
    </section>
    <section id='services'>
       <div className='web-services'>
        <div >
          <img style={{width : "100%"}} src={imag3} alt="web-services"></img>
        </div>
        <div style={{display : "flex",flexDirection : "column", marginTop : "2rem",alignItems:"center",padding : "1rem"}}>
          <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",wordBreak : "break-word"}}>Web Services</span>
          
          <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "1rem",wordBreak : "break-word"}}>Here we provide all types of web services to the user </span>
        </div>
        <button className='b-change' style={{paddingTop : "0.8rem",paddingBottom : "0.8rem",marginTop : "2rem",width : "70%",marginRight : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontSize : "1.1rem",fontWeight : "bold",border : "0.1px solid #001242",borderRadius : "20px"}}>Click Here</button>
        
        <div>

        </div>
       </div>
       <div className='web-services2'>
       <div >
          <img style={{width : "100%"}} src={imag4} alt="web-services"></img>
        </div>
        <div style={{display : "flex",flexDirection : "column", marginTop : "2rem",alignItems:"center",padding : "1rem"}}>
          <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",wordBreak : "break-word"}}>Software Testing</span>
          
          <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "1rem",wordBreak : "break-word"}}>Here You can test your website by our online debugger system </span>
        </div>
        <button className='b-change' style={{paddingTop : "0.8rem",paddingBottom : "0.8rem",marginTop : "2rem",width : "70%",marginRight : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontSize : "1.1rem",fontWeight : "bold",border : "0.1px solid #001242",borderRadius : "20px"}}>Click Here</button>
        
        <div>

        </div>
       </div>
       <div className='web-services'>
       <div >
          <img style={{width : "100%"}} src={imag5} alt="web-services"></img>
        </div>
        <div style={{display : "flex",flexDirection : "column", marginTop : "2rem",alignItems:"center",padding : "1rem"}}>
          <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",wordBreak : "break-word"}}>Software Deployment</span>
          
          <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "1rem",wordBreak : "break-word"}}>Here you can deploy your website on our server</span>
        </div>
        <button className='b-change' style={{paddingTop : "0.8rem",paddingBottom : "0.8rem",marginTop : "2rem",width : "70%",marginRight : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontSize : "1.1rem",fontWeight : "bold",border : "0.1px solid #001242",borderRadius : "20px"}}>Click Here</button>
        
        <div>

        </div>
       </div>
       <div></div>
    </section>
    <section id='testimonials'>
      <div className='customer1'>
       <div style={{width : "125px",height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p1} alt='person1' />
       </div>
       <div className='customer-desc'>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",width:"100%"}}>Impeccable Experience! The navigation is easy.</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>George</span>
       </div>
      </div>
      <div className='customer2'>
      <div style={{width : "125px", height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p2} alt='person2' />
       </div>
       <div className='customer-desc' >
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",wordBreak : "break-word"}}>Satisfied. It is easier to use and very interactive.</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>Elena</span>
       
       </div>
      </div>
      <div className='customer3'>
      <div style={{width : "125px", height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p3} alt='person3' />
       </div>
       <div className='customer-desc'>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",wordBreak : "break-word"}}>Cheap. Provide more in less money</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>Shaun</span>
       </div>
      </div>
      <div className='customer4'>
      <div style={{width : "125px", height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p4} alt='person4' />
       </div>
       <div className='customer-desc'>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",wordBreak : "break-word"}}>Outstanding Experience. Suggest to use one time atleast!</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>George</span>
       </div>
      </div>
      <div className='customer5'>
      <div style={{width : "125px", height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p5} alt='person5' />
       </div>
       <div className='customer-desc'>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",wordBreak : "break-word"}}>Cheap. Provide more in less money</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>Mark</span>
       </div>
      </div>
      <div className='customer6'>
      <div style={{width : "125px", height : "125px"}}>
          <img style={{width:"100%",height : "100%",borderRadius : "50%"}} src={p6} alt='person6' />
       </div>
       <div className='customer-desc'>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif",marginTop : "0.6rem",wordBreak : "break-word"}}>Outstanding Experience. Suggest to use one time atleast!</span>
         <span style={{fontSize : "1.0rem",fontFamily : "'Open Sans',sans-serif", marginTop: "0.8rem",padding : "0.3rem 0.9rem 0.3rem 0.9rem",fontWeight : "bold",color : "#03045E",backgroundColor : "rgba(202, 240, 248,0.4)",borderRadius : "20px"}}>Barker</span>
       </div>
      </div>
    </section>
    <section id='team'>
    <div className='designer'>
      <div style={{width : "160px"}} className='image'>
        <img style={{width : "100%",height : "auto"}}  src={team1} alt='team1' />
      </div>
      <div className='team-desc'>
        <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",marginBottom : "0.1rem"}} className='team-member-name'>Steve</span>
        <span style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "500", color : "gray",marginBottom:"1rem"}} className='team-member-designation'>Senior designer</span>
        <button style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",color : "white",backgroundColor : "#000022",border : "none",padding : "0.3rem 1rem 0.3rem 1rem"}} className='team-contact'>Contact</button>
      </div>
    </div>
    <div className='manager'>
    <div style={{width : "160px"}} className='image'>
        <img style={{width : "100%",height : "auto"}}  src={team2} alt='team2' />
      </div>
      <div className='team-desc'>
        <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",marginBottom : "0.1rem"}} className='team-member-name'>Bill</span>
        <span style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "500", color : "gray",marginBottom:"1rem"}} className='team-member-designation'>Manager</span>
        <button style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",color : "white",backgroundColor : "#000022",border : "none",padding : "0.3rem 1rem 0.3rem 1rem"}} className='team-contact'>Contact</button>
      </div>
    </div>
    <div className='developer'>
    <div style={{width : "160px"}} className='image'>
        <img style={{width : "100%",height : "auto"}}  src={team3} alt='team3' />
      </div>
      <div className='team-desc'>
        <span style={{fontSize : "1.3rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",marginBottom : "0.1rem"}} className='team-member-name'>Mark</span>
        <span style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "500", color : "gray",marginBottom:"1rem"}} className='team-member-designation'>Senior developer</span>
        <button style={{fontSize : "1rem",fontFamily : "'Open Sans',sans-serif",fontWeight : "bold",color : "white",backgroundColor : "#000022",border : "none",padding : "0.3rem 1rem 0.3rem 1rem"}} className='team-contact'>Contact</button>
      </div>
    </div>
    </section>
    <section id='contact'>
     <div className='address'>
      <span>Address   :-   B-91, kalyan kunj Barola sec-49 Noida</span>
     </div>
     <div className='phone'>
      <span>Phone no. :- 8929033088</span>
     </div>
     <div className='social'>
      <i className='fab fa-instagram'></i>
      <i className='fab fa-twitter'></i>
      <i className='fab fa-facebook-f'></i>
     </div>
    </section>
    </div>
  )
}

export default Header