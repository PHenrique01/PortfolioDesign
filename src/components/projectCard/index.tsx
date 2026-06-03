interface ProjectCardProps {
    image: string;
    title: string;
    href: string;
}

export default function ProjectCard({ image, title, href }: ProjectCardProps) {
    return(
        <div>
            <a href={href} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-4'>
                <div className='group overflow-hidden rounded-2xl'>
                    <img src={image} alt='Imagem do projeto' className='w-full transition-transform duration-700 ease-out group-hover:scale-105'/>
                </div>
                <div>
                    <h4 className='text-white text-lg font-medium'>{title}</h4>
                </div>
            </a>
        </div>
    )
}