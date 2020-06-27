import React, { createContext, useState, useEffect } from 'react'

export const JobsContext = createContext();
export const UserContext = createContext();

export const JobsProvider = (props) => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [jobPerPage, setJobPerPage] = useState(10);
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false);
    const [heading, setHeading] = useState('Job List')

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true)
            try {
                const responses = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`);
                const result = await responses.json();
                setJobs(result)
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchJobs();
    }, [])


    const jobState = {
        jobs,
        isLoading,
        isError,
        currentPage,
        jobPerPage,
        heading,
        setHeading,
        setCurrentPage,
        setLoading,
        setJobs,
        setError
    }

    return (
        <JobsContext.Provider value={jobState}>
            {props.children}
        </JobsContext.Provider>
    )
}

export const UserProvider = (props) => {
    const [user, setUser] = useState(
        {
            username: "kekto7657@gmail.com",
            password: "123"
        })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setLogged] = useState(false);



    const userState = {
        user,
        email,
        password,
        isLogged,
        setLogged,
        setUser,
        setEmail,
        setPassword
    }
    return (
        <UserContext.Provider value={userState}>
            {props.children}
        </UserContext.Provider>
    )
}
