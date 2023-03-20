import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../layout/Card";
import MemoryLogo from '../components/MemoryLogo';
import InputField from './../components/InputField';
import Button from "../components/Button";
import { RootState } from "../store";
import { login, logout } from '../actions/authActions';
import { Navigate } from "react-router-dom";

export default function Login() {
	const dispatch = useDispatch();
	const [userEmail, setUserEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const authState = useSelector((state: RootState) => state.auth);
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

	console.log("authState: ", authState)
	console.log("isAuthenticated: ", isAuthenticated)

	const onSubmit = () => {
		dispatch(login({email: userEmail, password: password}))
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
		<Card>
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
				onClick={onSubmit} />
			</div>
		</Card>
		<hr className="my-2 border-none" />
		<Card />
	</div>
	)
}
