import React from "react"
import $ from 'jquery';

import "./../css/MenuButton.css"

class MenuButton extends React.Component {

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

            <div onClick = {this.toogleMenu} className = "header-menu-button">
               
            </div>           
            
        )

    }

}

export default MenuButton