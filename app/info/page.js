"use client"

import styles from "./info.css";
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();

    return(
        <div className="container">
            <img src="info.png" alt="More information on how to use the app" width={250} height={200}></img>
            <button onClick={()=> router.push("/")}>Back</button>
        </div>
    )
}