"use client";

import { useEffect, useState } from "react";
import styles from "./main.css";
import Link from "next/link";

export default function Page(){
    const todayDate = new Date();
    const todayKey = new Date().toLocaleDateString("sv-SE");

    const [task,setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [completedCount, setCompletedCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const progressPercent = 
        totalCount === 0 ? 0 : ((completedCount / totalCount) * 100);

    const addTask = () => {
        if (!task.trim()) return;

        setTasks(prev => [...prev, { text: task }]);
        setTotalCount(prev => prev + 1);
        setTask("");
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        setTotalCount(prev => Math.max(prev - 1, 0));
    };

    const completeTask = (index) => {
        setCompletedCount(prev => prev + 1);

        setTimeout(() => {
            setTasks(prev => prev.filter((_, i) => i !== index));
        }, 300);
    };

    useEffect(() => {
        const savedDate = localStorage.getItem("lastDate");

    if (savedDate === todayKey) {
            setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
            setCompletedCount(Number(localStorage.getItem("completedCount")) || 0);
            setTotalCount(Number(localStorage.getItem("totalCount")) || 0);    
        } else {
            localStorage.setItem("lastDate", todayKey);
            localStorage.setItem("tasks", JSON.stringify([]));
            localStorage.setItem("completedCount", "0");
            localStorage.setItem("totalCount", "0");

            setTasks([]);
            setCompletedCount(0);
            setTotalCount(0);
        }
        
        setIsLoaded(true);
    }, [todayKey]);


    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("completedCount", completedCount.toString());
        localStorage.setItem("totalCount", totalCount.toString());
    }, [tasks, completedCount, totalCount, isLoaded]);

    return(
        <div>
            <div className="container-drop">
                <div className="margin-top">
                    <div className="container-shift">
                        <div className="calendar">
                            <span className="month">{todayDate.toLocaleString("id-ID", {month: "long"})}</span>
                            <span className="day">{todayDate.getDate()}</span>
                            <span className="year">{todayDate.getFullYear()}</span>
                        </div>
                        <div className="container-drop">
                            <div className="container-shift">
                                <div className="progress-container">
                                    <div className="progress-fill" style={{width: `${progressPercent}%`}}></div>
                                </div>
                                    <p className={`progress-text ${totalCount === 0 ? "empty" : ""}`}>
                                        {completedCount}/{totalCount} 🍅
                                    </p>

                            </div>
                            <input type ="text" placeholder="What's your today task?" value={task} onChange={(e)=> setTask(e.target.value)} className="fill-box"/>
                        </div>
                        <button disabled={!task.trim()} onClick={addTask} className="button-OK">OK</button>
                    </div>
                </div>
                
                <div className="base-wrapper"> 
                    <img src="/background.png" className="base"/>

                    {tasks.length === 0 && (
                        <p className="task-placeholder">Your tasks will appear here ! 🍅</p>
                    )}

                    <ul className="task-list"> 
                        {tasks.length=== 0 ? null : (
                            tasks.map((t, i) => (
                            <li key={i} className="task-item">
                                <img src="/tomat.png" className="button-tomato" aria-label="Complete task" onClick={()=> completeTask(i)}/>
                                <span>{t.text}</span>
                                <button className="button-X" onClick={() =>deleteTask(i)}> 
                                    <img src="/delete.png" alt="" /> 
                                </button>
                            </li>
                            ))
                        )} 
                    </ul>
                </div>

                <Link href="/">
                    <button className="button-back">Back</button>
                </Link> 
            </div>   
        </div>
    )
}