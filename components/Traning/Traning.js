import React from "react"
import traning from "../../styles/Traning.module.css"
import Link from "next/link"
const Traning = () => {
  return (
    <div className={traning.main__div}>
      <div className={traning.sub__div}>
        <div className={traning.heading__div}>
          <div className={traning.sub__heading__div}>
            <p className={traning.heading__text}>Taning Dates</p>
          </div>
        </div>
        <Link className={traning.Link} href="/dashboard">
          <div className={traning.main__section}>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>From</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>Mon,30 Jan 2023</p>
              </div>
            </div>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>To</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>Tue,31 Jan 2023</p>
              </div>
            </div>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>Time</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>10:00AM- 5:00PM</p>
              </div>
            </div>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>Price</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>£650</p>
              </div>
            </div>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>Remaing Seats</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>6</p>
              </div>
            </div>
            <div className={traning.main__section__part1}>
              <div>
                <p className={traning.part1__text}>Details</p>
              </div>
              <div className={traning.section__end__part}>
                <p className={traning.part1__text2}>
                  2 Days Course. Qualification code: 600/4910/8 Credit Value:
                  10. Pre-requisites Level 3 Beauty Therapy.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className={traning.main__section}>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>From</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>Mon,30 Jan 2023</p>
            </div>
          </div>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>To</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>Tue,31 Jan 2023</p>
            </div>
          </div>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>Time</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>10:00AM- 5:00PM</p>
            </div>
          </div>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>Price</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>£650</p>
            </div>
          </div>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>Remaing Seats</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>6</p>
            </div>
          </div>
          <div className={traning.main__section__part1}>
            <div>
              <p className={traning.part1__text}>Details</p>
            </div>
            <div className={traning.section__end__part}>
              <p className={traning.part1__text2}>
                2 Days Course. Qualification code: 600/4910/8 Credit Value: 10.
                Pre-requisites Level 3 Beauty Therapy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Traning
