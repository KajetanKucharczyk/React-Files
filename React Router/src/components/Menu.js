import React from "react"
import $ from 'jquery';

import "./../css/Menu.css"

import MenuOption from "./MenuOption"

class Menu extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            currentPage: "Main"
        }

        this.menuTitles = this.menuTitles.bind(this)
        this.toogleMenu = this.toogleMenu.bind(this)

    }    

    menuTitles(item) {

        var key = item.key
        var title = item.title
        var componentName = item.componentName

        return <MenuOption toogleMenu = {this.props.toogleMenu} key = {key} componentName = {componentName} tooglePage = {this.props.tooglePage}>{title}</MenuOption>

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

    toogleMenu() {

        this.props.toogleMenu()

    }

    event() {

    }

    render() {  
        
        console.log("render() : Menu")

        var titles = [
            {
                key: Date.now()*Math.random(),
                title: "Strona główna",
                componentName: "Main",
                event: this.event
            },
            {
                key: Date.now()*Math.random(),
                title: "Modele",
                componentName: "Models",
                event: this.event
            },
            {
                key: Date.now()*Math.random(),
                title: "O mnie",
                componentName: "AboutMe",
                event: this.event
            },
            {
                key: Date.now()*Math.random(),
                title: "Fizyka",
                componentName: "Physics",
                event: this.event
            },
            {
                key: Date.now()*Math.random(),
                title: "Portfolio",
                componentName: "Portfolio",
                event: this.event
            }            ,
            {
                key: Date.now()*Math.random(),
                title: "Kontakt",
                componentName: "Contact",
                event: this.event
            }
        ]

        var classes = "menu-container "
        classes += this.checkOpening();
        

        return(

            <div className = {classes}>
                <p className = "menu-title">Menu</p>

                <ul className = "menu-list">
                    {titles.map(this.menuTitles)}
                </ul>

                <div className = "close-button" onClick = {this.toogleMenu}>Zamknij</div>

            </div>           
            
        )

    }

}

export default Menu