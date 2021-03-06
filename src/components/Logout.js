import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from '../AppContext'

const Logout = () => {
    const { setLogged } = useContext(UserContext);
    let history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem("log");
        setLogged(false)
        history.push("/");
    }
    return (
        <div>
            <button className="btn btn-light" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
