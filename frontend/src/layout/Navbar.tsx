import MemoryLogo from "../components/MemoryLogo";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 absolute top-0 w-full h-14">
            <div className="h-full flex items-center">
                <span className="ml-2"><MemoryLogo /></span>
            </div>
        </nav>
    )
}