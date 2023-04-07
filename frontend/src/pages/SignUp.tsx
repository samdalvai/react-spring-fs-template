import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import ErrorAlert from "../components/ErrorAlert";
import InputField from "../components/InputField";
import MemoryLogo from "../components/MemoryLogo";
import Card from "../layout/Card";
import { resetError, setError, signup } from "../reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

export default function SignUp() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);

    const onSubmit = () => {
        dispatch(resetError())
        dispatch(signup({ username: userName, email: userEmail, password: password }))
    }

    return (
        <div>
            <div className="py-5 text-xl flex items-center justify-center">
                <span>
                    <h1 className="text-slate-700 dark:text-white text-xl font-medium">Sign up to MemoryNotes</h1>
                </span>
                <span className="ml-3 p-3 bg-indigo-500 rounded-md shadow-md">
                    <MemoryLogo />
                </span>
            </div>
            {error ? <ErrorAlert message="Failed to register user with name..." onClose={() => dispatch(resetError())} /> : null}
            <hr className="my-2 border-none" />
            <Card>
                <div className="flex flex-col w-4/5">
                    <InputField
                        label={"Username"}
                        name={"username"}
                        value={userName}
                        type={"text"}
                        onChange={setUserName} />
                    <InputField
                        label={"Email"}
                        name={"email"}
                        value={userEmail}
                        type={"email"}
                        onChange={setUserEmail} />
                    <InputField
                        label={"Password"}
                        name={"password"}
                        value={password}
                        type={"password"}
                        onChange={setPassword} />
                    <InputField
                        label={"Confirm Password"}
                        name={"confirmPassword"}
                        value={passwordConfirm}
                        type={"password"}
                        onChange={setPasswordConfirm} />
                    <hr className="my-2 border-none" />
                    <Button
                        label={"Signup"}
                        name={"signup"}
                        onClick={onSubmit}
                        loading={loading}
                    />
                </div>
            </Card>
        </div>
    )
}