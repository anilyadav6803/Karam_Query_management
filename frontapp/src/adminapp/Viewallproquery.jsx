import React, { useEffect, useState } from "react";
import Adsidenav from "../component/Adsidenav";

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
      <div className="row vh-7">
        <div className="col-sm-12 py-5 bg-dark"></div>
      </div>
      <div className="row vh-93">
        <div className="col-2 py-5 h-100 scroll bg-danger">
          <Adsidenav />
        </div>
        <div className="col-10 py-5 h-100 scroll bg-success">
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
