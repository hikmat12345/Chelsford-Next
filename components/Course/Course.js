import React from "react"
import course from "../../styles/Course.module.css"
import { useState, useEffect, useRef } from "react"
import { HiOutlineArrowPath } from "react-icons/hi2"
const Course = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <section className={course.main__section}>
      <div className={course.main__container}>
        <h4 className={course.main__heading}>Course Modules</h4>
        <div className={course.main__row}>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>1</span>
              </div>
              <p className={course.para__p}>Level 2 Infection Control</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>2</span>
              </div>
              <p className={course.para__p}>Client Communication</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>3</span>
              </div>
              <p className={course.para__p}>Facial Massage & Skincare</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>4</span>
              </div>
              <p className={course.para__p}>Facials Electrics</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>5</span>
              </div>
              <p className={course.para__p}>Body Electrics</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>6</span>
              </div>
              <p className={course.para__p}>Electrolysis</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>7</span>
              </div>
              <p className={course.para__p}>Body Massage</p>
            </div>
          </div>
          <div className={course.box__div}>
            <div className={course.course_module_label}>
              <div className={course.span__div}>
                <span className={course.span__no}>8</span>
              </div>
              <p className={course.para__p}>Skin Tightening</p>
            </div>
          </div>
        </div>
        {toggle && (
          <div className={course.main__row}>
            <div className={course.box__div}>
              <div className={course.course_module_label}>
                <div className={course.span__div}>
                  <span className={course.span__no}>9</span>
                </div>
                <p className={course.para__p}>Indian Head Massage</p>
              </div>
            </div>
            <div className={course.box__div}>
              <div className={course.course_module_label}>
                <div className={course.span__div}>
                  <span className={course.span__no}>10</span>
                </div>
                <p className={course.para__p}>Core of Knowledge</p>
              </div>
            </div>

            <div className={course.box__div}>
              <div className={course.course_module_label}>
                <div className={course.span__div}>
                  <span className={course.span__no}>11</span>
                </div>
                <p className={course.para__p}>Fitzpatrick Skin Type</p>
              </div>
            </div>
            <div className={course.box__div}>
              <div className={course.course_module_label}>
                <div className={course.span__div}>
                  <span className={course.span__no}>12</span>
                </div>
                <p className={course.para__p}>Hazards and Safety</p>
              </div>
            </div>
          </div>
        )}

        <div className={course.button__div}>
          <div className={course.button__div2}>
            <button
              className={course.button__upDown}
              onClick={() => setToggle(!toggle)}
            >
              <HiOutlineArrowPath />
            </button>
          </div>
        </div>
      </div>
      <div className={course.open__close__div}></div>
    </section>
  )
}

export default Course
