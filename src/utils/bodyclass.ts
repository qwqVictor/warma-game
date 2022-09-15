export default function bodyClass(className: string): React.EffectCallback {
    return () => {
        const originalClassName = document.body.className
        document.body.className = className
        return () => {
            document.body.className = originalClassName
        }
    }
}