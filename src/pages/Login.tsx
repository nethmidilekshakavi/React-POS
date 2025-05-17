import React, { useState } from "react";
import "./login.css";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Email: ${email}, Password: ${password}`);

        if (email === "admin@gmail.com" && password === "1234"){
            toast.success("Login in 😁")
            navigate("/dashBoard")
        }else {
            console.log('erorr Login')
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
