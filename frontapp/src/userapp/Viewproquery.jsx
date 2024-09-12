import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidenav from '../component/Sidenav';
import Utopnav from '../component/Utopnav';

const Viewproquery = () => {
    const { id } = useParams(); // id of the user
    const [proding, setProding] = useState([]);
    
    const getPenQuery = async () => {
        try {
            const response = await fetch(`http://localhost:8000/getproquery/${id}`);
            
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response format. Expected JSON.");
            }
        
            const data = await response.json();
            setProding(data.result || []); // Ensure data.result is an array
        } catch (error) {
            console.error("Error fetching pending queries:", error);
        }
    };

    const handleDelete = async (queryId) => {
        console.log(`Attempting to delete query with ID: ${queryId}`);
        try {
            const response = await fetch(`http://localhost:8000/deleteproquery/${queryId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`Successfully deleted query with ID: ${queryId}`);
                setProding(proding.filter(item => item._id !== queryId));
            } else {
                console.error("Failed to delete the query");
            }
        } catch (error) {
            console.error("Error deleting the query:", error);
        }
    };
    
    useEffect(() => {
        getPenQuery();
    }, [id]);

    let count = 1; // Initialize count here

    return (
        <>
            <div className="row vh-7">
                <div className="col-sm-12 bg-dark">
                    <Utopnav />
                </div>
            </div>
            <div className="row vh-93">
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
                    <div className="row h-100">
                        <div className="col-md-6 table-responsive mx-auto my-auto p-2 rounded-2 shadow-lg bg-light">
                            <table className="table table-light">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Department</th>
                                        <th>Subject</th>
                                        <th>Query</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proding.map((item) => (
                                        <tr key={item._id}>
                                            <td>{count++}</td>
                                            <td>{item.department}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.query}</td>
                                            <td>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-primary" 
                                                    onClick={() => handleDelete(item._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Viewproquery;
