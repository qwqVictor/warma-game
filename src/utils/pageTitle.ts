export default function pageTitle(title: string): React.EffectCallback {
    return () => {
        const originalTitle = document.title
        document.title = title
        return () => {
            document.title = originalTitle
        }
    }
}