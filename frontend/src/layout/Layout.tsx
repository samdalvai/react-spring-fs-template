import Header from "./Header";
import { ChildrenProps } from "../types/props";

export default function Layout({ children }: { children: ChildrenProps}) {
    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            {children}
        </div>
    )
}