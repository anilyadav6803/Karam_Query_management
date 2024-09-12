import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';


const Adlogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adlog = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/adadmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.msg === "Login Success") {
                setUsername("");
                setPassword("");

                // Save the auth token and redirect
                alert(data.msg);
                navigate('/addash'); // Redirect to dashboard upon success
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    };

    return (
        <>
            <Navbar />
            <div
  className="row"
  style={{
    backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/02/92/90/56/1000_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg')",
    backgroundSize: "cover",        // Ensures the image covers the entire div
    backgroundPosition: "center",   // Centers the image within the div
    backgroundRepeat: "no-repeat",   // Prevents the image from repeating
    height: "70vh"                  // Adjust height as needed
  }}
>
                <div className='col-md-6 mx-auto bg-secondary p-5 shadow-lg my-5 rounded-5'>
                    <form onSubmit={adlog}>
                        <h4><span className='text-danger text-decoration-underline'>Admin</span> Login</h4>

                        Enter Your Email:
                        <input
                            className='form-control'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            name="username"
                            required
                        />
                        <br />

                        Enter Your Password:
                        <input
                            className='form-control'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            required
                        />
                        <br />

                        <button className='mb-3 form-control btn btn-primary' type="submit">Submit</button>

                        <Link to={'/'}>Goto Home</Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Adlogin;
