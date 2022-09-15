import angelWhite from "../assets/angel-white.png"
import angelBanner from "../assets/angel-banner.png"
import './angel.css'
import { title } from "../App"
import bodyClass from "../utils/bodyclass"
import { useEffect, useState } from "react"
import pageTitle from "../utils/pageTitle"
import { DownloadList } from "../components/downloadlist"
import { DownloadItem, DownloadObj } from "../types/downloadObj"
import axios from "axios"

export function Angel() {
    useEffect(bodyClass("angel-body"), [])
    useEffect(pageTitle("最开始成为天使的时候 - " + title), [])

    const [version, setVersion] = useState<string>("")
    const [item, setItems] = useState<DownloadItem[]>([])
        useEffect(() => {
            (async () => {
                try {
                    const { data }: { data: DownloadObj } = await axios("/data/angel.json" + `?rnd=${Math.random()}`)
                    setVersion(data.version)
                    setItems(data.items)
                } catch(e) {
                    alert("网络请求出错!\n" + e)
                }
            })()
        }, [])

    return (
        <div className="page-contents angel-page">
            <div className="angel-header">
                <h1>
                    <img src={angelWhite} alt="logo"></img>
                    <br/>
                    <img src={angelBanner} alt="最开始成为天使的时候"></img>
                </h1>
                <p>一个关于天使和遗忘的故事</p>
                <p>{version}</p>
            </div>

            <div className="angel-container">
                <hr />
                
                <p>获取:</p>
                <DownloadList className="angel-download" items={item} />
                <hr/>
                
            </div>
        </div>
    )
}