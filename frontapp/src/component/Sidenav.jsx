import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Sidenav = () => {
    const {id}=useParams();
  return (
    <div className='row'>
        <div className='col-sm-12 text-light pt-4'>
            <Link className='nav-link my-3 ps-3' to={`/userdash/${id}`}><i className='fa fa-book'></i>Dashbord</Link>
            <Link className='nav-link my-3 ps-3' to={`/addquery/${id}`}><i className='fa fa-question'></i>Add Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewpenquery/${id}`}><i className='fa fa-eye'></i>View Pending Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewproquery/${id}`}><i className='fa fa-eye'></i>View Problem Query</Link>
            <Link className='nav-link my-3 ps-3' to={`/viewcomquery/${id}`}><i className='fa fa-eye'></i>View Completed Query</Link>
        </div>
    </div>
  )
}

export default Sidenav