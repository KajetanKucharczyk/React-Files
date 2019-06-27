import React from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"

import $ from 'jquery';

import "./../css/Page.css"

import Menu from "./Menu"
import Header from "./Header"

import Main from "./Pages/Main"
import Models from "./Pages/Models"
import Physics from "./Pages/Physics"
import AboutMe from "./Pages/AboutMe"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"

class MenuButton extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            visibility: false,
            currentPage: "Main"
        }

        this.toogleMenu = this.toogleMenu.bind(this)
        this.tooglePage = this.tooglePage.bind(this)  
        this.checkPage = this.checkPage.bind(this)  

    }

    toogleMenu() {

        this.setState({
            visibility : !this.state.visibility
        })

    }

    tooglePage(componentName) {

        this.setState({
            currentPage : componentName
        })

    }

    checkPage(componentName) {

        return this.state.currentPage == componentName;

    }

    render() {    

        console.log("render() : Page")
        
        return(

            <div className = "main-frame">

                <HashRouter>

                    <Header toogleMenu = {this.toogleMenu} />
                    <Menu toogleMenu = {this.toogleMenu} opening = {this.state.visibility} tooglePage = {this.tooglePage} />

                    <div className = "pages-container">
                        <Route exact path = "/" component = {Main} />
                        <Route path = "/contact" component = {Contact} />
                        <Route path = "/models" component = {Models} />
                        <Route path = "/portfolio" component = {Portfolio} />
                        <Route path = "/physics" component = {Physics} />
                        <Route path = "/aboutme" component = {AboutMe} />
                    </div>
                
                </HashRouter>

            </div>    
            
        )

    }

}

export default MenuButton