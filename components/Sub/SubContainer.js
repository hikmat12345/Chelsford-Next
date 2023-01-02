import logo1 from "../../components/images/logo1.png"
import logo2 from "../../components/images/medical.png"
import logo3 from "../../components/images/beauty.png"
import Image from "next/image"
import home from "../../styles/HomePage.module.css"
const SubContainer = () => {
  return (
    <div className={home.sub__container}>
      <div className={home.sub__container__main}>
        <span className={home.sub__container__main__text}>10%OFF</span>
        <span className={home.sub__container__main__text1}>All Courses</span>
      </div>
      <div className={home.sub__container2}>
        <div className={home.boxVContainer}>
          <div className={home.boxV__top}>
            <Image src={logo1} width="100%" height="70px" />
            <h2 className={home.boxV__top__h2}>Laser</h2>
          </div>
          <div className={home.information}>
            <p className={home.information__text}>
              Experts in Aesthetic Laser training since 2008
            </p>
          </div>
        </div>
        <div className={home.boxVContainer}>
          <div className={home.boxV__top}>
            <Image src={logo2} width="100%" height="70px" />
            <h2 className={home.boxV__top__h2}>Medical</h2>
          </div>
          <div className={home.information}>
            <p className={home.information__text}>
              Get trained by Expert Doctors in Aesthetic treatments
            </p>
          </div>
        </div>
        <div className={home.boxVContainer}>
          <div className={home.boxV__top}>
            <Image src={logo3} width="100%" height="70px" />
            <h2 className={home.boxV__top__h2}>Beauty</h2>
          </div>
          <div className={home.information}>
            <p className={home.information__text}>
              Accredited Beauty courses for all levels
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubContainer
