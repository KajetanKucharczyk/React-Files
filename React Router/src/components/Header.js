import React from "react"
import $ from 'jquery';

import "./../css/Header.css"

import MenuButton from "./MenuButton"

class Header extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

    }

    render() {    

        console.log("render() : Header")
        
        return(

            <div className = "header">
               <MenuButton toogleMenu = {this.props.toogleMenu}/>
                <div className = "header-title">KKUCHARCZYK</div>
            </div>           
            
        )

    }

}

export default Header