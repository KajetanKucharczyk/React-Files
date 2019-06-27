import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './css/index.css';

import Page from "./components/Page"

var root = $("div#root")[0]


ReactDOM.render(
    <div className = "main-frame">
        <Page />
    </div>,
    root
)

