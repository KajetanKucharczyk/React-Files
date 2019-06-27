import React from "react"
import $ from 'jquery';

class PageChecker extends React.Component {

    constructor(props){

        super(props)

        this.state = {}

        this.check = this.check.bind(this)

    }   
    
    check() {

        return this.props.checkPage(this.props.componentName)
        
    }


    render() {  

        var classes = "page"

        //if(this.check()){
        
            classes += " current"

       // }

        return(

            <div className = {classes}>
                {this.props.children}
            </div>           
            
        )
    }

}

export default PageChecker