export type DownloadItem = {
    platform: string,
    icon: string
    explanation?: string,
    link: string
    description?: string
}

export type DownloadObj = {
    version: string
    items: DownloadItem[]
}