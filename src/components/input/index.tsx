interface InputProps {
    label: string;
    placeholder: string;
    type?: string;
    name?: string;
    value?: string;
    error?: boolean;
    errorMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, placeholder, type = "text", name, value, error = false, errorMessage, onChange }: InputProps) {
    return(
        <div className='flex flex-col gap-3'>
            <label className='text-grey-100 text-xs uppercase'>
                {label}
            </label>
            <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`bg-transparent border-b border-grey-500 pb-4 text-white placeholder:text-grey-400 outline-none transition-colors duration-300 ${error ? "border-red-500" : "border-grey-500 focus:border-grey-400"}`}/>
            {errorMessage && (
                <span className='text-red-400 text-sm'>{errorMessage}</span>
            )}
        </div>
    )
}