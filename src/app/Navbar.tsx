"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){
    const [isNavVisible,setIsNavVisible] = useState(false)
    interface NavItem {
        id: number,
        text: string,
    }

    const navbar: NavItem[] = [{id:0,text:"Home"},{id:1,text:"Trending"},{id:2,text:"Subscriptions"},{id:3,text:"Your Channel"}] 
    const hrefs: string[] = ["/","trending","subscriptions","channel"]

    const navItems = navbar.map((item,index) => <Link href={hrefs[index]} key={item.id}><li key={item.id}>{item.text}</li></Link>)

    if (isNavVisible){
        return(
            <>
                <div className="navbar">
                    <ul>
                        <li>
                            <div className="visibility-button">
                                <button onClick={()=>setIsNavVisible(!isNavVisible)}>Toggle visible</button>
                            </div>
                        </li>
                        {navItems}
                    </ul>
                </div>
            </>
        )
    }
    else{
        return(
            <div className="visibility-button">
                <button onClick={()=>setIsNavVisible(!isNavVisible)}>Toggle visible</button>
            </div>
        )
    }
}