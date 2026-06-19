interface CardProps {
    icon?: string;
    image?: string;
    title: string;
    subtitle?: string;
    description?: string;
    list?: string[];
    nameClasse?: string;
    animated?: boolean;
    variant?: "column" | "row";
}

export default function Card({  icon, image, title, subtitle, description, list, nameClasse, animated = false, variant = "column" }: CardProps) {
    return(
        <div className={`h-full ${nameClasse} ${variant === "row" ? "flex flex-col sm:items-center sm:flex-row gap-4" : "flex flex-col gap-1"} ${animated && `transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-grey-600 hover:shadow-2xl`}`}>
            {image && (
                <img src={image} alt="" className='w-20 h-20'/>
            )}
            {icon && (
                <img src={icon} alt="" className='w-6 h-6'/>
            )}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-white text-base sm:text-2xl font-medium'>{title}</h3>
                    {subtitle && (
                        <p className='text-grey-400'>{subtitle}</p>
                    )}
                </div>
                {description && (
                    <p className='text-grey-100'>{description}</p>
                )}
                {list && (
                    <ul className='flex flex-col'>
                        {list.map((item) => (
                            <li key={item} className='flex items-center gap-2 text-grey-100'>
                                <span className='bg-white w-1.5 h-1.5 rounded-full hidden sm:block'/>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}