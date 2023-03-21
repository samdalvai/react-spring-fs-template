import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Home() {
    const { user } = useSelector((state: RootState) => state.auth);
    console.log("User in home page: ", user)

    return (
        <div className="text-2xl bold">
            Home
        </div>
    )
}