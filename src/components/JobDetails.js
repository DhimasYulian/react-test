import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const JobDetails = (props) => {
    const [detail, setDetail] = useState([]);
    const [detailLoading, setDetailLoading] = useState(false)
    const [detailError, setDetailError] = useState(false)

    useEffect(() => {
        const fetchDetail = async () => {
            setDetailLoading(true)
            try {
                const responses = await fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${props.match.params.id}.json`);
                const result = await responses.json();
                setDetail(result)
            } catch (error) {
                setDetailError(true)
            }
            setDetailLoading(false)
        }
        fetchDetail()
    }, [props.match.params.id])

    const detailDesc = "'" + detail.description + "'";
    const howToApply = "'" + detail.how_to_apply + "'";
    return (
        <>
            <Navbar />
            <div className="container">
                {detailLoading && <h3 className="mt-4">Loading...</h3>}
                {detailError && <h3 className="mt-4">Something went wrong</h3>}
                <Link to="/main" className="my-4">Back</Link>
                <p className="text-secondary">{detail.type} / {detail.location}</p>
                <h3>{detail.title}</h3>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        {parse(detailDesc)}
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h6>{detail.company}</h6>
                            </div>
                            <div className="card-body">
                                <img src={detail.company_logo} className="card-img-top" />
                                <a href={detail.company_url}>{detail.company_url}</a>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="card-header">
                                <h6>How to apply</h6>
                            </div>
                            <div className="card-body">
                                <div className="card-text">{parse(howToApply)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDetails
