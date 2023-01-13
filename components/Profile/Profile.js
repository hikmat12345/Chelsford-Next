import React from "react"
import dashboard from "../../styles/Dashboard.module.css"
import profile from "../images/profileIcon.svg"
import Image from "next/image"
import Link from "next/link"
import home from "../../styles/HomePage.module.css"

import profileimg from "../images/profileIcon.svg"
import booking from "../images/bookingGreyColor.svg"
import Paymentimg from "../images/paymentgreyicons.svg"

const Profile = () => {
  return (
    <div className={dashboard.main__section}>
      <div className={home.left__section}>
        <Link href="/profile">
          <div className={dashboard.left__section__heading}>
            <p className={dashboard.first__heading__div}>
              <Image src={profileimg} width="100%" height="100%" />
              Profile
            </p>
          </div>
        </Link>
        <div className={dashboard.left__section__heading}>
          <p className={dashboard.first__heading__div}>
            <Image src={booking} width="100%" height="100%" />
            Your Booking
          </p>
        </div>
        <Link href="/payment">
          <div className={dashboard.left__section__heading}>
            <p className={dashboard.first__heading__div}>
              <Image src={Paymentimg} width="100%" height="100%" />
              Payment
            </p>
          </div>
        </Link>
      </div>
      <div className={dashboard.right__section}>
        <div className={dashboard.right__section__div__sub}>
          <div className={dashboard.right__section__sub__div2}>
            <div className={dashboard.right__mini__div}>
              <div className={dashboard.right__top__heading}>
                <div className={dashboard.heading__main}>
                  <p className={dashboard.heading__text}>Profile</p>
                  <Image src={profile} height="auto" width="auto" />
                </div>
                <p className={dashboard.forget__pasword}>Change Password</p>
              </div>
              <div className={dashboard.input__fields}>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>First Name</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="test"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>Last Name</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="test"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={dashboard.input__fields}>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>Gender</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="Male"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>Date Of Birth</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="0001-01-01"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={dashboard.input__fields}>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>Mobile Number</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="+441231231231"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={dashboard.input__fields1}>
                  <div className={dashboard.input__fields__first}>
                    <div className={dashboard.input__field__part1}>
                      <p className={dashboard.para__text}>Email</p>
                      <div className={dashboard.input__field__part2}>
                        <div className={dashboard.input__field__part__second}>
                          <input
                            aria-invalid="false"
                            readonly=""
                            type="text"
                            className={dashboard.input__field__text}
                            value="teasgt@gmail.com"
                          ></input>
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

export default Profile
