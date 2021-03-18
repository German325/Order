import React, {useState, useEffect} from "react";
import "firebase/auth";
import fireBase from "../../firebase";
import LogIn from "../LogIn/LogIn"
import Header from "../Header/Header"
import { Component } from "react";



const LogicLogIn = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () =>{
        setEmail('');
        setPassword('');
    }

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
        clearErrors();
        fireBase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                    setEmailError({emailError:'Неверная почта'})
                   break;
                case "auth/user-disabled":
                    setEmailError({emailError:'Повторите попытку'})
                    break
                case "auth/user-not-found":
                    setEmailError({emailError:'Такого пользователя не существует'})
                    break;
                case "auth/wrong-password":
                   setPasswordError({ passwordError:'Неверный пароль'})
                    break;
            }
        })
    }

    const handleSignup = () => {
        clearErrors();
        fireBase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred)=>{
            console.log(cred)
        })
        .catch(err =>{
            switch (err.code){
                case "auth/email-alreay-in-use":
                    setEmailError({emailError:'Эта почта уже используется'})
                
                case "auth/invalid-email":
                    setEmailError({emailError:'Неверная почта'})
            
                case "auth/weak-password": 
                setPasswordError({passwordError:'Пароль должен быть больше 6 символов'})
                    
            }
        })
    }

    const handlelogOut = () =>{
        fireBase
        .auth()
        .signOut();
        window.location.assign('http://localhost:3000')
    }

    const authListener = () => {
        fireBase
        .auth()
        .onAuthStateChanged((user)=>{
            if(user){
                clearInputs('');
                setUser(user)
            } else {
                setUser('')
            }
        })
    }

    useEffect(()=>{
        authListener();
    },[])

    return(
        <div>
        {user ? 
        <Header handlelogOut={handlelogOut}/> :
             <LogIn 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        setHasAccount={setHasAccount}
        setemailError={emailError}
        setpasswordError={passwordError}
        hasAccount={hasAccount}
        />
        }
       
        
        </div>
    )
}

export default LogicLogIn;