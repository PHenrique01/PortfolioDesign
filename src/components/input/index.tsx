interface InputProps {
    label: string;
    placeholder: string;
    type?: string;
}

export default function Input({ label, placeholder, type = "text" }: InputProps) {
    return(
        <div className="flex flex-col gap-3">
            <label className='text-grey-100 text-xs uppercase'>
                {label}
            </label>
            <input type={type} placeholder={placeholder} className='bg-transparent border-b border-grey-500 pb-4 text-white placeholder:text-grey-400 outline-none transition-colors duration-300 focus:border-grey-400'/>
        </div>
    )
}