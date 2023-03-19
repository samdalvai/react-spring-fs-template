import Header from "./Header";
import { Props } from "../types/props";

export default function Layout({ children }: Props) {
    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            {children}
        </div>
    )
}