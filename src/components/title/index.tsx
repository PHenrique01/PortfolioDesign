interface TitleProps {
    title: string;
    subtitle: string;
    nameClasse?: string;
    variant?: "md" | "lg";
}

export default function Title({ title, subtitle, nameClasse, variant = "md" }: TitleProps) {
    const titleVariants = {
        md: "text-3xl",
        lg: "text-3xl md:text-5xl"
    }

    return(
        <div className='flex flex-col gap-2'>
            <h2 className={`text-white font-bold uppercase ${titleVariants[variant]}`}>{title}</h2>
            <p className={`text-grey-400 ${nameClasse}`}>{subtitle}</p>
        </div>
    )
}