import React from "react";
import "./LogIn.css"; 
import MainPage from "../MainPage/MainPage";
import LogicLogIn from "../LogInFire/LogicLogIn"


const LogIn = (props) => {

    const { 
        email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup,
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return(
        <div>
                       
            <div className="logIn">
                <img className="logIn_img" src={'Logo.png'} alt="Logo"/>
                <p className="logIn_text">Вход</p>
                <input 
                    type="text" 
                    placeholder="Логин" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}    
                />
                <p className="error">{emailError}</p>
                <input 
                    className="password-input" 
                    type="password" 
                    placeholder="Пароль"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="error">{passwordError}</p>
                <div>{hasAccount ?
                <>
                <button className="logIn_button" onClick={handleSignup}>Зарегистрироваться</button>
                <p className="visial">
                Если у вас есть аккаунт:  <span className="visial" onClick={()=>setHasAccount(!hasAccount)}>Войти</span></p>
                </> :
                <>
                <button className="logIn_registre" onClick={handleLogin}>Войти</button>
                <p className="visial">
                Если нет аккаунта:  <span className="visial" onClick={()=>setHasAccount(!hasAccount)}>Зарегистрироваться</span></p>
                </>
                }
                
                
                </div>
            </div> 
            
            
        </div>
    )
  
}

export default LogIn;


