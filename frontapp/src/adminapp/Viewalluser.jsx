
import React, { useState } from 'react'
import Adsidenav from '../component/Adsidenav'
import { useEffect } from 'react'

const Viewalluser = () => {

  const [alluser, setAllUser] = useState([])
  var [count, setCount] = useState(1)

  
  const getalluser = async () => {
    const response = await fetch(`http://localhost:8000/`);
    const data = await response.json();
    setAllUser(data)
}



useEffect(() => {
   getalluser()
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {alluser?.map((e) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{e.firstname}</td>
                                    <td>{e.lastname}</td>
                                    <td>{e.email}</td>
                                    {/* <td><button onClick={()=>{process(e._id);}} className='btn btn-primary'>Process</button></td> */}
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

export default Viewalluser