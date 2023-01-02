import React from 'react';
import contactPage from '../styles/ContactUs.module.css'

import { FaFacebookF, FaPhone, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Header from './../components/header/Header';
import Footer from './../components/Footer/Footer';
import { useState } from 'react';
import { postRequest } from './api/fetchAction';
import handler from './api/hello';
import { useEffect } from 'react';

const url = "https://newadminapi-preprod.findanexpert.net/api/Users/contactus"



function ContactUs(props) {

  const [formData, setFormData] = useState({
    body : "",
    customerEmail : "",
    customerName : "",
    subject : ""
  })

  const handlerNameChange = (e) => {setFormData({...formData, customerName: e.target.value})}
  const handlerEmailChange = (e) => {setFormData({...formData, customerEmail: e.target.value})}
  const handlerSubjectChange = (e) => {setFormData({...formData, subject: e.target.value})}
  const handlerBodyChange = (e) => {setFormData({...formData, body: e.target.value})}

  console.log("handle change==", formData)

  const submitHandler = (e) => {
    e.preventDefault()
     postRequest('/Users/contactus', formData).then((response => {
      if(response.data.error){
        alert(response.data.message)
      }
      else alert("Successfully submitted")
      console.log("post response===>", response)
     }))
     setFormData({
      body : "",
      customerEmail : "",
      customerName : "",
      subject : ""})
  }
  
  useEffect(() => {
    return
  },[])
  return (
    <>
      <Header />
      <div className={contactPage.contactUs__container}>
        <div className="">
          <img
            src="https://chelsford.com/public/chelsforImages/contact-banner.webp"
            className={contactPage.banner__sec}
          />
        </div>
        <div className="w-full">
          <div className="m-3 md:m-10">
            <div className="flex justify-evenly flex-col md:flex-row">
              <div className="w-full md:w-5/12">
                <div className="w-full">
                  <p className="">Leader in Aesthetics Education</p>
                  <h2>Get In Touch</h2>
                  <p className="mb-3">
                    We are looking forward to hearing from you. If you have any
                    questions, comments or suggestions, send in your details, and our
                    careers advisor will contact you immediately.
                  </p>
                </div>
                <div className="">
                  <form method='post'
                    id="frm-add-contact"
                    className="contactForm"
                    // action="/Users/contactus"
                    onSubmit={submitHandler}
                  >
                    <input
                      type="text"
                      value= {formData.customerName}
                      name="name"
                      id="name"
                      // defaultValue=""
                      onChange= {handlerNameChange}
                      required
                      // className="form-control contactFormInput"
                      className={contactPage.contactFormInput}
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      value= {formData.customerEmail}
                      name="email"
                      id="email"
                      // defaultValue=""
                      onChange= {handlerEmailChange}
                      required
                      className={contactPage.contactFormInput}
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      value= {formData.subject}
                      name="subject"
                      id="subject"
                      // defaultValue=""
                      onChange= {handlerSubjectChange}
                      className={contactPage.contactFormInput}
                      placeholder="Your Subject"
                      required
                    />
                    <textarea
                      className={contactPage.contactFormArea}
                      name="message"
                      value= {formData.body}
                      rows={5}
                      id="massage"
                      required
                      cols={30}
                      onChange= {handlerBodyChange}
                      placeholder="Your Message"
                      // defaultValue={""}
                    />
                    {/* <input
                      type="submit"
                      defaultValue="Submit"
                      name="contact_form"
                      className="bg-[#D9BD3E] text-white rounded-lg py-2 float-right w-full md:w-1/5 mb-3 md:mb-0"
                    /> */}
                    <button
                    //  onClick={e => submitHandler()}
                    type="submit" className="bg-[#D9BD3E] text-white rounded-lg py-2 float-right w-full md:w-1/5 mb-3 md:mb-0">Submit</button>
                  </form>
                </div>
                {/* <div id="response" style={{ width: "100%" }} /> */}
              </div>
              <div className="">
                <img
                  src="https://chelsford.com/public/chelsforImages/Contact-us-inner.webp"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>


        {/**************************** * contact-feature ************************/}

        <div className="flex flex-col bg-[#F3F7FF] justify-center p-3">
          <div className="md:m-20">
            <div className="flex flex-col justify-center text-center">
              <h2>Speak to us</h2>
              <p>Our knowledgeable careers advisors is available to answer your questions and give you peace of mind knowing we've got your back. Following are the ways to contact us with your questions or concerns. So don't wait, let's talk about your future goals.</p>
            </div>
            <div className="flex flex-col md:flex-row mt-3">
              <div className="flex flex-col bg-[#1F105A] justify-center rounded-l-lg w-full md:w-25 text-center h-40 md:h-auto">
                <h3 className="text-white">Let's Go Social</h3>
                <p className="text-white">Follow us on social media</p>
                <div className="">
                  <ul className='flex space-x-5 justify-center mr-10'>
                    <li>
                      <a href="https://www.facebook.com/liatraininguk/" target="_blank"><FaFacebookF color='white' /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/LaserTrainingUK" target="_blank"><FaTwitter color='white' /></a>
                    </li>
                    <li>
                      <a href="https://instagram.com/chelsfordinstitute" target="_blank"><FaInstagram color='white' /></a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCLOQkMw8kYSIZu8HcePE79w" target="_blank"><FaYoutube color='white' /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#eceff4] items-center p-3 w-100 md:w-25 text-center">
                <div className="flex justify-center pb-3">
                  <div className={contactPage.iconContainer}>
                    <FaPhone color='white' size={26} />
                  </div>
                </div>
                <p>Phone:</p>
                <h3>0800 955 0054</h3>
              </div>
              <div className="bg-[#E7EDFC] p-3 w-100 md:w-25 text-center">
                <div className="flex justify-center pb-3">
                  <div className={contactPage.iconContainer}>
                    <MdEmail color='white' size={28} />
                  </div>
                </div>
                <p>Email</p>
                <h3>team@chelsford.com</h3>
              </div>
              <div className="bg-[#DFE7FB] p-3 rounded-r-lg w-100 md:w-25 text-center">
                <div className="flex justify-center pb-3">
                  <div className={contactPage.iconContainer}>
                    <MdLocationOn color='white' size={30} />
                  </div>
                </div>
                <p>Address:</p>
                <h3 className="text-2xl">31-32 Eastcastle Street
                  London
                  W1W 8DL</h3>
              </div>
            </div>
          </div>
        </div>



        <div className="flex justify-center p-3 bg-[#E7EDFC]">
          {/* container-fluid courses-page-section-6 */}
          <div class="flex flex-col md:flex-row justify-center w-full md:w-11/12 px-2">
            <div class="flex flex-col mx-2 w-100 md:w-70">
              <h2>Get Qualified and Start Today</h2>
              <p class="description">We'll ensure that you reach a high standard of education and are competent in your chosen subject of study so you can move straight into the job industry. Enrol Today!</p>
            </div>
            <div class="flex flex-col w-30 pt-4">
              <a href="#" className="bg-[#D9BD3E] py-3 px-5 rounded text-white text-center"> Date/Book</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
