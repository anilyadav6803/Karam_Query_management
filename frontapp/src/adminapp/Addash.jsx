import React, { useState, useEffect } from 'react';
import Adsidenav from '../component/Adsidenav';

const Addash = () => {
    const [ur, setUR] = useState(0);
    const [pr, setPR] = useState(0);
    const [prr, setPrR] = useState(0);
    const [cr, setCR] = useState(0);

    const totaluser = async () => {
        const uresponse = await fetch('http://localhost:8000/');
        const udata = await uresponse.json();
        setUR(udata.length);
    }

    const totalpquery = async () => {
        const presponse = await fetch('http://localhost:8000/ad/viewallpendingquery');
        const pdata = await presponse.json();
        setPR(pdata.q ? pdata.q.length : 0);
    }

    const totalproquery = async () => {
        const proresponse = await fetch('http://localhost:8000/ad/viewallproquery');
        const prod = await proresponse.json();
        setPrR(prod.q ? prod.q.length : 0);
    }

    const totalcmpquery = async () => {
        const cmpresponse = await fetch('http://localhost:8000/ad/viewallcmpquery');
        const cmpdata = await cmpresponse.json();
        setCR(cmpdata.q ? cmpdata.q.length : 0);
    }

    useEffect(() => {
        totaluser();
        totalpquery();
        totalproquery();
        totalcmpquery();
    }, []);

    return (
        <>
            <div className='row vh-7'>
                <div className='col-sm-12 py-5 bg-dark'></div>
            </div>
            <div className='row vh-93'>
                <div className='col-2 py-5 scroll bg-danger'>
                    <Adsidenav />
                </div>
                <div className='col-10 py-5 scroll bg-success'>
                    <div className='row h-100'>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total User</h5>
                                        <p className="card-text">{ur || 0}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Pending Query</h5>
                                        <p className="card-text">{pr || 0}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Processing Query</h5>
                                        <p className="card-text">{prr || 0}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Completed Query</h5>
                                        <p className="card-text">{cr || 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Addash;
