"use client"

import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();

    return(
        <div className="container">
            <img src="info.png" alt="info" width={250} height={200}></img>
            <button onClick={()=> router.push("/")}>Back</button>
        </div>
    )
}