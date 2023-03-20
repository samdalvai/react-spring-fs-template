export default function ErrorAlert({ message }: { message: string }) {
    return (
        <div className="text-center py-2 mx-2 my-2 w-80 md:w-96 text-sm font-medium bg-red-400 border-2 border-red-600 rounded-md shadow-md">
            {message}
        </div>
    );
}