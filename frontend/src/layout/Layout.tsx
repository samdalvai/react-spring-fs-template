import { ChildrenProps } from "../types/props";

export default function Layout({ children }: { children: ChildrenProps}) {
    return (
        <div className="h-screen bg-white dark:bg-slate-600 w-screen flex items-center justify-center">
            {children}
        </div>
    )
}