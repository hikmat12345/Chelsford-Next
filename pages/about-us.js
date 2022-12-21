import React from 'react';
import contactPage from '../styles/ContactUs.module.css'

import { FaFacebookF, FaPhone, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

function AboutUs(props) {
  return (
    <>
      <div className="bg-[#222] p-28">
        {/* <div className="container"> */}
        {/* <div className="row"> */}
        {/* <div className=""> */}
        {/* <div className="bg-[#4c2c8a] w-full md:max-w-fit py-2 pl-10 md:pr-7 m-auto rounded-md"> */}
        <h3 className="bg-[#4c2c8a] py-3 px-10 m-auto rounded-md text-light text-center">About Us</h3>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>


      <div className="" id="course-content">
        <div className="container">
          <div
            className="bg-[#f2f4f3] p-3 md:p-4 w-full md:w-fill"
            style={{ boxShadow: "rgba(0, 0, 0, 0.3) 6px 6px 18px 0px", marginTop: "-8%" }}
          >
            <div className="bg-[#fff] p-3 md:p-5" id="contact_form">
              <div className="text_block">
                <h1>&nbsp;</h1>
                <p>
                  Chelsford Institute of Higher Education is a leading provider of
                  internationally recognised academic qualifications in the UK, having
                  been offering its education to students for over a decade. We have
                  more than 100 courses with full time, part-time, evening and online
                  options to suit every student. &nbsp;
                </p>
                <p>
                  Chelsford has stood the test of quality education, allowing every
                  individual to excel and make a difference in this world. We do not
                  merely cram one's mind with information, but we also nurture the
                  character and integrity of each student so that they can stand on
                  their own feet by starting their own venture or become the best
                  employee.&nbsp;
                </p>
                <p>
                  Believe that strength lies in growing from the ground up, hence our
                  motto, "One cannot fly without roots." We let you decide the best
                  way to learn and grow by offering part-time, evening, full-time, and
                  online courses. Our funded and private courses are an affordable
                  route to helping you achieve your goals and fulfil your potential no
                  matter what subject area you wish to study. With a dedicated
                  Academic Support Team and flexible, fully recognised qualifications,
                  we have a range of options for you, whatever your educational
                  background or goals.
                </p>
                <p>
                  If you're an international student thinking of studying abroad in
                  the UK, Chelsford Institute's Visa &amp; Immigration Service will
                  help you easily navigate the UK's visa application process and
                  achieve your dream of higher education.
                </p>
                <p>
                  We believe every individual has something to offer this world.
                  That's why we tailor our courses and facilities around your needs so
                  that you can reach your full potential and make the grade in your
                  own personal way.&nbsp;
                </p>
                <p>
                  Come over to our sparkling new facility and see how Chelseford can
                  change your future.
                </p>
              </div>
              {/* <div class="text_block">
                                      <h2><strong>Why Choose Us?</strong></h2>
                                  </div> */}
              <div className="text_block">
                <div className="course-contents">
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default AboutUs;

