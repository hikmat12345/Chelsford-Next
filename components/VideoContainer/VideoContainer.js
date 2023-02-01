import home from "../../styles/HomePage.module.css"
// import { Carousel } from "react-responsive-carousel"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import car from "../../styles/carousel.module.css"
import Link from "next/link"
import Router from "next/router"
const VideoContainer = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}
  return (
    <div className='body_all'>
        <div className={home.headerContainer}>
          <h2 className={home.headerContainer__heading}>
            What you’ll get at Chelsford?
          </h2>
          <p className={home.headerContainer__text}>
            We are the UK’s best aesthetic training institute providing our
            students with the most up-to-date knowledge &amp; training required
            in the market. Here’s what we provide!
          </p>
        </div>
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    deviceType={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    
   
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/__9PvE23Fdjw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
           
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/7WPC9RyGwug"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/8zj7k1lzF44"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/BX__NrFqGfEE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/HFzxQ5OE5FM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/C_NsqwVN5BE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/fUVbzRBAH48"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/Ik__Esn6EoJk"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
          
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/PYT008A__Gcw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
            
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/PqSGV5SEEQM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
          
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/OYfSDOKbKmY"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
           
              <iframe
              className='iframes_all'
                width="100%"
                id="feature_video2"
                height="100%"
                src="https://www.youtube.com/embed/oSd1Ze2H2j4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                allowFullScreen=""
              ></iframe>
           
  </Carousel>
  
  <div className={home.courses__videos}>
            <div className={home.slider}>
              <div className={home.slider_wrapper}>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <Link href="" scroll={false}>
                        <iframe
                          width="100%"
                          id="feature_video2"
                          height="100%"
                          src="https://www.youtube.com/embed/__9PvE23Fdjw"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                          allowFullScreen=""
                        ></iframe>
                      </Link>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-1" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Men's Laser Hair Removal
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students perform Laser Hair Removal on a Male Client.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/7WPC9RyGwug"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-2" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Laser Hair Removal on Asian Skin
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students learn how to treat dark skin with Laser Hair
                        Removal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/8zj7k1lzF44"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-3" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Face Test Patch
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students learn how to perform Laser Hair Removal Patch
                        test on Face
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/BX__NrFqGfEE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-4" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Laser Hair Removal Theory
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Learning the theory behind Laser is important when it
                        comes to practical.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/HFzxQ5OE5FM"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-5" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Laser Paper Exercise
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students practice Laser technique on Black paper card
                        before treating real clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/C_NsqwVN5BE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-6" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Laser Hair Removal on Face
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students learn to use the laser to treat clients face.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/fUVbzRBAH48"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-7" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Acne &amp; Acne Scarring
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Students assess the skin to check the grade of Acne.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/Ik__Esn6EoJk"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-8" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on IPL Photo Rejuvenation
                        </h3>
                      </a>
                      <p className={home.discription}>
                        The students use an intense pulse light system to
                        provide a Rejuvenation Facial.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/PYT008A__Gcw"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard__write; encrypted__media; gyroscope; picture__in__picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-9" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Facial Veins
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Student performing a Face Vein treatment using a
                        Vascular hand piece.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/PqSGV5SEEQM"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-10" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Red Blood Spots / Cherry Angiomas
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Training on Red Blood Spots/Cherry Angiomas/Campbell de
                        Morgan Spots.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/OYfSDOKbKmY"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-11" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Sunspots &amp; Freckles on Back
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Training on Sunspots/Freckles on Back.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={home.slider__item}>
                  <div className={home.coursesBox}>
                    <div className={home.slider__video}>
                      <iframe
                        width="100%"
                        id="feature_video2"
                        height="100%"
                        src="https://www.youtube.com/embed/oSd1Ze2H2j4"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                    <div className={home.contentContainer}>
                      <a href="#slide-12" className={home.vedio__container__a}>
                        <h3 className={home.contentContainer__text}>
                          Training on Laser Skin Tightening
                        </h3>
                      </a>
                      <p className={home.discription}>
                        Energy of the Long Pulsed Ndyag is delivered deep into
                        the dermis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
  </div>
  )
}

export default VideoContainer
