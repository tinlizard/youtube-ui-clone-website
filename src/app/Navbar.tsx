import Link from "next/link"

export default function Navbar(){
    interface NavItem {
        id: number,
        text: string,
    }

    const navbar: NavItem[] = [{id:0,text:"Home"},{id:1,text:"Trending"},{id:2,text:"Subscriptions"},{id:3,text:"Your Channel"}] 
    const hrefs: string[] = ["/","trending","subscriptions","channel"]

    const navItems = navbar.map((item,index) => <Link href={hrefs[index]} key={item.id}><li key={item.id}>{item.text}</li></Link>)

    return(
        <div className="navbar">
            <ul>
                {navItems}
            </ul>
        </div>
    )
}