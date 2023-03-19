import Card from "../layout/Card";
import MemoryLogo from '../components/MemoryLogo';
import InputField from './../components/InputField';
import Button from "../components/Button";

export default function Login() {
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
				<InputField label={"Email"} name={"email"}/>
				<InputField label={"Password"} name={"password"} />
				<Button label={"Login"} name={"login"} />
			</div>
		</Card>
	</div>
	)
}
