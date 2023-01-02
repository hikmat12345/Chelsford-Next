import picMainDiv from "../../components/images/main-div-pic.png"
import Image from "next/image"
import home from "../../styles/HomePage.module.css"
import { useState } from "react"
import aniPic1 from "../../components/images/anipic1.png"
const About = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(true)
  function myFunction() {
    document.getElementById("div1").style.display = "none"
  }
  return (
    <div className={home.home__section__3}>
      <div className={home.home__section__3__row}>
        <h2 className={home.section3__row__h2}>
          Chelsford Institute of Higher Education
        </h2>
        <p className={home.section__row__text}>
          Chelsford Institute of Higher Education is a leading provider of
          internationally recognised qualifications in the UK, helping students
          excel and make a difference in this world. We have more than 100
          courses with full time, part-time, evening and online options to suit
          every student. Our funded and private courses are an affordable route
          to helping you achieve your goals and fulfil your potential. If you're
          an international student thinking of studying abroad in the UK,
          Chelsford Institute's Visa & Immigration Service will help you easily
          navigate the UK's visa application process and achieve your dream of
          higher education.
        </p>
      </div>
      <div className={home.flip__card}>
        <div className={home.flip__card__inner}>
          <div className={home.front__end}>
            <div className={home.content_box_animation}>
              <div className={home.image_part}>
                <Image className={home.aboutPic} src={picMainDiv} />
              </div>
              <div className={home.text__part__1}>
                <h3 className={home.text__part__heading__home__section}>
                  Legal requirements satisfied
                </h3>
                <p className={home.text__part__text__home__section}>
                  Backed by UK’s top awarding bodies, we offer qualifications
                  that satisfy insurance & other legal requirements.
                </p>
              </div>
            </div>
          </div>
          <div className={home.back__end}>
            <div className={home.content_box_animation2}>
              <div className={home.image_part2}>
                <Image className={home.aboutPic2} src={aniPic1} />
              </div>
              <div className={home.text__part__2}>
                <h3 className={home.text__part__heading__home__section2}>
                  Quality is our hallmark
                </h3>
                <p className={home.text__part__text__home__section2}>
                  At Chelsford, we promise quality-based education to fast-track
                  your career through our intense courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
