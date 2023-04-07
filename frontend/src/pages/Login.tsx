import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../layout/Card";
import MemoryLogo from '../components/MemoryLogo';
import InputField from './../components/InputField';
import Button from "../components/Button";
import { RootState } from "../store";
import { autoLogin, login } from '../reducers/authReducer'
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import { resetError } from "../reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";

export default function Login() {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
	const navigate = useNavigate();
	const [userName, setUserName] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { isAuthenticated, loading, error, user } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		dispatch(autoLogin());
	}, [])

	const onSubmit = () => {
		dispatch(resetError());
		dispatch(login({ username: userName, password: password }));
	}

	const handleSignup = () => {
		dispatch(resetError());
		navigate('/signup');
	}

	if (isAuthenticated) {
		navigate('/');
	}

	return (
		<div>
			<div className="py-5 text-xl flex items-center justify-center">
				<span>
					<h1 className="text-slate-700 dark:text-white text-xl font-medium">Login to MemoryNotes</h1>
				</span>
				<span className="ml-3 p-3 bg-indigo-500 rounded-md shadow-md">
					<MemoryLogo />
				</span>
			</div>
			{error ? <ErrorAlert message="Wrong username or password..." onClose={() => dispatch(resetError())} /> : null}
			<hr className="my-2 border-none" />
			<Card size="md">
				<div className="flex flex-col w-4/5">
					<InputField
						label={"Username"}
						name={"username"}
						value={userName}
						type={"text"}
						onChange={setUserName} />
					<InputField
						label={"Password"}
						name={"password"}
						value={password}
						type={"password"}
						onChange={setPassword} />
					<hr className="my-2 border-none" />
					<Button
						label={"Login"}
						name={"login"}
						onClick={onSubmit}
						loading={loading}
					/>
				</div>
			</Card>
			<hr className="my-2 border-none" />
			<Card size="sm">
				<div>
					<span className="font-medium">New to MemoryNotes? </span>
					<a className="font-semibold underline text-indigo-500 hover:text-indigo-900 hover:cursor-pointer transition ease-out duration-150" onClick={handleSignup}>Register</a>
				</div>
			</Card>
		</div>
	)
}
