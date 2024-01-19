import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider  = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const xProvider = new TwitterAuthProvider()
const facebookProvider  = new FacebookAuthProvider()
const AuthProvider = ({children}) => {
 const [user , setUser] = useState([]);
 const [loading , setLoading ] = useState(true);


 // create user 
 const createUser = (email ,password ) => {
    setLoading(true) ;
    return createUserWithEmailAndPassword(auth, email, password)
 }
 // signIn 
  const signIn = (email ,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth , email ,  password)
  }
  // google
  const googleSignIn = (email , password) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  // xSignIn
  const xSignIn = ( email, password )=>{
   setLoading(true);
   return signInWithPopup(auth , xProvider)
  }
  // gitub signIn 
 const gitubSignIn = (email , password) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
 }
 // facebooklogin
 const facebookSign = (email,password) => {
   setLoading(true);
   return signInWithPopup(auth, facebookProvider)
 }
 // logout 
 const logout = (email , password ) => {
    setLoading(true);
    return signOut(auth , email , password);
 }
 const updateProfile = (name , photo ) =>{
    return updateProfile(auth.currentUser,{
        displayName : name,
        photoURL: photo
    })
 }
 useEffect( () => {
 const  unSubscribe = onAuthStateChanged(auth , currentUser => {
    setUser(currentUser);
    setLoading(false)
    
    
  }) 
  return () => {
    return unSubscribe()
  }
 },[])
  const  authInfo = {
    user ,
    loading , 
    createUser,
    signIn,
    googleSignIn,
    gitubSignIn,
    logout,
    updateProfile,
    xSignIn,
    facebookSign
  }  

     return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;