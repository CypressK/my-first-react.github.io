import React from 'react'
import './Contact.css'
import { AiOutlineMail,AiOutlineHome,AiOutlinePhone } from "react-icons/ai";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      const formObj={};

      formData.forEach((v,k)=>{
        formObj[k]=v;
      })
      const accessKey = import.meta.env.VITE_ACCESS_KEY;
      formObj.access_key = accessKey;
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formObj)
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><AiOutlineMail className='bi mailIcon' />info@universitydomain.co.uk</li>
                <li> <AiOutlinePhone className='bi phoneIcon' />+44 20 7946 0958</li>
                <li><AiOutlineHome  className='bi homeIcon'/>123 Kingsway, London, WC2B 6NH, United Kingdom</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text"  name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Email address</label>
                <input type="email" name="email" placeholder='Enter your Email' required/>
                <label htmlFor="">Phone number</label>
                <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                <button className='btn dark-btn' type='submit'>Submit now</button>
            </form>
            <span className='sending'>{result}</span>
        </div>
    </div>
  )
}

export default Contact