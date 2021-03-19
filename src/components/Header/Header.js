import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import "./Header.css"


const Header = ({handlelogOut}) =>{

        return(
            
            <div>
        <header>

            <Link to="/catalog" className="all-products" className="link">
                {/* <img src={'Vector.png'} alt="all-products"/> */}
                Ассортимент
            </Link>

            <Link to="/newOrder" className="new-order" className="link">
                {/* <img src={'New-order.png'} alt="new-order"/> */}
                Новая заявка
            </Link>

            

            <p className="logo">ORder</p>
            
           <button className="logOut" onClick={handlelogOut}>
               Выйти
           </button>

        </header>


        <img className="logo-project" src={"Logo.png"} alt="logo"/>
        </div>
        )
}

export default Header;


{/* <Link to="/savedOrders" className="save-order" className="link">
              </Link>  {/* <img src={'Checked.png'} alt="saved-order"/> */}
             
            