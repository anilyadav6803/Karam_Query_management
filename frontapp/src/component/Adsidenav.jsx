import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Adsidenav = () => {
  const { id } = useParams();
  return (
    <div>
      <div className='row'>
        <div className='col-sm-12 text-light pt-4'>
          <Link className='nav-link my-3 ps-3' to="/addash"><i className='fa fa-book'></i>Dashboard</Link>
          <Link className='nav-link my-3 ps-3' to="/viewalluser"><i className='fa fa-question'></i>View All Users</Link>
          <Link className='nav-link my-3 ps-3' to="/viewallpenquery"><i className='fa fa-eye'></i>View All Pending Queries</Link>
          <Link className='nav-link my-3 ps-3' to="/viewallcomquery"><i className='fa fa-eye'></i>View All Completed Queries</Link>
          <Link className='nav-link my-3 ps-3' to="/viewallproquery"><i className='fa fa-eye'></i>View All Processing Queries</Link>
        </div>
      </div>
    </div>
  );
};

export default Adsidenav;
