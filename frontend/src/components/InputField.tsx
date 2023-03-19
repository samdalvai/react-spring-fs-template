export default function InputField({value, label, name, onChange}: {value: string, label: string, name: string, onChange: (arg: string) => void}) {
  return (
    <div className="flex flex-col py-2">
      <label className="mb-1 font-normal">{label}</label>
      <input
        type="text"
        name={name}
        className="px-2 h-10 text-sm font-semibold rounded-md shadow-md border-slate-400 border hover:bg-indigo-100 focus:bg-indigo-100 focus:outline-none focus:border-blue-500"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
