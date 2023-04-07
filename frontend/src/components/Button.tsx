import { ReactNode } from "react";
import { Color } from "../types/props";

export default function Button({ label, name, color = 'indigo', loading = false, onClick }: { label: string | ReactNode, name: string, color?: Color, loading?: boolean, onClick: () => void }) {
    const colors = {
        indigo: 'text-slate-100 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:ring-indigo-300',
        blue: 'text-slate-100 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300',
        grey: 'text-slate-100 bg-slate-500 hover:bg-slate-600 active:bg-slate-700 focus:ring-slate-300',
    }

    const colorClass = colors[color];

    return (
        <button
            className={`${colorClass} flex items-center justify-center py-2 px-4 my-2 w-full h-10 text-sm font-medium rounded-md shadow-md focus:outline-none focus:ring transition ease-in-out duration-150`}
            name={name}
            onClick={onClick}
        >
            {
                loading ?
                    <span className="inline-flex">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                    </span>
                    :
                    label
            }
        </button>);
}