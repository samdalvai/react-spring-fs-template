import { Props } from "./Layout"

export default function Card({ children }: Props) {
    return (
        <div className="h-96 w-96 mx-2 bg-slate-100 shadow-md rounded-md flex items-center justify-center">
            {children}
        </div>
    )
}