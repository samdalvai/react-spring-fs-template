export default function ErrorAlert({ message, onClose }: { message: string, onClose: () => void }) {
    return (
        <div className="flex justify-center py-2 mx-2 my-2 w-80 md:w-96 bg-red-400 border-2 border-red-600 rounded-md shadow-md">
            <p className="p-2 ml-2 mt-0.5 text-md font-medium">{message}</p>
            <button className="p-2 ml-auto text-red-600 align" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}