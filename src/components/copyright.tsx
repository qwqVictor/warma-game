import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { title } from "../App"
import "./copyright.css"

export function Copyright() {
    const location = useLocation()
    const [isHomePage, setIsHomePage] = useState<boolean>(location.pathname === '/')
    useEffect(() => {
        setIsHomePage(location.pathname === '/')
    }, [location]);

    return (
        <footer className="copyright">
            <p className="copyright-text">
                <Link to="/" style={{visibility: isHomePage ? "hidden" : "visible"}}>返回首页</Link><br />
                <span>游戏版权为 <a href="https://space.bilibili.com/53456">warma</a> 所有，已取得授权。</span>
                <br/>
                <span>&copy; {new Date().getFullYear()} <a href="https://qwq.ren">qwqVictor</a></span>
            </p>
        </footer>
        
    )
}