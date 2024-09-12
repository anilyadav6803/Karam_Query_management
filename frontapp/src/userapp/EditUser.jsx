import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidenav from '../component/Sidenav';
import Utopnav from '../component/Utopnav';

const EditUser = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:8000/${id}`);
      const data = await response.json();
      if (response.ok) {
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
      }
    };
    getUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { firstname, lastname, email };
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if (result.msg === 'Success') {
      alert('Update Success');
    } else {
      alert('Update Failed');
    }
  };

  return (
    <>
      <div className='row vh-7'>
        <div className='col-sm-12 bg-dark'>
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
              <h5 className='text-center'>Edit User</h5>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='firstname'>First Name:</label>
                  <input
                    type='text'
                    id='firstname'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='lastname'>Last Name:</label>
                  <input
                    type='text'
                    id='lastname'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className='form-control'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Update
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
