import React from "react"
import $ from 'jquery';
import "./../css/StarWARSText.css"

class StarWARSText extends React.Component {

    render() {        

        return(

            <div className = "person">
                <div className = "person-name">{this.props.name}</div>
                <div className = "person-description">Nazwa losowego bohatera StarWARS</div>
            </div>

        )

    }

}

export default StarWARSText