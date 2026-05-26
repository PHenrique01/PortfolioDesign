interface TitleProps {
    title: string;
    subtitle: string;
    variant?: "md" | "lg";
}

export default function Title({ title, subtitle, variant = "md" }: TitleProps) {
    return(
        <div className="flex flex-col gap-2">
            <h2 className={`text-white font-bold uppercase ${variant === "lg" ? "text-5xl" : "text-3xl"}`}>{title}</h2>
            <p className='text-grey-400'>{subtitle}</p>
        </div>
    )
}