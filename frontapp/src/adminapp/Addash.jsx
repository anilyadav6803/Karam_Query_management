import React, { useState, useEffect } from "react";
import Adsidenav from "../component/Adsidenav";
import Topnav from "../component/topnav"; // Corrected the casing for the import

const Addash = () => {
  const [ur, setUR] = useState(0);
  const [pr, setPR] = useState(0);
  const [prr, setPrR] = useState(0);
  const [cr, setCR] = useState(0);

  const totaluser = async () => {
    const uresponse = await fetch("http://localhost:8000/");
    const udata = await uresponse.json();
    setUR(udata.length);
  };

  const totalpquery = async () => {
    const presponse = await fetch(
      "http://localhost:8000/ad/viewallpendingquery"
    );
    const pdata = await presponse.json();
    setPR(pdata.q ? pdata.q.length : 0);
  };

  const totalproquery = async () => {
    const proresponse = await fetch("http://localhost:8000/ad/viewallproquery");
    const prod = await proresponse.json();
    setPrR(prod.q ? prod.q.length : 0);
  };

  const totalcmpquery = async () => {
    const cmpresponse = await fetch("http://localhost:8000/ad/viewallcmpquery");
    const cmpdata = await cmpresponse.json();
    setCR(cmpdata.q ? cmpdata.q.length : 0);
  };

  useEffect(() => {
    totaluser();
    totalpquery();
    totalproquery();
    totalcmpquery();
  }, []);

  return (
    <>
      <div className="row" style={{ height: "7vh" }}>
        <div className="col-12 py-3 bg-dark">
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
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total User</h5>
                    <p className="card-text">{ur || 0}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Pending Query</h5>
                    <p className="card-text">{pr || 0}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Processing Query</h5>
                    <p className="card-text">{prr || 0}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Total Completed Query</h5>
                    <p className="card-text">{cr || 0}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addash;
