import React, { useState } from 'react';
import Sidenav from '../component/Sidenav';
import { useParams } from 'react-router-dom';

const AddQuery = () => {
  const { id } = useParams(); // id of the user
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const addquery = async (e) => {
    e.preventDefault();
    const status = "pen"; // Pending status

    const query = {
      uid: id, 
      department,
      subject,
      description,
      status // Add status field
    };

    try {
      const response = await fetch('http://localhost:8000/addquery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      });

      if (response.ok) {
        console.log('Query submitted successfully');
        setDepartment(''); // Clear form after submission
        setSubject('');
        setDescription('');
      } else {
        console.log('Error submitting query');
      }
    } catch (error) {
      console.log('Error submitting query', error);
    }
  };

  return (
    <>
      <div className='row vh-7'>
        <div className='col-sm-12 bg-dark'></div>
      </div>
      <div className='row vh-93'>
        <div className='col-2 h-100 scroll bg-danger'>
          <Sidenav />
        </div>
        <div className='col-10 h-100 scroll bg-success'>
          <div className='row h-100'>
            <div className='col-md-6 mx-auto'>
              <form onSubmit={addquery} className='mt-5 p-5 bg-light rounded-5 shadow-5'>
                <label>Select department</label>
                <select 
                  className='form-control' 
                  value={department} 
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value=''>Select department</option>
                  <option value='IT'>IT</option>
                  <option value='Accounts'>Accounts</option>
                  <option value='Management'>Management</option>
                  <option value='Sales'>Sales</option>
                </select>

                <label>Enter your subject</label>
                <input 
                  type="text" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  className='form-control' 
                />

                <label>Description in details</label>
                <textarea 
                  className='form-control' 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                />

                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuery;
