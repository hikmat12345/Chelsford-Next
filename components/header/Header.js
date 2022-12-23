import Image from "next/image"
import myHeader from "../../components/images/Rectangle.png"
import cart from "../../components/images/cart-icon.png"
import phone from "../../components/images/phone.png"
import Link from "next/link"
import home from "../../styles/HomePage.module.css"
const Header = () => {
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
            <a href="" className={home.nav__link}>
              <span className={home.short__heading}>Courses</span>
            </a>
          </div>
          <div className={home.portal__tab}>
            <a href="/" className={home.portal__nav__link}>
              <span className={home.portal__short__heading}>Portal</span>
            </a>
          </div>
        </div>
      </div>
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
        </ul>
        <div className={home.sub__header2}>
          <ul className={home.navbar}>
            <Link legacyBehavior href="/">
              <a className={home.courses__text1}>Courses</a>
            </Link>

            <Link legacyBehavior href="/about-us">
              <a className={home.courses__text}>About Us</a>
            </Link>
            <Link legacyBehavior href="/contact-us">
              <a className={home.courses__text}>Contact</a>
            </Link>
            <Link legacyBehavior href="/listing">
              <a className={home.courses__text}>Models</a>
            </Link>
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
