import React from "react"
import "./../css/StarWARS.css"
import StarWARSText from "./StarWARSText"
import StarWARSButton from "./StarWARSButton"
import $ from 'jquery';

var defaultValue = "Loading"

class StarWARS extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            name: defaultValue
        }

        this.click = this.click.bind(this)

    }

    componentDidMount() {       

        this.getCount("https://swapi.co/api/people/")
        .then(value => {
            
            this.getPerson("https://swapi.co/api/people/" + Math.round(Math.random()*value) + "/")
            .then(value => {
                
                this.setState({
                    name: value
                })

            })  
            .catch(err => console.log(err))             
        })
        .catch(err => console.log(err))

    }

    getCount(url) {

        return new Promise((resolve, reject) => {

            $.ajax({
                url: url,
                beforeSend: function(){
                    
                },
                complete: function(){
                    
                },
                success: function(data){
    
                    return resolve(data.count);
    
                },
                error: function(err) {
                    return reject(err);
                }

            })
        });       

    }

    getPerson(url){

        return new Promise((resolve, reject) => {

            $.ajax({
                url: url,
                beforeSend: function(){
                    
                },
                complete: function(){
                    
                },
                success: function(data){
    
                    return resolve(data.name);
    
                },
                error: function(err) {
                    return reject(err);
                }

            })
        });       

    }

    click(e){

        this.setState({
            name: defaultValue
        })

        this.getCount("https://swapi.co/api/people/")
        .then(value => {
            
            this.getPerson("https://swapi.co/api/people/" + Math.round(Math.random()*value) + "/")
            .then(value => {
                
                this.setState({
                    name: value
                })

            })  
            .catch(err => console.log(err))             
        })
        .catch(err => console.log(err))

    }

    render() {        

        return(
            
            <div>
                <StarWARSText name = {this.state.name} />
                <StarWARSButton click = {this.click}/>
            </div>
            
        )

    }

}

export default StarWARS