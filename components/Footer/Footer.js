import Image from "next/image"
import FooterLogo1 from "../images/footerLogo1.png"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { CiMail, CiTwitter } from "react-icons/ci"
import { BiPhone } from "react-icons/bi"
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa"
import { SlSocialFacebook } from "react-icons/sl"
import home from "../../styles/HomePage.module.css"
const Footer = () => {
  return (
    <div className={home.Footer__main}>
      <div className={home.footer__container}>
        <div className={home.footer__container__row}>
          <div className={home.footer__container__1}>
            <div className={home.footer__container__1__content}>
              <div className={home.footer__container__image__part}>
                <Image className={home.footer__img} src={FooterLogo1} />
              </div>
              <div className={home.footer__icons}>
                <ul className={home.footer__social__icons}>
                  <li className={home.list__social__icons}>
                    <a href="/" className={home.link__social__icons}>
                      <i>
                        <SlSocialFacebook className={home.icons__all} />
                      </i>
                    </a>
                  </li>
                  <li className={home.list__social__icons}>
                    <a href="/" className={home.link__social__icons}>
                      <i>
                        <FaInstagram className={home.icons__all} />
                      </i>
                    </a>
                  </li>
                  <li className={home.list__social__icons}>
                    <a href="/" className={home.link__social__icons}>
                      <i>
                        <CiTwitter className={home.icons__all} />
                      </i>
                    </a>
                  </li>
                  <li className={home.list__social__icons}>
                    <a href="/" className={home.link__social__icons}>
                      <i>
                        <TiSocialYoutubeCircular className={home.icons__all} />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={home.footer__container__2}>
            <div className={home.footer__container__2__content}>
              <div className={home.footer__container__2__header}>
                <h3 className={home.footer__container__2__heading}>
                  Site Links
                </h3>
              </div>
              <ul className={home.footer__container__2__course__list}>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Laser Course
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Beauty Course
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Medical Course
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Online Course
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    About Us
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={home.footer__container__2}>
            <div className={home.footer__container__2__content}>
              <div className={home.footer__container__2__header}>
                <h3 className={home.footer__container__2__heading}>Courses</h3>
              </div>
              <ul className={home.footer__container__2__course__list}>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Laser Practitioner Diploma VTCT
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    VTCT Level 4 Laser &amp; IPL Treatments
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Level 4 Laser Hair Removal
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Laser Core of Knowledge
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Level 5 Laser Tattoo Removal
                  </a>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <a
                    href="/"
                    className={home.footer__container__2__course__list__link}
                  >
                    Advanced Laser Diploma
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={home.footer__container__2}>
            <div className={home.footer__container__2__content}>
              <div className={home.footer__container__2__header}>
                <h3 className={home.footer__container__2__heading}>Contact</h3>
              </div>
              <ul className={home.footer__container__2__course__list}>
                <li className={home.footer__container__2__course__list__number}>
                  <p className={home.footer__container__2__course__list__link}>
                    <i className={home.footer__icons_all}>
                      <BiPhone />
                      <a href="tel:0800 955 0054" className={home.text__a}>
                        0800 955 0054
                      </a>
                    </i>
                  </p>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <p className={home.footer__container__2__course__list__link}>
                    <i className={home.footer__icons_all}>
                      <CiMail />
                      <a
                        href="mailto:team@chelsford.com"
                        className={home.text__a}
                      >
                        team@chelsford.com
                      </a>
                    </i>
                  </p>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <p className={home.footer__container__2__course__list__link}>
                    <strong></strong>
                    <span className={home.footer__icons_all}>
                      <FaMapMarkerAlt />
                      31-32 Eastcastle Street, <br /> London W1W 8DL
                    </span>
                  </p>
                </li>
                <li className={home.footer__container__2__course__list__number}>
                  <p className={home.footer__container__2__course__list__link}>
                    <strong></strong>
                    <span className={home.footer__icons_all}>
                      <FaMapMarkerAlt />
                      31-32 Eastcastle Street, <br /> London W1W 8DL
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
