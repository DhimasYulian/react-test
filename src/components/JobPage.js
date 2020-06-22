import React, { useContext } from 'react'
import Navbar from './Navbar'
import { JobsContext } from '../AppContext';
import { Link } from 'react-router-dom';

const JobPage = () => {
    const { jobs, isLoading, isError } = useContext(JobsContext);

    return (
        <>
            <Navbar />
            <div className="container">
                {isLoading && <h3 className="mt-4 mx-auto">Loading...</h3>}
                {isError && <h3 className="mt-4 mx-auto">Something went wrong</h3>}
                <ul className="d-flex flex-column">
                    {jobs.map((job, index) => (
                        <div key={job.id} className="mb-3">
                            <div className="d-flex flex-column">
                                <Link to={`/detail/${job.id}`}><h5 className="text-primary">{job.title}</h5></Link>
                                <div className="d-flex flex-row">
                                    <p className="text-secondary">{job.company} - <span className="text-success">{job.type}</span></p>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start align-items-end" style={{ marginTop: -70 }}>
                                <p className="d-flex text-secondary">{job.location}</p>
                                <p className="d-flex text-secondary">{job.created_at}</p>
                            </div>
                            <hr />
                        </div>

                    ))}
                </ul>
            </div>
        </>
    )
}

export default JobPage;
