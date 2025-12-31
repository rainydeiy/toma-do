"use client";
import { useState } from "react";
import styles from "./main.css";
import Link from "next/link";

export default function Page(){
    const today = new Date();

    return(
        <div>
            <div className="container4">
                <div className="container3">
                    <div className="calendar">
                        <span className="month">{today.toLocaleString("id-ID", {month: "long"})}</span>
                        <span className="day">{today.getDate()}</span>
                        <span className="year">{today.getFullYear()}</span>
                    </div>
                    <div className="container4">
                        <div className="progress-container"></div>
                        <input type ="text" placeholder="What's your today task?" className="write-box"/>
                        <img src="/tomat 2.png" className="pencet-tomat"/>
                    </div>
                </div>
                    <img src="/base.png" className="base"/>


                
                <Link href="/">
                    <button className="button2">Back</button>
                </Link> 
            </div>
            
            <div className="barisan-tomat">
                <img src="/tomat 2.png" className="pencetan-tomat"/>
                <img src="/tomat 2.png" className="pencetan-tomat"/>
                <img src="/tomat 2.png" className="pencetan-tomat"/>
                <img src="/tomat 2.png" className="pencetan-tomat"/>
                <img src="/tomat 2.png" className="pencetan-tomat"/>    
            </div>    
        </div>
    )
}