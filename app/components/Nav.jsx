"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import styles from "../styles/page.module.css";
import Link from "next/link";

const Nav = () => {
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

export default Nav;
