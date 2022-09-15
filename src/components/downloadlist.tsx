import Download from "./download"
import { DownloadItem } from "../types/downloadObj"

export type DownloadListProps = {
    className?: string
    items: DownloadItem[]
}
export function DownloadList(props: DownloadListProps) {
    return (
        <section>
            {props.items.map((item) => 
                <>
                    {<Download platform={item.platform} icon={item.icon} link={item.link} explanation={item.explanation} className={props.className} />}
                    {item.description ? <p>↑ {item.description}</p> : <></>}
                </>
            )}
        </section>
    )
}