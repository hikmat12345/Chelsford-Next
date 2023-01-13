import React from "react"
import info from "../../styles/Info.module.css"
const Info = () => {
  return (
    <section className={info.main__section}>
      <div className={info.container__fluid}>
        <div className={info.main__row}>
          <div className={info.heading__section}>
            <h2 className={info.heading__text}>Course Information</h2>
            <p className={info.para__text}>
              In this course, you'll learn a variety of new skills that will
              help launch you into a rewarding career. Have a look at the course
              information to get an idea of what we’ll cover:
            </p>
          </div>
          <div className={info.extra__space}></div>
        </div>
        <div className={info.sub__div2}></div>
        <div className={info.secont__row}>
          <div className={info.sub__row}>
            <ul className={info.ul__list}>
              <li>
                <button className={info.tablinks}>Course Details</button>
              </li>
              <li>
                <button className={info.tablinks}>Entry Requirements</button>
              </li>
              <li>
                <button className={info.tablinks}>Teaching/Assessments</button>
              </li>
              <li>
                <button className={info.tablinks}>Resources</button>
              </li>
              <li>
                <button className={info.tablinks}>Study Options</button>
              </li>
            </ul>
          </div>
          <div className={info.course__table__div}>
            <div className={info.course__content__div}>
              <p>
                <strong>PART 1 – LEVEL 2 BEAUTY THERAPY</strong>Underpinning
                this qualification you will develop a sound knowledge of health
                and safety practices in a salon environment and how to promote
                client care and communications in beauty related industries. You
                will also develop an underpinning knowledge and understanding of
                the practical skills learned throughout this qualification. The
                purpose of this qualification is to develop your skills in
                beauty therapy to a high level of occupational ability, to
                enable you to perform your own salon services. Units in this
                qualification have been mapped to the relevant NOS (where
                applicable). This qualification is regulated on the Regulated
                Qualifications Framework. This qualification is approved and
                supported by the Hairdressing and Beauty Industry Authority
                (HABIA), the standard setting body for hair, beauty, nails and
                spa qualifications. <br />
                <br />
                <strong>
                  PART 2 - LEVEL 3 BEAUTY THERAPY (GENERAL ROUTE)
                </strong>{" "}
                <br />
                The VTCT Level 3 Beauty Therapy is a qualification that has been
                specifically designed to develop your practical skills in; how
                to provide face and body electrical treatments, Massage, Indian
                head, Peblended Oils, Epilation. Underpinning this qualification
                you will develop a sound knowledge of health and safety practice
                in a salon environment, how to promote client care and
                communication in beauty related industries, . You will also
                develop an underpinning knowledge and understanding of the
                practical skills learned throughout this qualification. The
                purpose of this qualification is to develop your skills in
                beauty therapy to a high level of occupational ability, to
                enable you to perform your own salon services. Units in this
                qualification have been mapped to the relevant NOS (where
                applicable). This qualification is regulated on the Regulated
                Qualifications Framework. This qualification is approved and
                supported by the Hairdressing and Beauty Industry Authority
                (HABIA), the standard setting body for hair, beauty, nails and
                spa qualifications.
                <br />
                <br />
                <strong> PART 3 - LEVEL 4 LASER &amp; LIGHT</strong>
                <br />
                This is a vocationally related qualification and is focused on
                reducing hair growth and photo rejuvenation of the skin using
                intense light and laser treatments. In this qualification, you
                will develop an understanding of managing safe working practices
                and how to identify and control hazards. You will also learn how
                to identify hair and skin conditions and those clients suitable
                for intense light and laser system treatments. This
                qualification has been mapped to the relevant NOS, and is
                accredited on the Qualifications and Credit Framework (QCF). The
                course will cover both theory and practice, which will be
                delivered by experienced Laser/IPL technicians.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
