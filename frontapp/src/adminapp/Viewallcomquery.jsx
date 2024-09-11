
import React, { useEffect, useState } from 'react'
import Adsidenav from '../component/Adsidenav'
const Viewallcomquery  = () => {

  const [penquery, setPenQuery] = useState([])
  var [count, setCount] = useState(1)

  
  const getcmpquery = async () => {
    const response = await fetch(`http://localhost:8000/ad/viewallcmpquery`);
    const data = await response.json();
    if (data.msg === "Success") {
        setPenQuery(data.q)
    }
}
useEffect(() => {
  getcmpquery()
}, [])

  return (
    <>
    <div className='row vh-7'>
        <div className='col-sm-12 py-5 bg-dark'></div>
    </div>
    <div className='row vh-93'>
        <div className='col-2 py-5 h-100 scroll bg-danger'>
            <Adsidenav/>
        </div>
        <div className='col-10 py-5 h-100 scroll bg-success'>
            <div className='row h-100'>
                <div className='col-md-6 table-responsibe mx-auto p-2 rounded-2 my-auto shadow-lg bg-light'>
                    <table className='table table-light'>
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Department</th>
                                <th>Subject</th>
                                <th>Query</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {penquery?.map((e) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{e.department}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.description}</td>
    
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</>
  )
}

export default Viewallcomquery