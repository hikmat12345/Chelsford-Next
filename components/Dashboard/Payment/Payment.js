import React from "react"
import dashboard from "../../../styles/Dashboard.module.css"
import Image from "next/image"
import Card from "../../images/Capturecard.PNG"
import Link from "next/link"

import profile from "../../images/profileIcon.svg"
import booking from "../../images/bookingGreyColor.svg"
import Paymentimg from "../../images/paymentgreyicons.svg"

import Dashboard from "../Dashboard"

const Payment = () => {
  return (
    <div className={dashboard.main__section}>
      <div className={dashboard.left__section}>
        <Link href="/profile">
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
              <Image src={Paymentimg} width="100%" height="100%" />
              Payment
            </p>
          </div>
        </Link>
      </div>
      <div className={dashboard.payment__maindiv}>
        <div className={dashboard.payment__sub__div}>
          <div className={dashboard.payment__sub__sub__div}>
            <div className={dashboard.payment__card__div}>
              <Image src={Card} className={dashboard.cardImage} />
            </div>
            <div className={dashboard.form__main__div}>
              <p className={dashboard.card__heading}>Credit Card</p>
              <div>
                <div className={dashboard.input__label}>Card Number</div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  className={dashboard.card__input}
                  required=""
                />
                <div className={dashboard.input__label}>Card Holder</div>
                <input
                  type="text"
                  name="name"
                  placeholder="Card Holder"
                  className={dashboard.card__input}
                  // required=""
                ></input>
                <div className={dashboard.input__label}>Expiry Month/Year</div>
                <input
                  type="month"
                  name="expiry"
                  placeholder="Expiry Month/Year"
                  className={dashboard.card__input}
                  required=""
                  min="2023-01"
                  max="2030-05"
                />
                <div className={dashboard.input__label}>CVC</div>
                <input
                  type="number"
                  name="cvc"
                  placeholder="CVC"
                  className={dashboard.card__input}
                  required=""
                  minlength="4"
                  maxlength="4"
                />
              </div>
              <br />
              <p className={dashboard.card__heading}>Biling Address</p>
              <div>
                <div className={dashboard.input__label}>Address</div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className={dashboard.card__input}
                />
                <div className={dashboard.input__label}>Address line 2</div>
                <input
                  type="text"
                  name="address_line"
                  placeholder="Address Line 2"
                  className={dashboard.card__input}
                />
                <div className={dashboard.input__label}>City</div>
                <input
                  type="text"
                  name="address_line"
                  placeholder="City"
                  className={dashboard.card__input}
                />
                <div className={dashboard.input__label}>State</div>
                <input
                  type="text"
                  name="address_line"
                  placeholder="State"
                  className={dashboard.card__input}
                />
                <div className={dashboard.input__label}>Country</div>
                <input
                  type="text"
                  name="address_line"
                  placeholder="Country"
                  className={dashboard.card__input}
                />
                <div className={dashboard.input__label}>Postal Code</div>
                <input
                  type="text"
                  name="address_line"
                  placeholder="Postal Code"
                  className={dashboard.card__input}
                />
              </div>

              <button className={dashboard.add__to__cart__button}>
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
