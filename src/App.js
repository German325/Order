import React, {Component} from "react";
import LogIn from "../src/components/LogIn/LogIn.js";
import LogicLogIn from "./components/LogInFire/LogicLogIn";
import Catalog from "./components/Сatalog/Сatalog";
import NewOrder from "./components/NewOrder/NewOrder";
import SavedOrders from "./components/SavedOrders/SavedOrders";
import { Route, BrowserRouter } from "react-router-dom";

//  <MainPage/>
export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className="main">
            <LogicLogIn/>
            </div>
            <div className="content">
            <Route path="/catalog" exact component={Catalog}/> 
            <Route path="/newOrder" exact component={NewOrder}/> 
            <Route path="/savedOrders" exact component={SavedOrders}/> 
            </div>
            </BrowserRouter>
        )
    }
}
