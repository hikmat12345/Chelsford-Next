 import { useRouter } from 'next/router'
 import Image from "next/image";
import { getImageOrVideoSrcFromPublicFolder } from '../../utils/helpers';
import $ from "jquery"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react"; 
import dynamic from "next/dynamic";

function CourseDetail() {
    const router = useRouter()
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
  const { param } = router.query
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
 }
  useEffect(() => { 

    // $(".banner-card-col:nth-child(1)").tooltip(); 
    // $(".banner-card-col:nth-child(3)").tooltip();   
     $('.Toggle-header').click(function() {
      $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
    }); 
  
//    owl slider 
// $('.carousel-inner').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })


  $("#your-talk ul li").click(()=>{
    console.log($(this).html( ), '$(this).find("div")')
    //  $(this).find("div").toggleClass("show-text")
    $(this).animate({
           width: 430
     }); 
  }); 
    $( ".chevron-arrow" ).click((e)=>{
       e.preventDefault();    
       $('.remaining-boxes').toggleClass("remaining-boxes-show");
       if ($(".remaining-boxes").hasClass("remaining-boxes-show")) {
          $(".chevron-arrow").html('<i className="fa fa-angle-up" aria-hidden="true"></i>'); 
         }else {
           $(".chevron-arrow").html('<i className="fa fa-angle-down" aria-hidden="true"></i>'); 
         }
     });
  
     $(document).on("click",".banner-card ", function () { 
        $(this).toggleClass("hbox-active"); 
        $(".banner-card").not(this).toggleClass("hbox-hidden");
        $(this).find(".box-extra").toggleClass("active-box-extra")
    });
   
  var acc = document.getElementsByClassName("you-talk-btn");
  var i; 
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
   
  })


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
  } 

  return (
    < >

    <section id="main-sect" className="main-sect" style={{
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "470px",
      boxShadow: "inset -45px -215px 64px -9px rgb(0 0 0 / 32%)"}}>
      <div className="course-overlay">
        <div className="container">
          
            <div className="main-text">
              <h3>VTCT Level 2, 3 & 4 NVQ Beauty & Laser</h3>
              <p>
                Qualification Code: LIA/203/FE
                <br />
                Credit Value: 1
              </p>
            </div>
          <div className="banner-card-row ">
            <div className="px-1 banner-card-col banner-card" title="pre_requisite">
              <button className="my-1 main-btns">
                <div className="py-2 d-flex">
                  <Image layout='fill' src={getImageOrVideoSrcFromPublicFolder("icon/pre_requisite.png")}  alt="pre-requisite img" />
                  <p className="px-2 banner-boxes-tex justify-content-start text-start">
                      Pre-requisites
                    <br/>
                    <span className="fs-5">None</span>
                  </p>
                </div>
              </button>
            </div>
            <div className="px-1 banner-card-col banner-card">
              <button className="my-1 main-btns">
                <div className="py-2 d-flex">
                  <Image layout='fill' src={getImageOrVideoSrcFromPublicFolder("icon/detail_duration.png")} alt="detal duration" />
                  <p className="px-2 banner-boxes-tex justify-content-start text-start">
                    Duration
                    <br />
                    <span className="fs-5">30 Days</span>
                    <span className="fs-5 box-extra"> Week 1: Mon-Sat , Week 2: Fri and Sat</span>
                  </p>
                </div>
              </button>
            </div>
            <div className="px-1 banner-card-col banner-card" title=" @if ($product['addtional_charges'] != 0 && $product['addtional_charges'] != NULL ) (Plus £{{ $product['addtional_charges'] }} Exam fee & Materials)  @endif">
              <button className="my-1 main-btns">
                <div className="py-2 d-flex">
                  <Image layout='fill' src={getImageOrVideoSrcFromPublicFolder("icon/detail_pric_icon.png")} alt="detail price" />
                  <p className="px-2 banner-boxes-tex justify-content-start text-start">
                    Price
                    <br />
                      <span className="fs-5">
                          <del>£4750</del>  
                           <span style={{color: "#fff", fontWeight:400, fontSize:"10px"}}> £4750</span>
                     </span>
                  </p>
                </div>
              </button>
            </div>
            <div className="px-1 banner-card-col">
              <button className="my-1 btn main-btns-4 main-btns">
                <h4
                  className="px-2 text-center text-white fs-5 fw-bold justify-content-center" >
                <a href="#" style={{color: "#fff",fontSize: "22px",fontWeight: 500}}> 
                    View Dates & Book
                    <i
                      className="my-2 ml-4 text-white fa fa-arrow-right"
                      style={{fontsize: "17px"}}
                    ></i>
                  </a>
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    {/* <!-- Start of Section Course Module --> */}
 
    <section id="Course_module" className="py-5 course_module">
      <div className="container">
        <h4 className="pt-3 pb-5 text-center">Course Modules</h4>
        <div className="px-5 row">
          
          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                1
              </div>
              <p className="py-5">Level 2 Infection Control</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                2
              </div>
              <p className="py-5">Client Communication</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                3
              </div>
              <p className="py-5">Facial Massage &amp; Skincare</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                4
              </div>
              <p className="py-5">Facials Electrics</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                5
              </div>
              <p className="py-5">Body Electrics</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                6
              </div>
              <p className="py-5">Electrolysis</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                7
              </div>
              <p className="py-5">Body Massage</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                8
              </div>
              <p className="py-5">Skin Tightening</p>
            </div>
          </div>
        </div>

        <div className="px-5 row remaining-boxes remaining-boxes-show" style={{display:"none"}}> 
          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
               9
              </div>
              <p className="py-5">Indian Head Massage</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                10
              </div>
              <p className="py-5">Core of Knowledge</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                11
              </div>
              <p className="py-5">Hazards and Safety</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                12
              </div>
              <p className="py-5"> Fitzpatrick Skin Types</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                13
              </div>
              <p className="py-5">Hair Biology</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                14
              </div>
              <p className="py-5">Laser Hair Reduction</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                15
              </div>
              <p className="py-5">Vascular</p>
            </div>
          </div>

          <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                16
              </div>
              <p className="py-5"> Pigmented Lesions</p>
            </div>
          </div>
         	
      <div className="px-1 col-sm-6 col-6 col-md-6 col-lg-3">
            <div className="course_module_label">
              <div className="px-3 py-1 mt-5 text-center text-white fs-3 justify-content-center label-circle">
                17
              </div>
              <p className="py-5">Aromatherapy Pre Blended Oils</p>
            </div>
          </div>
        </div>

        </div>
 
        <div className="my-3 text-center justify-content-center">
          <div className="px-3 py-3 text-center text-white justify-content-center chevron-arrow label-circle"><i className="fa fa-angle-up" aria-hidden="true"></i></div>
        </div>
      
    </section>
    {/* <!-- course information   --> */}
 
    <section id="you-talk-with" className="mb-4 you-talk-with" >
          <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <h2>Course Information</h2>
                      <p className="py-2 description">In this course, you'll learn a variety of new skills that will help launch you into a rewarding career. Have a look at the course information to get an idea of what we’ll cover:</p> 
                    </div> 
                    <div className="col-md-4">
                    </div> 
              </div>
              <div className="row">
                <div className="tabs-ci col-md-3">
                    <ul>
                        <li>
                          <button className="tablinks " onClick={(e)=>openCity(e, 'Course_Details')}>Course Details</button> 
                        </li>
                        
                        <li>
                          <button className="tablinks" onClick={(e)=>openCity(e, 'Entry_Requirements')}>Entry Requirements</button>
                        </li>
                        <li>
                          <button className="tablinks" onClick={(e)=>openCity(e, 'Teaching_Assessments')}>Teaching/Assessments</button>
                        </li> 
                        <li>
                          <button className="tablinks" onClick={(e)=>openCity(e, 'Resources')}>Resources</button>
                        </li> 
                        <li>
                          <button className="tablinks" onClick={(e)=>openCity(e, 'Study_Options')}>Study Options</button>
                        </li> 
                        <li>
                          <button className="tablinks" id="openCity(event, 'Tuition_Fees')">Tuition Fees</button>
                        </li> 
                    </ul>
                  </div>
                
                <div className="tabs col-md-9">
                    <div id="Course_Details" className="tabcontent" style={{display:"initial"}}  > 
                        <p> <strong>PART 1 – LEVEL 2 BEAUTY THERAPY</strong>
                            Underpinning this qualification you will develop a sound knowledge of health and safety practices in a salon environment and how to promote client care and communications in beauty related industries. You will also develop an underpinning knowledge and understanding of the practical skills learned throughout this qualification.
                            The purpose of this qualification is to develop your skills in beauty therapy to a high level of occupational ability, to enable you to perform your own salon services.
                            Units in this qualification have been mapped to the relevant NOS (where applicable). This qualification is regulated on the Regulated Qualifications Framework.
                            This qualification is approved and supported by the Hairdressing and Beauty Industry Authority (HABIA), the standard setting body for hair, beauty, nails and spa qualifications. <br /><br />
                            <strong>PART 2 - LEVEL 3 BEAUTY THERAPY (GENERAL ROUTE)</strong> <br />
                            The VTCT Level 3 Beauty Therapy is a qualification that has been specifically designed to develop your practical skills in; how to provide face and body electrical treatments, Massage, Indian head, Peblended Oils, Epilation.
                            Underpinning this qualification you will develop a sound knowledge of health and safety practice in a salon environment, how to promote client care and communication in beauty related industries, . You will also develop an underpinning knowledge and understanding of the practical skills learned throughout this qualification.
                            The purpose of this qualification is to develop your skills in beauty therapy to a high level of occupational ability, to enable you to perform your own salon services.
                            Units in this qualification have been mapped to the relevant NOS (where applicable). This qualification is regulated on the Regulated Qualifications Framework.
                            This qualification is approved and supported by the Hairdressing and Beauty Industry Authority (HABIA), the standard setting body for hair, beauty, nails and spa qualifications.<br /><br />
                            <strong> PART 3 - LEVEL 4 LASER & LIGHT</strong><br />
                            This is a vocationally related qualification and is focused on reducing hair growth and photo rejuvenation of the skin using intense light and laser treatments.
                            In this qualification, you will develop an understanding of managing safe working practices and how to identify and control hazards.
                            You will also learn how to identify hair and skin conditions and those clients suitable for intense light and laser system treatments.
                            This qualification has been mapped to the relevant NOS, and is accredited on the Qualifications and Credit Framework (QCF).
                            The course will cover both theory and practice, which will be delivered by experienced Laser/IPL technicians.   </p>
                    </div>
                
                    <div id="Entry_Requirements" className="tabcontent"> 
                      <p>This course is for complete beginners and there are no entry requirements for this course. If you want to enter the world of aesthetics then this is the perfect course that covers everything from foundation to advanced.</p> 
                    </div>

                    <div id="Teaching_Assessments" className="tabcontent"> 
                      <p> <strong>Lectures are delivered by experienced Educators.</strong><br /><br />
                        <strong> Practical:</strong> Our trainers work with Laser/IPL day in day out, so you will receive the most up to date information. Our courses are run in a specialized Laser / IPL training organization. We have a number of different Laser /IPL equipment from different manufacturers, so you can get practical hands-on experience using different devices.<br />
                        <strong>Group Work:</strong> You will work in groups to perform consultations and role plays. This breaks the theory up and makes the course a lot more fun and interesting. It refines the understanding of the subject area and allows the opportunity to give and receive feedback on performance.<br />
                        <strong> Discussions:</strong> Discussions are encouraged throughout the training, this allows reflective thinking, which leads to a deeper understanding of the subject area. There are a lot of differing opinions on the types of Lasers and parameters to use and a discussion clarifies any issues.<br />
                        <strong>Assignments:</strong> This satisfies the theory part of the qualification. Assignments will need to be completed for each of the modules. We will provide you with detailed course material that will allow you to complete the assignments. You can work on the assignments at your own pace, however the quicker you complete them, the quicker you will receive your qualification. 100% support and help will be provided for you to complete this part of the study programme.<br />
                        <strong>Observations:</strong> This satisfies the practical part of the qualification. You will be required to perform treatments on real clients under assessment conditions. We will ensure that you are 100% ready for this part of the course by providing you with enough practical experience. You will perform Facial Treatments, Facial/Body Electricals, Massage including Indian Head, Electrolysis and Hair removal treatments using Laser and IPL.<br />
                        You will perform Skin tightening, Skin rejuvenation, Red blood spots, Rosacea, Vein removal and Pigmented lesions removal using Lasers.<br />
                        <strong> Portfolio:</strong> As part of this course, you will be required to produce a portfolio. All evidence will need to be documented in the portfolio and cross-referred to unit outcomes.<br />
                          Constructing the portfolio should not be left to the end, and we will help you to do this step by step as you go along on this course. 
                        <strong> Independent Study:</strong> You will be required to perform some independent study on this course. This will enable you to tailor the general course materials to your own interests and requirements and develop your learning style. </p>
                    </div>
                    
                    <div id="Resources" className="tabcontent"> 
                      <p>You will have all teaching resources provided, including a notepad pen and iPad to keep all your notes safe. A full uniform will be provided at no extra cost. You will have access to our student portal, which supports you throughout your study. You will be assigned a dedicated tutor to guide and support you until the completion of the course. Access to the latest electrical facial equipment will be available for you to use at any time during the course.</p>
                    </div>

                    <div id="Study_Options" className="tabcontent"> 
                      <p>You will enter the college 4 days a week Monday to Thursday for 6 weeks 10am to 5pm. Once you have completed the Level 2 and Level 3 you will start your Level 4 Laser course which will be carried out Monday to Thursday 10am to 5pm. You're studies will be supported by your student portal where you can access you're resources and assignments for home study.</p>
                    </div>
                    <div id="Tuition_Fees" className="tabcontent"> 
                          <p>         
                              £4750 includes the following:<br/> 
                              Level 2 Infections control<br/> 
                              Core of Knowledge<br/> 
                              Tunic<br/> 
                              Resources<br/> 
                              VTCT Qualification Fee<br/> 
                              Assessment Fees<br/>  
                          </p>
                    </div>
                </div> 
                </div> 
          </div>  
    </section>

    {/*  your talk with  */}
   
    <section id="your-talk">
      <div className="custom-container-overlay">
        <div className="custom-container">
          <h2>You'll walk away with </h2>
            <ul>
              <li>
                <div className="tick-icon"> 
                    <span><Image  src={getImageOrVideoSrcFromPublicFolder("icon/tick.png")} height={20} width={20} alt='tick icon' /></span>
                </div> 
                <div>
                    <div className="you-talk-btn">Once you complete the course, you will earn a VTCT Qualification...</div>
                    <div className="you-talk-remaining-text"> in Level 2 Beauty Therapy of providing Manicure, Pedicure, Facial, Waxing, Eye treatments and Makeup. You will also get a VTCT Qualification in NVQ Level 3 Beauty Therapy (General Route), including Face and Body Electrical, Massage, Indian Head, Pre-blended oil Massage and Epilation. Apart from that, you will also walk away with a VTCT Qualification in NVQ Level 4 Laser and Light & Knowledge of the Identification of Fitzpatrick Skin Types, Laser & IPL Hair Reduction, Pigmentation - sunspots & Freckles Removal, Vein Removal (Face & Legs), Skin Tightening Treatments, IPL Treatments for Sun Damage, Acne, Rosacea & Rejuvenation. As an added bonus you will receive a Level 2 in Infection control and Core of Knowledge.</div>
                </div>
              </li> 
              <li>
                <div className="tick-icon"> 
                    <span><Image  src={getImageOrVideoSrcFromPublicFolder("icon/tick.png")} height={20} width={20} alt='tick icon' /></span>
                </div> 
                <div>
                    <div className="you-talk-btn">Once you complete the course, you will earn a VTCT Qualification...</div>
                    <div className="you-talk-remaining-text"> in Level 2 and 3 Beauty Therapy (General Route), including Face and Body Electrical, Massage, Indian Head, Pre-blended oil Massage and Epilation. Apart from that, you will also walk away with a VTCT Qualification in NVQ Level 4 Laser and Light & Knowledge of the Identification of Fitzpatrick Skin Types, Laser & IPL Hair Reduction, Pigmentation - sunspots & Freckles Removal, Vein Removal (Face & Legs), Skin Tightening Treatments, IPL Treatments for Sun Damage, Acne, Rosacea & Rejuvenation. As an added bonus you will receive a Level 2 in Infection control and Core of Knowledge.</div>
                </div>
              </li> 
          </ul>
        </div>
      </div>
    </section> 
    {/* //  <!-- testimonila  --> */}
    <div className="container .home-testimonial">
        <div className="row">
            <div id="myCarousel" className="carousel slide course-testimonial" data-ride="carousel" 
            > 
               <div className="mobile-banner" id="mobile-icon">
                    
                </div>
                <OwlCarousel items={1}  
                    className="carousel-inner"
                    loop  
                    nav  
                    margin={8} 
                     >
                    <div className="item active">
                        <div className="customStyleTestimonial">
                            <div className="img-box"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/b-AvUzcgVNE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                              <p className="testimonial"><i className="fa fa-quote-right" style={{color:"#1F105A", fontSize:"30px"}}></i><br/>After passing this course I was able to set up my own professional laser clinic within 4 weeks I was confident in buying my own equipment, making consent forms, advice sheets and everything else that is needed and I now have a very successful business! </p> 
                                  <br/><br/>
                                  <div className="innerControl">
                                    {/* <div className="owl-next"  data-slide="prev">
                                        <i className="fa fa-angle-left"></i>
                                    </div> */}
                                    <span className="clientName">Ghazala’s Story</span>
                                    {/* <div class="owl-prev"  data-slide="next">
                                        <i className="fa fa-angle-right"></i>
                                    </div> */}
                                </div>
                             
                          </div>
                       </div>
                    <div className="item">
                        <div className="customStyleTestimonial">
                        <div className="img-box"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/XS_ht5XxwRI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <p className="testimonial"><i className="fa fa-quote-right" style={{color:"#1F105A", fontSize:"30px"}}></i><br/>Aesthetic Laser Clinic is very well set up to do training as it is a working clinic with excellent facilities. The trainers were very welcoming and friendly which in turn creates a good atmosphere in which to learn. I would recommend them for training and treatments. </p>
                            <br/><br/>
                            <div className="innerControl">
                        <a className="" href="#myCarousel" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <span className="clientName">Sally’s Story</span>
                        <a className="" href="#myCarousel" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                         
                        
                        </div>
                    </div>
                    <div className="item">
                        <div className="customStyleTestimonial">
                        <div className="img-box"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/lxZYjFnYTV4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <p className="testimonial"><i className="fa fa-quote-right" style={{color:"#1F105A", fontSize:"30px"}}></i><br/>I found the training very thorough, very interesting and very informative and helpful. I now am able to carry on lasering using the new techniques that I have learnt and will be quite happy to carry out laser hair removal and skin rejuvenation. I would feel extremely confident.  </p>
                            <br/><br/>
                            <div className="innerControl">
                        <a className="" href="#myCarousel" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <span className="clientName">Michelle’s Story</span>
                        <a className="" href="#myCarousel" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                        
                        </div>
                    </div>
                </OwlCarousel>
                <div className="CarouselcontrolsCustom">
                    <h2>Testimonials</h2> 
                </div>
            </div>
            
        </div>
    </div>
   
    {/* // <!-- what next  --> */}
      <div className="container-fluid content-feature-courses content-feature-courses-update">
        <div className="row">
            <div className="headerContainer">
                <h2>What’s Next </h2>
            </div>
            <div className="coursesContainer">
                
                <div className="course-card">
                    <div className="iconDiv">
                        <div className="iconContainer">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                    </div><h3>CPD MICRONEEDLING DIPLOMA.</h3>
                    <p>Learn how to improve Scarring, Blemishes & Collagen</p>
                    <a href="/course/cpd-microneedling-diploma">Explore More</a>
                </div>
                <div className="course-card">
                    <div className="iconDiv">
                        <div className="iconContainer">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                    </div><h3>CPD ADVANCED PLASMA FIBROBLAST</h3>
                    <p>Learn Plasma Non-Surgical Eye Lift procedure & Wrinkle Removal.</p>
                    <a href="/course/cpd-advanced-plasma-fibroblast">Explore More</a>
                </div>
                <div className="course-card">
                    <div className="iconDiv">
                        <div className="iconContainer">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                    </div>
                    <h3>CPD ADVANCED CHEMICAL PEELS</h3>
                    <p>Learn to use Chemical Peels to treat various skin conditions.</p>
                    <a href="/course/cpd-advanced-chemical-peels">Explore More</a>
                </div>
                <div className="course-card">
                    <div className="iconDiv">
                        <div className="iconContainer">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                    </div>
                    <h3>VTCT LEVEL 4 SKIN BLEMISH REMOVAL</h3>
                    <p>Learn Advanced techniques to remove Skin tags, Milia & Veins.</p>
                    <a href="/course/level-4-laser-and-blemish-removal">Explore More</a>
                </div>
                <div className="course-card">
                    <div className="iconDiv">
                        <div className="iconContainer">
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                    </div>
                    <h3>VTCT LEVEL 4 LASER & IPL TREATMENTS</h3>
                    <p>Necessary Qualification to enter the world of Lasers & IPL.</p>
                    <a href="/course/vtct-level-4-laser-and-ipl-treatments">Explore More</a>
                </div>
                
            </div>
        </div>
    </div>

    {/* // {{-- content page section 6 --}} */}

    <div className="container-fluid learn-more" >
        <div className="row get-qualified">
              <div className="col-md-7">
                <div className="coursesDiscriptionCol">
                    <h2>Get Qualified and Start Today</h2>
                    <p className="description">We'll ensure that you reach a high standard of education and are competent in your chosen subject of study so you can move straight into the job industry. Enrol Today!</p> 
                </div> 
              </div>
            <div className="col-md-2"> </div>
            <div className="col-md-3">
                <div className="bookingContainer">
                    <button type="button" className="btn btn-default" style={{background: "#D9BD3E",borderRadius: "5px",top: "35px",bottom: 0,position: "relative"}}><a href="{{ url('course/booking/'.$product['slug'] ) }}"  style={{color:" #fff", fontSize: "22px",fontWeight: 500}}>View Dates & Book</a></button>
                </div>
            </div>
        </div>
    </div>  

{/* // <!-- footer sticky icons on mobile  --> */}

     <div className="contact-source">
       <div className="contact-btns">
         <button type="button" className="btn btn-default" ><a href="tel:0800 955 0054" ><Image layout='fill' src={getImageOrVideoSrcFromPublicFolder("icon/call_icon-svg.png")} alt="call us" /></a></button>
         <button type="button" className="btn btn-default " ><a href="{{ url('course/booking/'.$product['slug'] ) }}" >View Dates & Book</a></button>
         <button type="button" className="btn btn-default" ><a href="mailto:team@chelsford.com" ><Image layout='fill' src={getImageOrVideoSrcFromPublicFolder("icon/chat_icon_svg.png")} alt="chat us" /></a></button>
       </div>
     </div>

    </>
  )
}

export default CourseDetail
