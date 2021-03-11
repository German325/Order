import React, {Component} from "react";
import LogIn from "../src/components/LogIn/LogIn.js";
import LogicLogIn from "./components/LogInFire/LogicLogIn"


//  <MainPage/>
export default class App extends Component{
    render(){
        return(
            <>
            <LogicLogIn/>
            </>
        )
    }
}
