"use client";

import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import styles from "../styles/page.module.css";
import Link from "next/link";

const Poster = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <>
        <HiMenu onClick={() => setOpen(true)} className={styles.navb} />
      </>
      {open && (
        <div className={styles.navc} onClick={() => setOpen(false)}>
            <div>
                <RxCross2 onClick={() => setOpen(false)} className={styles.navb} />
            </div>
          <div className={styles.navca}>
            <Link href="#start">All Events</Link>
            <Link href="https://instagram.com/srmvec_emerge_2k24?igshid=MzRlODBiNWFlZA==">Instagram</Link>
            <Link href="https://forms.gle/Bk7GtsVLp3V2onmK9">Register</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Poster;
