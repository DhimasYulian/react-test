import React, { useState, useEffect, useContext } from 'react'
import { JobsContext } from '../AppContext'

const Search = () => {

    const [desc, setDesc] = useState('');
    const [loc, setLoc] = useState('');
    const { setJobs, setLoading, setError, setHeading } = useContext(JobsContext);
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [fulltime, setFullTime] = useState(false)


    const handleSearch = (e) => {
        e.preventDefault();
        setDescription(desc)
        setLocation(loc)
        setLoc('')
        setDesc('')
    };

    const endpoint = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`

    useEffect(() => {
        if (description !== "" || location !== "") {
            const fetchData = async () => {
                setLoading(true)
                try {
                    const responses = await fetch(`${endpoint}description=${description}&location=${location}&full_time=${fulltime}`);
                    const result = await responses.json();
                    setJobs(result)
                    setHeading(`Showing ${result.length} jobs`)
                } catch (error) {
                    setError(true)
                    console.log('err')
                }
                setLoading(false)
            }
            fetchData()
        }
    }, [description, location])

    return (
        <form onSubmit={handleSearch} className="container">
            <div className="d-flex flex-row justify-content-between my-3 align-items-center">
                <div className="form-group">
                    <label>Job Description</label>
                    <input type="text" className="form-control" style={{ width: "280px" }} placeholder="Filter by description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" style={{ width: "280px" }} placeholder="Filter by location" value={loc} onChange={(e) => setLoc(e.target.value)} />
                </div>
                <div className="form-group form-check my-auto">
                    <input type="checkbox" className="form-check-input" onChange={() => setFullTime(!fulltime)} />
                    <label className="form-check-label">Full Time</label>
                </div>
                <button className="btn btn-primary" disabled={desc === "" && loc === "" ? true : false}>Search</button>
            </div>
        </form>
    )
}

export default Search
