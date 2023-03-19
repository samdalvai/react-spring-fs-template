import Card from "../layout/Card";
import MemoryLogo from '../components/MemoryLogo';
import InputField from './../components/InputField';
import Button from "../components/Button";
import { useState } from "react";

export default function Login() {
	const [userEmail, setUserEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

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
					onChange={setUserEmail} />
				<InputField
					label={"Password"}
					name={"password"}
					value={password}
					onChange={setPassword} />
				<hr className="my-2 border-none" />
				<Button label={"Login"} name={"login"} />
			</div>
		</Card>
	</div>
	)
}
