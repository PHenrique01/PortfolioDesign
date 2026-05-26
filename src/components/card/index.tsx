interface CardProps {
    icon?: string;
    image?: string;
    title: string;
    subtitle?: string;
    description: string;
    nameClasse?: string;
    variant?: "column" | "row";
}

export default function Card({  icon, image, title, subtitle, description, nameClasse, variant = "column" }: CardProps) {
    return(
        <div className={`${nameClasse} ${variant === "row" ? "flex gap-4" : "flex flex-col gap-1"} transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-grey-600 hover:shadow-2xl`}>
            {image && (
                <img src={image} alt="" className='rounded-2xl'/>
            )}
            {icon && (
                <img src={icon} alt="" className='w-6 h-6'/>
            )}
            <div className='flex flex-col gap-4'>
                <h3 className='text-white text-2xl font-medium'>{title}</h3>
                {subtitle && (
                    <p className='text-grey-400'>{subtitle}</p>
                )}
                {description && (
                    <p className='text-grey-100'>{description}</p>
                )}
            </div>
        </div>
    )
}