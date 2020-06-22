import React, { useContext } from 'react'
import { UserContext } from '../AppContext';
import { useHistory } from 'react-router';

const Login = () => {
    let history = useHistory()
    const { user, email, password, setLogged, setEmail, setPassword } = useContext(UserContext)

    const handleLogin = e => {
        e.preventDefault();
        if (email === user.username && password === user.password) {
            setEmail('')
            setPassword('')
            history.push("/main");
        }
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <h1 className="mt-4 text-center">Hello, User</h1>
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
