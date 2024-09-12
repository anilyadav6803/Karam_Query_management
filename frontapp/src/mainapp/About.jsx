import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import Footer from '../component/Footer'
import a1 from '../component/img/about-overview-08.jpg';

const About = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <div className='row my-5'>
        <div className='col-md-5 mx-auto my-auto'>
            <h1>About Us</h1>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the                
                 industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                   desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        <div className='col-md-5 mx-auto'>
            <img src={a1}  className='w-100'/>


        </div>

        <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-md-6">
            <img
              src= "https://www.karam.in/sites/default/files/2023-04/lakhnow-overview.jpg"
              alt="Industrial Solutions"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="display-4 mb-4">About Karam</h2>
            <p className="lead">
              At [KARAM], we specialize in providing cutting-edge industrial solutions to help businesses
              improve efficiency, safety, and overall operations. With a focus on technology and innovation, we
              are proud to offer a diverse range of services designed to meet the needs of modern industry.
            </p>
            <p>
              Our mission is to empower businesses by offering tailored solutions in manufacturing, logistics, and
              safety compliance. Our team is committed to delivering excellence, ensuring that your operations
              run smoothly, and meeting the highest safety standards.
            </p>
            <p>
              Let us help you achieve your industrial goals with expert advice, top-notch services, and the latest
              in industrial technology.
            </p>
          </div>
         
        </div>
      </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default About