import React from 'react'
import { useState } from 'react'
import './ContactUsBar.css'

function ContactUsBar() {
  const [formData, setFormData] = useState(
    {email: ""}
)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
    console.log(formData.email)
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
  // const { body } = formData;
  fetch("http://localhost:4000/userEmail", {
    method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(formData)
  }).then((response) => {
    console.log(response);
    return response.json();
  });
  setFormData({email: ""})
}; 

  return (
    <div id='outer-bar' className='div-col'>
        <div id='bar' className='div-row'>
            <p style={{fontSize:'1.4em'}} className='animate__animated animate__zoomIn'>Contact us today to learn <br /> More about our services</p>
            <button style={{cursor:'pointer'}} id='touch' className='animate__animated animate__zoomIn'>GET IN TOUCH</button>
            <div id='outer-input-form' className='div-col'>
                <input className='animate__animated animate__zoomIn'
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id="input-contact"  placeholder='Enter your Email Address'/>
                <button className='animate__animated animate__zoomIn' onClick={handleSubmit} style={{position:'absolute',}} id='touch-send'>Send</button>
            </div>
        </div>
    </div> 
  )
}

export default ContactUsBar