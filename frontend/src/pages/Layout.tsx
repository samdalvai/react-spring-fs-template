interface Props { children: JSX.Element | JSX.Element[] }

const Layout = ({ children }: Props) => {
    return (
        <div className="h-screen w-screen bg-gray-200 text-center">
            {children}
        </div>
    )

}

export default Layout;