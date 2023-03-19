import { Props } from "./Layout"

export default function Card({ children }: Props) {
    return (
        <div className="h-72 w-80 md:w-96 mx-2 bg-gray-100 shadow-md rounded-md flex items-center justify-center">
            {children}
        </div>
    )
}