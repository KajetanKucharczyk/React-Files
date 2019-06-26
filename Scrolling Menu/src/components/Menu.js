import React from "react"
import $ from 'jquery';

import "./../css/Menu.css"

import MenuOption from "./MenuOption"

class Menu extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

        this.menuTitles = this.menuTitles.bind(this)

    }    

    menuTitles(item) {

        return <MenuOption toogleMenu = {this.props.toogleMenu} key = {Date.now()*Math.random()}>{item}</MenuOption>

    }

    checkOpening() {

        if(this.props.opening){

            //OPENED
            return "opened";

        }else{

            //CLOSED
            return "closed"

        }

    }

    render() {    

        var titles = [
            "Opcja 1",
            "Opcja 2",
            "Opcja 3",
            "Opcja 4"
        ]

        var classes = "menu-container "
        classes += this.checkOpening();
        

        return(

            <div className = {classes}>
                <p className = "menu-title">Menu:</p>

                <ul className = "menu-list">
                    {titles.map(this.menuTitles)}
                </ul>

            </div>           
            
        )

    }

}

export default Menu