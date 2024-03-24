"use client"
import { useState } from "react"

export default function Searchbar(){
    const [input,setInput] = useState()

    return(
        <div className="searchbar">
            <input type="text" defaultValue="Search..."></input>
            <button>Upload</button>
        </div>
    )
}