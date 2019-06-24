import React from "react"
import ReactDOM from "react-dom"
import StarWARS from "./components/StarWARS"
import $ from 'jquery';
import "./css/index.css"

var root = $("div#root")[0]

ReactDOM.render(
	<StarWARS />,
	root
)