import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import ErrorAlert from "../components/ErrorAlert";
import InputField from "../components/InputField";
import AppLogo from "../components/AppLogo";
import Card from "../layout/Card";
import { resetError, signup } from "../reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import BackIcon from "../components/BackIcon";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignUp() {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const { loading, error } = useSelector((state: RootState) => state.auth);

    const onSubmit = () => {
        dispatch(resetError())
        dispatch(signup({ username: userName, email: userEmail, password: password }))
    }

    const handleBack = () => {
        dispatch(resetError())
        navigate('/login');
    }

    return (
        <div>
            <div className="py-5 text-xl flex items-center justify-center">
                <span>
                    <h1 className="text-slate-700 dark:text-white text-xl font-medium">Sign up to TestApp</h1>
                </span>
                <span className="ml-3 p-3 bg-indigo-500 rounded-md shadow-md">
                    <AppLogo />
                </span>
            </div>
            {error ? <ErrorAlert message="Failed to register user..." onClose={() => dispatch(resetError())} /> : null}
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
                    <div className="flex flex-row items-center justify-center">
                        <div className="w-1/3 mr-1">
                            <Button
                                label={<BackIcon />}
                                color="grey"
                                name={"back"}
                                onClick={() => handleBack()}
                                loading={loading}
                            />
                        </div>
                        <div className="w-2/3 ml-1">
                            <Button
                                label={"Signup"}
                                name={"signup"}
                                onClick={onSubmit}
                                loading={loading}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}