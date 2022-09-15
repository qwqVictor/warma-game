import './polemo.css'
import polemoIcon from "../assets/polemo-icon.png"
import { title } from "../App"
import bodyClass from "../utils/bodyclass"
import { useEffect, useState } from "react"
import pageTitle from "../utils/pageTitle"
import { DownloadItem, DownloadObj } from "../types/downloadObj"
import axios from "axios"
import { DownloadList } from "../components/downloadlist"

export function Polemo() {
    useEffect(bodyClass("polemo-body"), [])
    useEffect(pageTitle("柚子柚子 - " + title), [])

    const [version, setVersion] = useState<string>("")
    const [item, setItems] = useState<DownloadItem[]>([])
    useEffect(() => {
        (async () => {
            try {
                const { data }: { data: DownloadObj } = await axios("/data/polemo.json" + `?rnd=${Math.random()}`)
                setVersion(data.version)
                setItems(data.items)
            } catch (e) {
                alert("网络请求出错!\n" + e)
            }
        })()
    }, [])

    return (
        <div className="page-contents polemo-page">
            <div className="polemo-header">
                <h1>
                    <img src={polemoIcon} alt="logo"></img>
                    <br />
                    <span>柚子柚子</span>
                </h1>
                <p>电波短篇</p>
                <p>{version}</p>
            </div>

            <div className="polemo-container">
                <hr />

                <p>获取:</p>
                <DownloadList className="polemo-download" items={item} />
                <hr />

            </div>
        </div>
    )
}