import Image from "next/image"
import home from "../../styles/HomePage.module.css"
import mainpic from "../../components/images/mainpic.png"
const PicContainer = () => {
  return (
    <div className={home.main__Image__Container}>
      <video
        autoPlay
        // controls
        loop
        src={"/Chelsford Institute – Beauty & Laser Training London.mp4"}
        style={{ width: "100%" }}
      />
      <div className={home.bannerContent2}>
        <div className={home.form__container}>
          <h2 className={home.form__heading}>Get in Touch</h2>
          <form action="" className={home.form__elements}>
            <div className={home.inputDiv}>
              <input
                className={home.form__inputs}
                type="text"
                placeholder="Name"
              />
              <input
                className={home.form__inputs}
                type="text"
                placeholder="Email"
              />
              <input
                className={home.form__inputs}
                type="number"
                placeholder="Number"
              />
              <input
                className={home.form__inputs}
                type="text"
                name="massage"
                id="massage"
                placeholder="Message"
              ></input>
            </div>
            <div className={home.send__msg__div}>
              <div className={home.send__button__div}>
                <span className={home.msg__text}>Send Massage</span>
                <button className={home.send__msg__btn}>
                  <span>→</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PicContainer
