
export default function Button ({ className, children, target = '', href = '#' }) {
    const classNameButton = `flex items-center justify-center rounded-md  w-fit text-white font-bold text-lg px-6 py-2 ${className}`
    return (
        <a
            target={target}
            href={href}
            className={classNameButton}>
            {children}
        </a>
    )
}

