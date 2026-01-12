"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    const router = useRouter();
   
    return(
        <div className={styles.container}> 
            <p className={styles.title}>Toma-Do!</p>
            <img src="tomat.png" alt="Big Tomato" width={250} height={200}></img>
            <button className={styles.button} onClick={()=> router.push("/main")}>Start</button>

            <nav className={styles.footnote}>
                <Link href="/info" className={styles.navbar}>Info</Link>
                <Link href="https://instagram.com/ayeshnabiha" className={styles.navbar}>Contact</Link>
            </nav>
        </div>
    );
}