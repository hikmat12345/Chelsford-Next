import React from "react"
import dashboard from "../../styles/Dashboard.module.css"
import profile from "../images/profileIcon.svg"
import booking from "../images/bookingGreyColor.svg"
import Payment from "../images/paymentgreyicons.svg"
import Image from "next/image"
import Link from "next/link"
const Dashboard = () => {
  return (
    <div className={dashboard.main__section}>
      <div className={dashboard.left__section}>
        <Link className={dashboard.nav__link} href="/profile">
          <div className={dashboard.left__section__heading}>
            <p className={dashboard.first__heading__div}>
              <Image src={profile} width="100%" height="100%" />
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
              <Image src={Payment} width="100%" height="100%" />
              Payment
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
