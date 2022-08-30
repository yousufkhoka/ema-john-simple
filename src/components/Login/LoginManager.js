import firebaseConfig from './FirebaseConfig';
import { initializeApp } from "firebase/app";

import {
   getAuth ,createUserWithEmailAndPassword ,
  signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup,signOut,
  FacebookAuthProvider 
} from "firebase/auth";



// firebaseConfig
export const firebaseInitializeApp = ()=>{
      const app =  initializeApp(firebaseConfig)
      const auth = getAuth(app);
}
// PrivateRoute history


// google signInWithPopup

 export const hendleSubmitGoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, googleProvider)
  .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const {displayName , email , photoURL}= user
      console.log(user)
     const userInfo = {
           isSigIn:true,
            name:displayName,
            email:email,
            photo:photoURL,
      }
       return userInfo
      // ...
  })
  .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
  });
   }

//    facebookProvider signInWithPopup
 export const hendleSignFacebook = () =>{
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const {displayName , email , photoURL}= user
        console.log(user)
       const userInfo = {
             isSigIn:true,
              name:displayName,
              email:email,
              photo:photoURL,
        }
        return userInfo
    
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log( 'hello facebook lign in',user)
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      });
    }

   export const hendleSubmitLogOut = () =>{
        const auth = getAuth();
      return signOut(auth)
      .then(() => {
        // Sign-out successful.
        const userLognOut = {
            isSigIn:false,
            name:'',
            email:'',
            password:'',
            photo:'',
            success:false,
            error:''
        }
        return userLognOut
        })
        .catch((error) => {
        // An error happened.
        });
    }
// createUserWithEmailAndPassword

    export const hendleCreateUserWithEmailAndPassword = (name , email ,password,) => {
        const auth = getAuth();
   return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        const userInfo = user
        userInfo.error =''
        userInfo.success = true
        updataCurrentUser(name)
        return userInfo
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode)
       const userInfo = {}
        userInfo.success = false
        userInfo.error = errorMessage + errorCode
        return userInfo
      
        // ..
      });
    }


    export const hendlesignInWithEmailAndPassword = (email, password) => {
         const auth = getAuth();
     return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in 
          const user = userCredential.user;
             const userInfo = user
             userInfo.error =''
              userInfo.success = true
             return userInfo
            
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const userInfo = {}
          userInfo.success = false
          userInfo.error = errorMessage + errorCode
          return userInfo
          
        });
    }
    const updataCurrentUser = name =>{
          const auth = getAuth();
          const user = auth.currentUser;
          
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // ...
            user.displayName = name
            console.log(user)
          } else {
            // No user is signed in.
          }
        }