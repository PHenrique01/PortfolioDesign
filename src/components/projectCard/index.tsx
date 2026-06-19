interface ProjectCardProps {
    image: string;
    imageMobile: string;
    title: string;
    href: string;
}

export default function ProjectCard({ image, imageMobile, title, href }: ProjectCardProps) {
    return(
        <div>
            <a href={href} target='_blank' rel='noopener noreferrer' className='flex flex-col gap-4'>
                <div className='group overflow-hidden rounded-2xl'>
                    <picture>
                        <source media="(max-width: 425px)" srcSet={imageMobile}/>
                        <img src={image} alt='Imagem do projeto' className='w-full transition-transform duration-700 ease-out group-hover:scale-105'/>
                    </picture>
                </div>
                <div>
                    <h4 className='text-white text-lg font-medium'>{title}</h4>
                </div>
            </a>
        </div>
    )
}