import React, { useEffect } from 'react'
import { API_URL, API_KEY } from './../../Config';
import { FaCode } from "react-icons/fa";

function LandingPage() {
        useEffect(() => {

            fetch(`${API_URL}movie/popular?api_key=${API_KEY}&langauage=en-US&page=1`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })

        }, []);




    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span>
        </div>
        <div style={{ float:'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
        </>
    )
}

export default LandingPage
