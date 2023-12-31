import Image from "next/image"
import styles from "../styles/page.module.css"
import Link from "next/link"
import footer from "../styles/footer1.jpg";
import logo from "../styles/logo1.png";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter,FiMail} from "react-icons/fi";
import {FaLinkedinIn,FaWhatsapp,FaPhone} from "react-icons/fa";
import {IoIosCall} from "react-icons/io";

export default function Footer() {
  return (
    <section className={styles.footer}>
    <Image
      src={footer}
      className={styles.ftimg}
      placeholder="blur"
      fill
      sizes="100%"
      alt="picture"
      style={{ objectFit: "cover", objectPosition: "center " }}
    />

    <Image
      priority={true}
      src={logo}
      className={styles.logo}
      alt="picture"
    />

    <div className={styles.ftc}>
      <div className={styles.ftc1}>
      <h1>Emerge <span className={styles.navno}>2</span>K<span className={styles.navno}>23</span></h1>
      </div>
      <div className={styles.ftc2}>
        <h2>Connect with Us</h2> 
        <div className={styles.ftsoc}>
          <Link href="https://instagram.com/srmvec_emerge2k23" target="_blank"><BsInstagram/><span>Instagram</span></Link>
          {/* <Link href="https://api.whatsapp.com/send?phone=+919345480054&text=Hi Magesh" target="_blank"><FaWhatsapp/><span>Whatsapp</span></Link> */}
          <Link href="mailto:emerge2k24eee@gmail.com" target="_blank"><FiMail/><span>Email</span></Link>
          <Link href="tel:+918124595576" target="_blank"><IoIosCall/><span>Phone</span></Link>
        </div>
      </div>
    </div>
    <div className={styles.ft}>
      <div className={styles.tag}>
      {/* <Link href="https://instagram.com/srmvec_emerge_2k24?igshid=MzRlODBiNWFlZA==">Instagram</Link><span>|</span>
        <Link href="#start">All Events</Link><span>|</span>
        <Link href="https://forms.gle/Bk7GtsVLp3V2onmK9">Register</Link> */}
         <Link href="https://instagram.com/magesh__m">@MageshMurugan</Link>

      </div>
    </div>
  </section>
  )
}
