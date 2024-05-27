"use client"
import { useState } from "react"

export default function Searchbar(){    
    const [input,setInput] = useState("Search...")

    return(
        <div className="search-container-top">
            <div className="yap-tube-icon">
                <h1>YapTube</h1>
            </div>
            <div className="search-container">
                <div className="searchbar">
                    <div className="searchbar-input-div">
                        <input type="text" value={input} onFocus={()=>setInput("")} onChange={(e)=>setInput(e.target.value)}></input>
                    </div>
                    <div className="searchbar-button-div">
                        <button>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}