import React from "react"
import $ from 'jquery';
import "./../css/StarWARSButton.css"

class StarWARSButton extends React.Component {

    render() {        

        return(

            <button onClick = {this.props.click}>Refresh person</button>

        )

    }

}

export default StarWARSButton