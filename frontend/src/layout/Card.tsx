import { ChildrenProps, Size } from "../types/props";

const heights = {
    sm: 'h-20',
    md: 'h-72'
}

export default function Card({ size, children }: { size: Size, children: ChildrenProps }) {
    const heightClass = heights[size]

    return (
        <div className={`${heightClass} w-80 md:w-96 mx-2 bg-gray-100 shadow-md shadow-gray-300 rounded-md flex items-center justify-center`}>
            {children}
        </div>
    )
}