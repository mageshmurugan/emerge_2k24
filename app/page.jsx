import styles from "./styles/page.module.css";
// import Homediv from "./components/Homediv";
// import { headerContent } from "./Components/Contents";
import Header from "./components/Header";
import Events from "./components/Events";
import Link from "next/link";

import Footer from "./components/Footer";
import bg from "./styles/header1.jpg";


export default function Home() {

  const headerContent=(<div className={styles.center}>
    <h1>Emerge <span className={styles.navno}>2</span>K<span className={styles.navno}>24</span></h1>
    {/* <q>Wired for Innovation: Sparks of Tomorrow</q> */}
    <span>Last Date of Registration : 11/10/2023</span>
    <button><Link href="https://forms.gle/Bk7GtsVLp3V2onmK9" target="_blank">Register</Link></button>
  </div>)

  return (
    <>
        <Header content={headerContent} img={bg} />
        <Events/>
      <Footer/>

    </>
  );
}
