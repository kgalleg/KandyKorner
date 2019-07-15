import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import KandyKorner from './components/KandyKorner';

// import './index.css';




ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'))


    //this was the original one... then got changes to above
    // ReactDOM.render(<KandyKorner />, document.getElementById('root'));