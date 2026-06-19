interface TextAreaProps {
    label: string;
    placeholder: string;
    name?: string;
    value?: string;
    error?: boolean;
    errorMessage?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ label, placeholder, name, value, error = false, errorMessage, onChange}: TextAreaProps) {
    return(
        <div className='flex flex-col gap-3'>
            <label className='text-grey-100 text-xs uppercase'>
                {label}
            </label>
            <textarea name={name} value={value} onChange={onChange} rows={5} placeholder={placeholder} className={`h-24 hide-scrollbar bg-transparent border-b pb-4 text-white placeholder:text-grey-400 outline-none resize-none transition-colors duration-300 ${error ? "border-red-500" : "border-grey-500 focus:border-grey-400"}`}/>
            {errorMessage && (
                <span className='text-red-400 text-sm'>{errorMessage}</span>
            )}
        </div>
    )
}