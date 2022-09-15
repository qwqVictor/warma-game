import "./download.css"
import generateMultiClassnames from "../utils/generateMultiClassnames"
export type DownloadProps = {
    platform: string
    icon: string
    explanation?: string
    link: string
    className?: string
}

export default function Download(props: DownloadProps) {
    const cn = (classname?: string) => generateMultiClassnames(props.className, classname)
    return (
        <>
            <a href={props.link} className={cn("download")}>
            <button className={cn()}>
                    <span className={cn("download-icon")}>
                        <i className={`fab fa-${props.icon}`}></i>
                    </span>
                
                {props.platform}
                {props.explanation ? <span className={cn("download-explanation")}>{props.explanation}</span> : <></>}
            </button>
        </a>
        <br/>
        </>
    )
}