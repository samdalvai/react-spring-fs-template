import { ChildrenProps, Size } from "../types/props";

const heights = {
    sm: 'h-20',
    md: 'h-72',
    lg: 'h-96 ',
    none: '',
}

export default function Card({ size = 'none', children }: { size?: Size, children: ChildrenProps }) {
    const heightClass = heights[size]

    return (
        <div className={`${heightClass} w-80 md:w-96 mx-2 py-5 bg-gray-100 shadow-md border-2 rounded-md flex items-center justify-center`}>
            {children}
        </div>
    )
}