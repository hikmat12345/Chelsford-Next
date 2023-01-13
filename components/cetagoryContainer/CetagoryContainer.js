import Image from "next/image"
import image from "../../components/images/image.png"
import home from "../../styles/HomePage.module.css"
import Link from "next/link"
const CetagoryContainer = () => {
  return (
    <div className={home.CetagoryContainer__main}>
      <div className={home.cetagoryContainer__row}>
        <div className={home.contentContainer}>
          <div className={home.headContenter}>
            <h2 className={home.headContenter__text}>Popular Courses</h2>
            <p className={home.headContenter__text2}>
              Our extensive range of courses are cleverly designed for you to
              achieve your goals. Some of the most in demand courses we offer.
            </p>
          </div>
          <div className={home.home_Feature}>
            <div role={home.listbox}>
              <div className={home.item}>
                <div className={home.custom__carosal__row}>
                  <div className={home.all__row}>
                    <div className={home.row__col}>
                      <Link className={home.Link} href="/services">
                        <div className={home.rom__img}>
                          <Image
                            className={home.row__images}
                            src={image}
                            width="100%"
                            height="auto"
                          />
                          <div className={home.content_box_feature}>
                            <span className={home.feature_title}>
                              Laser Practitioner Diploma VTCT
                            </span>
                            <span className={home.feature_price}>£3330</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={home.home_Feature2}>
            <div role={home.listbox}>
              <div className={home.item}>
                <div className={home.custom__carosal__row}>
                  <div className={home.all__row}>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                    <div className={home.row__col}>
                      <div className={home.rom__img}>
                        <Image
                          className={home.row__images}
                          src={image}
                          width="100%"
                          height="auto"
                        />
                        <div className={home.content_box_feature}>
                          <span className={home.feature_title}>
                            Laser Practitioner Diploma VTCT
                          </span>
                          <span className={home.feature_price}>£3330</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CetagoryContainer
