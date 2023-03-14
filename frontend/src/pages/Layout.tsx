interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="flex items-center h-screen w-screen bg-slate-200">
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )

}

export default Layout;