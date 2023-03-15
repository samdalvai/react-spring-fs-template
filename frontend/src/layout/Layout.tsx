import Header from "./Header";

export interface Props { children: JSX.Element | JSX.Element[] }

export default function Layout({ children }: Props) {
    return (
        <div className="h-screen w-screen bg-white flex items-center justify-center">
            {children}
        </div>
    )
}