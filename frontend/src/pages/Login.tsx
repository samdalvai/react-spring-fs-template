import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../layout/Card";
import MemoryLogo from '../components/MemoryLogo';
import InputField from './../components/InputField';
import Button from "../components/Button";
import { RootState } from "../store";
import { login } from '../actions/authActions';
import { Navigate } from "react-router-dom";

export default function Login() {
	const dispatch = useDispatch();
	const [userEmail, setUserEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const { isAuthenticated, loading, error, user } = useSelector((state: RootState) => state.auth);

	console.log("isAuthenticated: ", isAuthenticated)
	console.log("loading: ", loading)
	console.log("error: ", error)
	console.log("user: ", user)

	const onSubmit = () => {
		dispatch(login({ email: userEmail, password: password }))
	}

	if (isAuthenticated) {
		return <Navigate to={"/"} />;
	}

	return (<div>
		<div className="py-5 text-xl flex items-center justify-center">
			<span>
				<h1 className="text-slate-700 text-xl font-medium">Login to MemoryNotes</h1>
			</span>
			<span className="ml-3 p-3 bg-indigo-500 rounded-md shadow-lg">
				<MemoryLogo />
			</span>
		</div>
		<Card size="md">
			<div className="flex flex-col w-4/5">
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
			<div><span className="font-medium">New to MemoryNotes? </span><a className="font-semibold underline text-indigo-500" href="/singup">Register</a></div>
		</Card>
	</div>
	)
}
