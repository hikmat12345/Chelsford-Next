import Image from "next/image"
import myHeader from "../../components/images/Rectangle.png"
import cart from "../../components/images/cart-icon.png"
import phone from "../../components/images/phone.png"
import Link from "next/link"
import home from "../../styles/HomePage.module.css"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
import { FcPhone } from "react-icons/fc"
function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className={home.modal__backdrop}
      onClick={() => {
        // close modal when outside of modal is clicked
        close()
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation()
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
    </div>
  ) : null
}
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)
  const [toggle5, setToggle5] = useState(false)
  const [toggle6, setToggle6] = useState(false)

  return (
    <div className={home.header__main}>
      <div className={home.header__img}>
        <Image
          className={home.header__logo}
          src={myHeader}
          alt="header logo"
          width="314.1px"
          height="91.89px"
        />
      </div>
      <div className={home.short_tab}>
        <div className={home.courses__tab__container}>
          <div className={home.courses__tab}>
            <button onClick={() => setToggle3(!toggle3)}>
              <span className={home.short__heading}>Courses</span>
            </button>
          </div>
          <div className={home.portal__tab}>
            <a href="/" className={home.portal__nav__link}>
              <span className={home.portal__short__heading}>Portal</span>
            </a>
          </div>
        </div>
      </div>
      <button
        className={home.short_tab_line_button}
        onClick={() => setToggle(!toggle)}
      >
        <div className={home.short_tab_button}>
          <span className={home.shot_tab_span}>
            <i>
              <FaBars />
            </i>
          </span>
        </div>
      </button>
      {toggle && (
        <div id="myDiv" className={home.short_tab_expand}>
          <ul className={home.short_tab_ul}>
            <li className={home.short_tab_li}>
              <a className={home.short_a_li} href="/about">
                About
              </a>
            </li>
            <li className={home.short_tab_li}>
              <a className={home.short_a_li} href="/contact-us">
                Contact
              </a>
            </li>
          </ul>
          <ul className={home.short_tab_ul}>
            <li className={home.short_tab_li}>
              <a className={home.short_a_li} href="tel:0800 955 0054">
                <i className={home.short__i__phone}>
                  <FcPhone />
                  0800 955 0054
                </i>
              </a>
            </li>
            <li className={home.short_tab_li}>
              <a
                className={home.short_a_li}
                href="https://chelsford.com/login/student"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <div className={home.sub__headers}>
          <button className={home.portal__button}>Portal</button>
          <Image
            className={home.cart__img}
            src={cart}
            alt="header logo"
            width="19px"
            height="17.01px"
            Top="-0.05px"
          />
        </div>
        <ul className={home.hover__div}>
          {toggle1 && (
            <div className={home.hover__container}>
              <div className={home.hover__row}>
                <div className={home.hover__colomn}>
                  <h3 className={home.hover__heading}>Laser</h3>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/laser-practitioner-diploma-vtct"
                    >
                      Laser Practitioner Diploma VTCT
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-4-laser-and-ipl-treatments"
                    >
                      VTCT Level 4 Laser &amp; IPL Treatments
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/level-4-laser-and-blemish-removal"
                    >
                      Level 4 Laser &amp; Blemish Removal
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/level-5-laser-tattoo-removal"
                    >
                      Level 5 Laser Tattoo Removal
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/laser-core-of-knowledge"
                    >
                      Laser Core of Knowledge
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/advanced-laser-diploma"
                    >
                      Advanced Laser Diploma
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/fat-freeze-and-body-sculpting"
                    >
                      Fat Freeze &amp; Body Sculpting
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/level-4-laser-hair-removal"
                    >
                      Level 4 Laser Hair Removal
                    </a>
                  </li>
                </div>
                <div className={home.hover__colomn}>
                  <h3 className={home.hover__heading}>Beauty</h3>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-2-and-3-nvq-beauty-therapy"
                    >
                      VTCT Level 2 &amp; 3 NVQ Beauty Therapy
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-2-nvq-beauty-therapy"
                    >
                      VTCT Level 2 NVQ Beauty Therapy
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-3-nvq-beauty-therapy"
                    >
                      VTCT Level 3 NVQ Beauty Therapy
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/fast-track-vtct-level-3-nvq-beauty-therapy"
                    >
                      Fast Track VTCT Level 3 NVQ Beauty Therapy
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-2-3-and-4-nvq-beauty-and-laser"
                    >
                      VTCT Level 2, 3 &amp; 4 NVQ Beauty &amp; Laser
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-2-award-facial-and-skincare"
                    >
                      VTCT Level 2 Award Facial &amp; Skincare
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-3-facial-electrotherapy"
                    >
                      VTCT Level 3 Facial Electrotherapy
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-4-skin-blemish-removal"
                    >
                      VTCT Level 4 Skin Blemish Removal
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/level-3-anatomy-and-physiology-vtct"
                    >
                      Level 3 Anatomy &amp; Physiology VTCT
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/vtct-level-3-in-epilation"
                    >
                      VTCT Level 3 in Epilation
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/cpd-advanced-chemical-peels"
                    >
                      CPD Advanced Chemical Peels
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/cpd-microneedling-diploma"
                    >
                      CPD Microneedling Diploma
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/cpd-advanced-plasma-fibroblast"
                    >
                      CPD Advanced Plasma Fibroblast
                    </a>
                  </li>
                </div>
                <div className={home.hover__colomn}>
                  <h3 className={home.hover__heading}>Medical</h3>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/medical-aesthetics-diploma"
                    >
                      Medical Aesthetics Diploma
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/foundation-botox-and-dermal-fillers"
                    >
                      Foundation Botox &amp; Dermal Fillers
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/advanced-botox-and-dermal-fillers"
                    >
                      Advanced Botox &amp; Dermal Fillers
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/advanced-dermal-fillers"
                    >
                      Advanced Dermal Fillers
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/prp-advanced-treatments"
                    >
                      PRP Advanced Treatments
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/intimate-laser-rejuvenation"
                    >
                      Intimate Laser Rejuvenation
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/laser-skin-resurfacing"
                    >
                      Laser Skin Resurfacing
                    </a>
                  </li>
                  <h3 className={home.hover__heading}>Online</h3>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/laser-core-of-knowledge"
                    >
                      Laser Core of Knowledge
                    </a>
                  </li>
                  <li className={home.hover__item}>
                    <a
                      className={home.hover__linka}
                      href="https://chelsford.com/course/level-3-anatomy-and-physiology-vtct"
                    >
                      Level 3 Anatomy &amp; Physiology VTCT
                    </a>
                  </li>
                </div>

                <div className={home.hover__colomn}>
                  <img
                    src="https://chelsford.com/public/homeImages/chelsford home icons-09.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          )}
        </ul>
        {toggle3 && (
          <div className={home.mobile__navbar}>
            <div className={home.mobile_navbar_container}>
              <div className={home.mobile_navbar_row}>
                <div className={home.mobile_navbar_button__section}>
                  <button onClick={() => setToggle2(!toggle2)}>
                    <a
                      className={home.navBar2_buttons}
                      href="#"
                      id="laserBtnTab"
                      data-toggle="collapse"
                      data-target=".dropdown-laser-menu-mobile"
                      aria-expanded="true"
                    >
                      Laser
                    </a>
                  </button>
                  <button onClick={() => setToggle4(!toggle4)}>
                    <a
                      className={home.navBar2_buttons}
                      href="#"
                      id="beautyBtnTab"
                      data-toggle="collapse"
                      data-target=".dropdown-laser-menu-mobile"
                      aria-expanded="true"
                    >
                      Beauty
                    </a>
                  </button>
                  <button onClick={() => setToggle5(!toggle5)}>
                    <a
                      className={home.navBar2_buttons}
                      href="#"
                      id="medicalBtnTab"
                      data-toggle="collapse"
                      data-target=".dropdown-laser-menu-mobile"
                      aria-expanded="true"
                    >
                      Medical
                    </a>
                  </button>
                  <button onClick={() => setToggle6(!toggle6)}>
                    <a
                      className={home.navBar2_buttons}
                      href="#"
                      id="medicalBtnTab"
                      data-toggle="collapse"
                      data-target=".dropdown-laser-menu-mobile"
                      aria-expanded="true"
                    >
                      Online
                    </a>
                  </button>
                </div>
                <div className={home.mobile_navbar_column}>
                  {toggle2 && (
                    <ul className={home.dropdown_laser_menu_mob_ul}>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/laser-practitioner-diploma-vtct"
                        >
                          Laser Practitioner Diploma VTCT
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-4-laser-and-ipl-treatments"
                        >
                          VTCT Level 4 Laser &amp; IPL Treatments
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/level-4-laser-and-blemish-removal"
                        >
                          Level 4 Laser &amp; Blemish Removal
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/level-5-laser-tattoo-removal"
                        >
                          Level 5 Laser Tattoo Removal
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/laser-core-of-knowledge"
                        >
                          Laser Core of Knowledge
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/advanced-laser-diploma"
                        >
                          Advanced Laser Diploma
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/fat-freeze-and-body-sculpting"
                        >
                          Fat Freeze &amp; Body Sculpting
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/level-4-laser-hair-removal"
                        >
                          Level 4 Laser Hair Removal
                        </a>
                      </li>
                    </ul>
                  )}
                  {toggle4 && (
                    <ul className={home.dropdown_laser_menu_mob_ul}>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-2-and-3-nvq-beauty-therapy"
                        >
                          VTCT Level 2 &amp; 3 NVQ Beauty Therapy
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-2-nvq-beauty-therapy"
                        >
                          VTCT Level 2 NVQ Beauty Therapy
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-3-nvq-beauty-therapy"
                        >
                          VTCT Level 3 NVQ Beauty Therapy
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/fast-track-vtct-level-3-nvq-beauty-therapy"
                        >
                          Fast Track VTCT Level 3 NVQ Beauty Therapy
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-2-3-and-4-nvq-beauty-and-laser"
                        >
                          VTCT Level 2, 3 &amp; 4 NVQ Beauty &amp; Laser
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-2-award-facial-and-skincare"
                        >
                          VTCT Level 2 Award Facial &amp; Skincare
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-3-facial-electrotherapy"
                        >
                          VTCT Level 3 Facial Electrotherapy
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-4-skin-blemish-removal"
                        >
                          VTCT Level 4 Skin Blemish Removal
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/level-3-anatomy-and-physiology-vtct"
                        >
                          Level 3 Anatomy &amp; Physiology VTCT
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/vtct-level-3-in-epilation"
                        >
                          VTCT Level 3 in Epilation
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/cpd-advanced-chemical-peels"
                        >
                          CPD Advanced Chemical Peels
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/cpd-microneedling-diploma"
                        >
                          CPD Microneedling Diploma
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/cpd-advanced-plasma-fibroblast"
                        >
                          CPD Advanced Plasma Fibroblast
                        </a>
                      </li>
                    </ul>
                  )}
                  {toggle5 && (
                    <ul className={home.dropdown_laser_menu_mob_ul}>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/medical-aesthetics-diploma"
                        >
                          Medical Aesthetics Diploma
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/foundation-botox-and-dermal-fillers"
                        >
                          Foundation Botox &amp; Dermal Fillers
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/advanced-botox-and-dermal-fillers"
                        >
                          Advanced Botox &amp; Dermal Fillers
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/advanced-dermal-fillers"
                        >
                          Advanced Dermal Fillers
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/prp-advanced-treatments"
                        >
                          PRP Advanced Treatments
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/intimate-laser-rejuvenation"
                        >
                          Intimate Laser Rejuvenation
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/fat-freeze-and-body-sculpting"
                        >
                          Fat Freeze &amp; Body Sculpting
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/laser-skin-resurfacing"
                        >
                          Laser Skin Resurfacing
                        </a>
                      </li>
                    </ul>
                  )}
                  {toggle6 && (
                    <ul className={home.dropdown_laser_menu_mob_ul}>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/laser-core-of-knowledge"
                        >
                          Laser Core of Knowledge
                        </a>
                      </li>
                      <li className={home.custom_mob_nav_sub_item}>
                        <a
                          className={home.custom_mob_nav_link}
                          href="https://chelsford.com/course/level-3-anatomy-and-physiology-vtct"
                        >
                          Level 3 Anatomy &amp; Physiology VTCT
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={home.sub__header2}>
          <ul className={home.navbar}>
            <button onClick={() => setToggle1(!toggle1)}>
              <Link legacyBehavior href="/">
                <a className={home.courses__text1}>Courses</a>
              </Link>
            </button>
            <div className={home.navbar__web}>
              <Link legacyBehavior href="/about-us">
                <a className={home.courses__text}>About Us</a>
              </Link>
              <Link legacyBehavior href="/contact-us">
                <a className={home.courses__text}>Contact</a>
              </Link>
              <Link legacyBehavior href="/listing">
                <a className={home.courses__text}>Models</a>
              </Link>
            </div>
            <div className={home.phone__logo__No}>
              <Image
                className={home.phone__logo}
                src={phone}
                alt="header logo"
                width="15.99px"
                height="15.99px"
              />
              <p className={home.phone__no}>0800 955 0054</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
