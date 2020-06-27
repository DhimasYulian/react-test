import React, { useContext, useState, useEffect } from 'react'
import { UserContext, JobsContext } from '../AppContext';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Login = () => {
    let history = useHistory()
    const { user, email, password, setEmail, setPassword, isLogged, setLogged } = useContext(UserContext);
    // const { isLogged, setLogged } = useContext(JobsContext);
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

    const handleSuccess = (response) => {
        setLogged(true)
        console.log(response)
        localStorage.setItem('log', JSON.stringify(response.tokenId))
        history.push("/main");
    }

    const handleFailure = (response) => {
        console.log('maap gagal');
        history.push("/");
    }

    return (
        <div className="card mx-auto py-5 mt-5" style={{ width: 900 }}>
            <h1 className="mt-3 text-center">Hello, {isLogged ? 'True' : 'Visitor'}</h1>
            <div className="mx-auto " style={{ width: 600 }}>
                <form onSubmit={handleLogin} className="py-2 mt-4">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username..." onChange={e => setEmail(e.target.value)} value={email}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" className="form-control" id="pass" placeholder="Password..." onChange={e => setPassword(e.target.value)} value={password}></input>
                    </div>
                    <button className="btn btn-block btn-primary mb-1">Submit</button>
                </form>
                <hr />
                <GoogleLogin className="my-3 btn btn-block mx-auto d-flex justify-content-center"
                    clientId="124529524073-rhutchii2mg23pul4i4u13tmenaurh3l.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
}

export default Login;
