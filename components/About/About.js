import picMainDiv from "../../components/images/main-div-pic.png"
import Image from "next/image"
import home from "../../styles/HomePage.module.css"
const About = () => {
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
      <div className={home.main_div}>
        <div className={home.main_div__animation__1}>
          <div className={home.animation__box__1}>
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
        </div>
      </div>
    </div>
  )
}

export default About
