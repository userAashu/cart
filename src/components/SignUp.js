import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("users");
        if(auth){
           navigate('/');
        }
    })

    const collectData = async () => {
        let result = await fetch('http://localhost:5000/reg',{
            method:'post',
            body: JSON.stringify({name, email, password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('users',JSON.stringify(result))
        if(result){
            navigate('/');
        };
    }

    return (
        <div className="divBox">
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passward" />
            <button className="appButton" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;