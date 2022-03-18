import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from "./TextBox";
import * as http from "http";
import axios from "axios";
import userEvent from "@testing-library/user-event";

// @ts-ignore
import {AwesomeButton} from "react-awesome-button";






function Horoscope() {


    const [set, setHoroscope] = useState([])
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");

    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sun,
            moon: moon,
            rising: rising
    };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration

        axios.post("http://localhost:4567/horoscope",  toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            })
            .catch(error => {
                console.log(error);
            });
    }

    //
    // function requestHoroscopes() {
    //     const postParameters = {
    //         sun: sun,
    //         moon: moon,
    //         rising: rising
    //     }
    //
    //     fetch("http://localhost:4567/horoscope",
    //     {
    //         method: 'post',
    //         body: JSON.stringify(postParameters),
    //         headers: {
    //             'Access-Control-Allow-Origin': "*"
    //         },
    //     } )
    //
    //
    // }




    return (
        <div className="Horoscope">
            <TextBox label={"Sun Sign"} change={setSun} />
            <TextBox label={"Moon Sign"} change={setMoon}/>
            <TextBox label={"Rising Sign"} change={setRising}/>


            <AwesomeButton
                type="primary"
                onPress={requestHoroscope}
                    // do a sync/async task then call `next()`

            >
                Button
            </AwesomeButton>
            {set.map((item, index) => <li key = {index}>{item}</li>)}








            <header className="Horoscopes">

            </header>
        </div>
    );
}

export default Horoscope;
