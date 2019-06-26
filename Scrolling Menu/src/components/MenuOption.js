import React from "react"
import $ from 'jquery';

import "./../css/MenuOption.css"

class MenuOption extends React.Component {

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

        return(

            <li onClick = {this.toogleMenu} className = "menu-item">{this.props.children}</li>  
            
        )

    }

}

export default MenuOption