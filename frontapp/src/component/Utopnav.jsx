import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdExit } from "react-icons/io";

const Utopnav = () => {
  return (
    <>
      <div className='row h-100 d-flex justify-content-between align-items-center'>
        <div className='col-2'>
          <h6 className="text-primary">User App</h6>
        </div>
        <div className='col-auto'>
          <Link to={'/login'} className='nav-link d-flex align-items-center text-danger'>
            <IoMdExit className="me-1" /> Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Utopnav;
