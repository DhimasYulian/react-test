import React, { useContext, useState, useEffect } from 'react'
import { UserContext, JobsContext } from '../AppContext';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';

const Login = () => {
    let history = useHistory()
    const { user, email, password, setEmail, setPassword } = useContext(UserContext);
    const { isLogged, setLogged } = useContext(JobsContext);
    const handleLogin = e => {
        e.preventDefault();
        if (email === user.username && password === user.password) {
            setLogged(true)
            setPassword('')
            setEmail('')
            localStorage.setItem('log', "oke")
            history.push("/main");
        } else {
            setPassword('')
            setEmail('')
            return <Redirect to="/" />
        }
    }



    return (
        <>
            <h1 className="mt-4 text-center">Hello, {isLogged ? 'True' : 'Visitor'}</h1>
            <form onSubmit={handleLogin} className="card mx-auto p-5 mt-5" style={{ width: 800 }}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username..." onChange={e => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Password..." onChange={e => setPassword(e.target.value)} value={password}></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login;
