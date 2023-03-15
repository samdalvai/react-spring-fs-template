import Card from "../layout/Card";
import MemoryLogo from "../components/Logo/MemoryLogo";

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

		</Card>
	</div>
	)
}
