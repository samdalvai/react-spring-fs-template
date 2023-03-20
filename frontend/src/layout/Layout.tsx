import Header from "./Header";
import { ChildrenProps } from "../types/props";

export default function Layout({ children }: { children: ChildrenProps}) {
    return (
        <div className="h-screen bg-indigo-100 dark:bg-slate-800 w-screen flex items-center justify-center">
            {children}
        </div>
    )
}