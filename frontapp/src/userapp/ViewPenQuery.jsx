import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidenav from "../component/Sidenav";

const ViewPenQuery = () => {
  const { id } = useParams(); // id of the user
  const [pending, setPending] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null); // For storing the query being edited
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal visibility state

  // Fetch pending queries
  const getPenQuery = async () => {
    try {
      const response = await fetch(`http://localhost:8000/getpenquery/${id}`);
      
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format. Expected JSON.");
      }
  
      const data = await response.json();
      setPending(data.result || []); // Ensure data.result is an array
    } catch (error) {
      console.error("Error fetching pending queries:", error);
    }
  };

  useEffect(() => {
    getPenQuery();
  }, [id]);

  // Open modal and set the selected query for editing
  const openEditModal = (query) => {
    setSelectedQuery(query); // Set the query data to be edited
    setIsEditModalOpen(true); // Open the modal
  };

  // Handle changes to the edited query data
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value
    }));
  };

  // Update the query in the backend
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/updatequery/${selectedQuery._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedQuery)
      });

      if (response.ok) {
        console.log("Query updated successfully");
        setIsEditModalOpen(false); // Close the modal
        getPenQuery(); // Refresh the query list
      } else {
        console.log("Error updating query");
      }
    } catch (error) {
      console.log("Error updating query", error);
    }
  };

  return (
    <>
      <div className="row vh-7">
        <div className="col-sm-12 bg-dark"></div>
      </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-danger">
          <Sidenav />
        </div>
        <div className="col-10 h-100 scroll bg-success">
          <div className="row h-100">
            <div className="col-md-6 table-responsive mx-auto my-auto p-2 rounded-2 shadow-lg bg-light">
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
                  {pending.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.department}</td>
                      <td>{item.subject}</td>
                      <td>{item.description}</td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => openEditModal(item)} // Pass query to the edit function
                        >
                          Edit
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

      {/* Edit Modal */}
      {isEditModalOpen && selectedQuery && (
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Query</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsEditModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      name="department"
                      value={selectedQuery.department}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={selectedQuery.subject}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={selectedQuery.description}
                      onChange={handleEditChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewPenQuery;
