import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/topnav";

const Viewallproquery = () => {
  const [penquery, setPenQuery] = useState([]);
  let count = 1;  // You don't need this as a state, it can just be a variable

  const getproquery = async () => {
    try {
      const response = await fetch('http://localhost:8000/ad/viewallproquery');
      const data = await response.json();
      if (data.msg === "Success") {
        setPenQuery(data.q);
      }
    } catch (error) {
      console.error("Error fetching processing queries:", error);
    }
  };

  const complete = async (id) => {
    const status = { status: "cmp" };
    try {
      const response = await fetch(`http://localhost:8000/status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
      const data = await response.json();
      if (data.msg === "Success") {
        alert("Query Completed");
        getproquery(); // Refresh the list after completing a query
      } else {
        alert("Error completing query");
      }
    } catch (error) {
      console.error("Error updating query:", error);
    }
  };

  useEffect(() => {
    getproquery();
  }, []);

  return (
    <>
          <div className='row' style={{ height: '7vh' }}>
    <div className='col-12 py-3 bg-dark'>
        <Topnav /> {/* Ensure Topnav is displayed correctly */}
    </div>
</div>
      <div className="row vh-93">
      <div
          className="col-2 h-100 scroll"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=996&t=st=1726163520~exp=1726164120~hmac=488b990be6aa3a4027c6347715e8081dede8ccf4944407e0a025f3e635819ce0)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Adsidenav />
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
            <div className="col-md-6 table-responsive mx-auto p-2 rounded-2 my-auto shadow-lg bg-light">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Query</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {penquery.map((e, index) => (
                    <tr key={e._id}>
                      <td>{index + 1}</td>
                      <td>{e.department}</td>
                      <td>{e.subject}</td>
                      <td>{e.description}</td>
                      <td>
                        <button
                          onClick={() => complete(e._id)}
                          className="btn btn-primary"
                        >
                          Complete
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
};

export default Viewallproquery;
