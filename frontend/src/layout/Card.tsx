import { Props } from "./Layout"

export const Card = ({ children }: Props) => {
    return (
        <div className="h-96 w-96 bg-white shadow-md rounded-md flex items-center justify-center">
            {children}
        </div>
    )
}