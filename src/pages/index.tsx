import { Link } from "react-router-dom"
import labLogo from "../assets/lab-logo.jpg"
import angelLogo from "../assets/angel-logo.jpg"
import polemoLogo from "../assets/polemo-logo.jpg"
import { title } from "../App"
import './index.css'
import { useEffect } from "react"
import bodyClass from "../utils/bodyclass"
import pageTitle from "../utils/pageTitle"

export function Index() {
    
    useEffect(pageTitle(title), [])
    useEffect(bodyClass("index-body"), [])

    return (
        <div className="page-contents index-page">
            <div className="index-heading">
                <h1>warma 游戏移植屋
                    <br/>
                    <span className="index-author">by qwqVictor</span>
                </h1>
                
            </div><br/>
            <div className="index-container">
                <section>
                    <a href="/lab/index.html">
                        <img src={labLogo} alt="实验楼"></img>
                    </a>
                </section>
                <section>
                    <Link to="angel">
                        <img src={angelLogo} alt="最开始成为天使的时候"></img>
                    </Link>
                </section>
                <section>
                    <Link to="polemo">
                        <img src={polemoLogo} alt="柚子柚子"></img>
                    </Link>
                </section>
            </div>
        </div>
    )
}