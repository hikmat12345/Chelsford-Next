import React from "react"
import ServicesCSS from "../../styles/Service.module.css"
import Tatoo from "../../components/images/tatoo.webp"
import Image from "next/image"
import Link from "next/link"
const services = () => {
  return (
    <div>
      <div className={ServicesCSS.main__container}>
        <div className={ServicesCSS.sb__main__container}>
          <div className={ServicesCSS.img__div}>
            <div className={ServicesCSS.imgsub__div}>
              <Image className={ServicesCSS.img__src} src={Tatoo} />
            </div>
          </div>
          <div className={ServicesCSS.text__div}>
            <div className={ServicesCSS.heading__div}>
              <div className={ServicesCSS.subHeading_div}>
                <p className={ServicesCSS.para__div}>
                  Level 5 Laser Tattoo Removal
                </p>
              </div>
              <div className={ServicesCSS.text__div2}>
                <p className={ServicesCSS.para__text2}>From</p>
                <div className={ServicesCSS.price__div2}>
                  <p className={ServicesCSS.Price__para}>2750</p>
                </div>
              </div>
              <div className={ServicesCSS.Button__div}>
                <Link legacyBehavior href="/traning">
                  <button className={ServicesCSS.button__css}>
                    Service not Avaliable
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
