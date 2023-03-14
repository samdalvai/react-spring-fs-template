import Header from "./Header";

interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen bg-slate-200">
            <Header />
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )

}

export default Layout;