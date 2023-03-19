export default function Button({ label, name }: { label: string, name: string }) {
    return(
    <div className="flex flex-col py-2">
        <button
            className="px-2 h-10 text-sm font-semibold rounded-md shadow-md text-slate-100 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            name={name}
        >
            {label}
        </button>
    </div>);
}