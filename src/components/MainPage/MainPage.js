import React from "react";
import "./MainPage.css"


const MainPage = ({handlelogOut}) =>{
    
        return(
            <div>
        <header>
            <button className="all-products">
                <img src={'Vector.png'} alt="all-products"/>
            </button>
            <button className="new-order">
                <img src={'New-order.png'} alt="new-order"/>
            </button>
            <button className="saved-order">
                <img src={'Checked.png'} alt="saved-order"/>
            </button>

            <p className="logo">ORder</p>
            
           <button className="logOut" onClick={handlelogOut}>
               Выйти
           </button>
        </header>
        <img className="logo-project" src={"Logo.png"} alt="logo"/>
        </div>
        )
}

export default MainPage;