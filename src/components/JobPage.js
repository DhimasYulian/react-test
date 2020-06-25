import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Pagination from './Pagination'
import Search from './Search'
import { JobsContext, UserContext } from '../AppContext';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router'
import Moment from 'react-moment'

const JobPage = () => {
    let history = useHistory()
    const { jobs, heading, isLoading, isError, isLogged, setLogged, jobPerPage, currentPage, setCurrentPage } = useContext(JobsContext);
    const indexLastJob = currentPage * jobPerPage;
    const indexFirstJob = indexLastJob - jobPerPage;
    const currentJob = jobs.slice(indexFirstJob, indexLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        const data = localStorage.getItem("log");
        if (data) {
            setLogged(true)
            history.push("/main");
        }
    }, [])

    if (!isLogged) {
        history.push("/");
    }


    return (
        <>
            <Navbar />
            <Search />
            <div className="container">
                {isError && <h3 className="mt-4 mx-auto">Something went wrong</h3>}
                {isLoading ? <h3 className="mt-4 mx-auto">Loading...</h3> : (
                    <>
                        <h3 className="py-2">{heading}</h3>
                        <hr />
                        <ul className="d-flex flex-column">
                            {currentJob.map(job => (
                                <div key={job.id} className="mb-3">
                                    <div className="d-flex flex-column">
                                        <Link to={`/detail/${job.id}`}><h5 className="text-primary">{job.title}</h5></Link>
                                        <div className="d-flex flex-row">
                                            <p className="text-secondary">{job.company} - <span className="text-success">{job.type}</span></p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start align-items-end" style={{ marginTop: -70 }}>
                                        <p className="d-flex text-secondary">{job.location}</p>
                                        <p className="d-flex text-secondary">
                                            <Moment toNow>{job.created_at}</Moment>
                                        </p>
                                    </div>
                                    <hr />
                                </div>

                            ))}
                        </ul>
                        <Pagination totalJobs={jobs.length} jobPerPage={jobPerPage} paginate={paginate} />
                    </>
                )}
            </div>
        </>
    )
}

export default JobPage;
