import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Button from "../components/Button";
import { ThunkDispatch } from "redux-thunk";
import { logout } from "../reducers/authReducer";
import client from "../services/client";
import { useState } from "react";

export default function Home() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const { user } = useSelector((state: RootState) => state.auth);
    const [testMessage, setTestMessage] = useState<string>('');
    console.log("User in home page: ", user)

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleTest = () => {
        client.get('api/test').then(res => {
            setTestMessage(res.data);
        }).catch(error => {
            setTestMessage("Error");
        })
    }

    return (
        <div>
            <div className="flex flex-col w-64 border border-black">
                <span>Hello user '{user.username}' </span>
                <span>Test: {testMessage}</span>
            </div>
            <Button
                label={"Logout"}
                name={"logout"}
                onClick={handleLogout} />
            <Button
                color="blue"
                label={"Test"}
                name={"test"}
                onClick={handleTest} />
        </div>
    )
}