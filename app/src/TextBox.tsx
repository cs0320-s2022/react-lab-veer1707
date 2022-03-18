import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
type textie ={label : string;
                change: (arg0: string) => void}


function TextBox(props: textie) {
    return (
        <div>
<label> {props.label}</label>




            <input type={'text'} onChange={event => props.change(event.target.value)}></input>

        </div>
    );
}

export default TextBox;
