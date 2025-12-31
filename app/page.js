"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
   
    return(
        <div className="container"> 
            <h1 style={{fontSize: "55px", fontStyle: "bold"}}>Toma-Do!</h1>
            <img src="tomat 2.png" alt="Tomat" width={250} height={200}></img>
            <button onClick={()=> router.push("/main")}>Start</button>

            <nav className="container2">
                <Link href="/info" className="navbar">Info</Link>
                <Link href="https://instagram.com/ayeshnabiha" className="navbar">Contact</Link>
            </nav>
        </div>
    );
}