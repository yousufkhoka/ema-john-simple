import React, { useContext, useState } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import { userContext } from '../../App';

import { firebaseInitializeApp, hendleCreateUserWithEmailAndPassword, hendleSignFacebook, hendlesignInWithEmailAndPassword, hendleSubmitGoogleLogin, hendleSubmitLogOut } from './LoginManager';
import { useLocation, useNavigate } from 'react-router-dom';




// initializeApp(firebaseConfig)

const Login = () => {
  const [loggedInUser , setLoggedInUser] = useContext(userContext)
  const [newUser , setNewUser] = useState(false)
    const [user ,setUser] = useState({
        isSigIn:false,
        name:'',
        email:'',
        photo:'',
        password:'',
        success:false,
        error:'',
    })
    firebaseInitializeApp()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  
    const hendleRespons =(res,redirect)=> {
      setUser(res)
      setLoggedInUser(res)
      if(redirect){
        navigate(from, {replace: true});
      }
      
    }
    const hendleBlur = (event) =>{
       let isFormValid = true
       if(event.target.name === 'email'){
        isFormValid = /\S+@\S+\.\S+/.test(event.target.value)
        
       }
       if(event.target.name === 'password'){
        const isPasswordValid = event.target.value.length > 6
        const isPasswordHesNumber = /\d{1}/.test(event.target.value)
        isFormValid = isPasswordValid && isPasswordHesNumber
       }
       if(isFormValid){
        const isUserInfo = {...user}
        isUserInfo[event.target.name] = event.target.value
        setUser(isUserInfo)

       }
    }


const hendelSubmit = (event) =>{
  if(newUser && user.email && user.password){

    hendleCreateUserWithEmailAndPassword(user.name, user.email, user.password ,user)
    .then(res =>{
      hendleRespons(res,true);
      console.log(res.name,res.email ,'hello login',res)
    }).catch(err =>{
      hendleRespons(err,false);
    })
  };
  if(!newUser && user.email && user.password ){
  
    hendlesignInWithEmailAndPassword(user.email,user.password ,user)
    .then(res =>{
      hendleRespons(res,true);
      console.log(res.name,res.email , 'hello helokjfi',res)
    }).catch(err =>{
      hendleRespons(err,false);
      console.log(err,'error')
    })
  }
  event.preventDefault()


}

// google login 

const GoogleSubmitLogin = () => {
  hendleSubmitGoogleLogin()
  .then(res =>{
    hendleRespons(res,true);
    console.log(res.name,res.email)
  })
}
// logOut
const GoogleSubmitLogOut = () => {
  hendleSubmitLogOut()
  .then(res =>{
    hendleRespons(res,false);
    console.log(res.name,res.email)
  })
}
//  facebook login
const hendleLignFb = () => {
  hendleSignFacebook()
  .then(res =>{
    hendleRespons(res,true);
    console.log(res.name,res.email)
  })
}

console.log(user,'user dettels')


      
    return (
        <div className='loginPart'>
         <div className="login-cart">      
            <Button variant="warning"  
            onClick={user.isSigIn ? GoogleSubmitLogOut : GoogleSubmitLogin}>
              {user.isSigIn ? 'Sign Out' : 'Sign In Google'}
            </Button>
            <br />
            <br />
            <Button variant="primary"  
            onClick={hendleLignFb}>
              'Sign In facebook'
            </Button>
            <br />
              <h4>OR</h4>
          <form onSubmit={hendelSubmit}>
         { newUser && <input  className='form-control' type="text" name="name" onBlur={hendleBlur} placeholder='Your Name' required/>}
        <br />
        <input className='form-control'  type="email" name="email" id="" onBlur={hendleBlur}  placeholder='Your email' required/>
        <br />
        <input className='form-control'  type="password" name="password" onBlur={hendleBlur} placeholder='Your password' required/>
        <br />
      
      <Button variant="danger">
        <input className=' submitButton'  type="submit" value={newUser ? 'Sing up' :'Sign In'}/>
        </Button>{' '}
      </form>

       <button className='CreateOrSign' onClick={() => setNewUser(!newUser)}>{
        newUser ? 'Go To Sign In' : 'Create New User Accound'
       }</button>
         
         <br />
         <br />
         {
          user.success && <p>usr {newUser ? 'create' : "lignIn"} successful</p>
         }      
         <p style={{color:"red"}}>{loggedInUser.error}</p>     
         </div>          
        </div>
    );
};

export default Login; 