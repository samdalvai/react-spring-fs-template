import Header from "./Header";

export interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
            {children}
        </div>
    )
}

export default Layout;