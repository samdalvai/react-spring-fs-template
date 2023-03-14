import Header from "./Header";

export interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen bg-black">
            <Header />
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Layout;