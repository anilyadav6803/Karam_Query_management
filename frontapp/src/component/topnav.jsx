import React from 'react';
import { IoMdExit } from "react-icons/io";
import { Link } from 'react-router-dom';

const Topnav = () => {
  return (
    <div className='row topnav-container d-flex justify-content-between align-items-center'>
      <div className='col text-danger'>
        <h6>Admin Zone</h6>
      </div>
      <div className='col text-end'>
        <h6 className='text-danger'>
          <Link to={'/adlogin'} className='nav-link'>
            <IoMdExit className="me-1" /> Logout
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Topnav;
