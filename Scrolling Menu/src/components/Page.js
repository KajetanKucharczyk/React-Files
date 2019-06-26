import React from "react"
import $ from 'jquery';

import "./../css/Page.css"

import Menu from "./Menu"
import Header from "./Header"

class MenuButton extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            visibility: false
        }

        this.toogleMenu = this.toogleMenu.bind(this)

    }

    toogleMenu() {

        this.setState({
            visibility : !this.state.visibility
        })

    }

    render() {    

        
        return(

            <div className = "main-frame">
                <Header toogleMenu = {this.toogleMenu} />
                <Menu toogleMenu = {this.toogleMenu} opening = {this.state.visibility}/>
            </div>    
            
        )

    }

}

export default MenuButton