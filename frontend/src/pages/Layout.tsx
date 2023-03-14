interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen bg-blue-300 text-center">
            {children}
        </div>
    )

}

export default Layout;