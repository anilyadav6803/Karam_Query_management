import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';
import Utopnav from '../component/Utopnav';

const Dash = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/${id}`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      const data = await response.json();
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setEmail(data.email);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <>
      <div className='row vh-7'>
        <div className='col-sm-12 text-light bg-dark'>
          <Utopnav/>
        </div>
      </div>
      <div className='row vh-93'>
      <div 
  className='col-2 h-100 scroll' 
  style={{ 
    backgroundImage: 'url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=996&t=st=1726163520~exp=1726164120~hmac=488b990be6aa3a4027c6347715e8081dede8ccf4944407e0a025f3e635819ce0)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }}
>
  <Sidenav />
</div>

<div
          className="col-10 py-5 scroll"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104856.jpg?w=996&t=st=1726165644~exp=1726166244~hmac=97351864f55695d093c7bd104093bd6b12e662abf29183cabbc76b08835c1f23')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='row p-5'>
            <div className='col-md-6 mx-auto bg-light p-4 rounded-5 my-auto'>
              <h5 className='text-center '>User Details</h5>
              <div className='row my-3'>
                <div className='col-md-6'>FirstName :</div>
                <div className='col-md-6'>{firstname}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6'>LastName :</div>
                <div className='col-md-6'>{lastname}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6'>Email :</div>
                <div className='col-md-6'>{email}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6 mx-auto text-center'>
                  <Link to={`/edituser/${id}`} className='btn btn-warning'>Edit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
