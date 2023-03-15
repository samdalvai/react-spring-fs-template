import Card from "../layout/Card";
import pencil from "../assets/pencil-square.svg"

export default function Login() {
	return (<div>
		<div className="py-5 text-xl flex items-center justify-center">
			<span>
				<h1 className="text-slate-900 text-xl font-medium">Login to MemoryNotes</h1>
			</span>
			<span className="ml-3 p-3 bg-indigo-500 rounded-md shadow-lg">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
				</svg>
			</span>
		</div>
		<Card>

		</Card>
	</div>
	)
}
