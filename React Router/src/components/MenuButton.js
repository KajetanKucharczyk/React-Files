import React from "react"
import $ from 'jquery';

import "./../css/MenuButton.css"

class MenuButton extends React.PureComponent {

    constructor(props){

        super(props)

        this.state = {
        }

        this.toogleMenu = this.toogleMenu.bind(this)

    }

    toogleMenu() {

        this.props.toogleMenu()

    }

    render() {    

        console.log("render() : MenuButton")
        
        return(

            <div onClick = {this.toogleMenu} className = "header-menu-button">
               
            </div>           
            
        )

    }

}

export default MenuButton