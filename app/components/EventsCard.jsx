import React from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Link from "next/link"
import {IoLogoWhatsapp} from "react-icons/io";


const EventsCard= ({ content }) => {
  return (
    <div className={styles.body1}>
      
      <div className={styles.body1_image} style={{height: content.height,
  width:content.height}}>
        <Image
          src={content.img}
          placeholder="blur"
          fill
          // sizes="100%"
          alt="picture"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className={styles.body1_text}>
        <h1>{content.heading}</h1>
        <p>{content.paragraph}</p>
        <div className={styles.EventButton}>
        <Link href={content.tel} target="_blank"><span>Contact</span></Link>
        <Link href={content.whatsapp} target="_blank"><IoLogoWhatsapp className={styles.whatsapp}/> <span>Join</span></Link>

          
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
