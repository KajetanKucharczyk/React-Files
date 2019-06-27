import React from "react"
import {
    NavLink
} from "react-router-dom"
import $ from 'jquery';

import "./../css/MenuOption.css"

class MenuOption extends React.Component {

    constructor(props){

        super(props)

        this.state = {
        }

        this.clicked = this.clicked.bind(this)

    }

    clicked() {

        this.props.toogleMenu()
        this.props.tooglePage(this.props.componentName)

    }

    render() {  
        
        var path
        var link

        if(this.props.componentName != "Main"){

            path = "/" + this.props.componentName.toLowerCase()
            link = <NavLink to = {path} ><li onClick = {this.clicked} className = "menu-item"><div>{this.props.children}</div></li></NavLink>

        }else{

            path = "/"
            link = <NavLink exact to = {path} ><li onClick = {this.clicked} className = "menu-item"><div>{this.props.children}</div></li></NavLink>

        }        

        return(

              <div>{link}</div>
            
        )

    }

}

export default MenuOption