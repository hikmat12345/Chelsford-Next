import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../components/header/Header"
import PicContainer from "../components/picContainer/PicContainer"
import SubContainer from "../components/Sub/SubContainer"
import CetagoryContainer from "../components/cetagoryContainer/CetagoryContainer"
import VideoContainer from "../components/VideoContainer/VideoContainer"
import About from "../components/About/About"
import Footer from "../components/Footer/Footer"
export default function Home() {
  return (
    <div>
      <Header />
      <PicContainer />
      <SubContainer />
      <CetagoryContainer />
      <VideoContainer />
      <About />
      <Footer />
    </div>
  )
}
