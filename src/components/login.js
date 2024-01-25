import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("users");
        if (auth) {
            navigate('/');
        } 
    })


    const hdLogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('users', JSON.stringify(result))
        if (result) {
            navigate('/');
        } else {
            alert("Plees enter correct details")
        }
    }
    return (
        <div className="login">
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={hdLogin} className="appButton">Login</button>
        </div>
    )
}
export default Login;