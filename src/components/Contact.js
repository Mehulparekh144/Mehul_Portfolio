import React from 'react'
import contact from '../assets/contact.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7d99zcu', 'template_cj2ypio', form.current, 'DBSdGZk8X2si4WE4F')
            .then((result) => {
                alert("Email sent ✅ ")
                e.preventDefault()                
                
                
                


            }, (error) => {
                alert("Email not sent ❌")
                e.preventDefault()
               
                

            });
    };

    return (
        <div className='container1' id='contact
        '>
            <h2 style={{
                fontFamily: 'Comfortaa'
            }} >Contact</h2>
            <p className='contactp'>Get in Touch !</p>
            <div className="row my-5">
                <div className="col-sm-6">
                    <img src={contact} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-6">
                    <form ref={form} onSubmit={sendEmail} className='mx-3'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name='user_name' required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='user_email' required/>
                        </div>


                        <textarea className="form-control" placeholder="Enter your Message " id="floatingTextarea2" style={{ height: '100px' }} name="message" required></textarea>


                        <button type="submit" className="btn" >Send</button>


                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact
