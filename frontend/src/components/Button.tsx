export default function Button({ label, name, onClick }: { label: string, name: string, onClick: (arg: void) => void }) {
    return(
    <div className="flex flex-col py-2">
        <button
            className="px-2 h-10 text-sm font-semibold rounded-md shadow-md text-slate-100 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            name={name}
            onClick={() => onClick()}
        >
            {label}
        </button>
    </div>);
}