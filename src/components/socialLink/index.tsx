interface SocialLinkProps {
    title: string;
    href: string;
}

export default function SocialLink({ title, href }: SocialLinkProps) {
    return(
        <li>
            <a href={href} target="_blank" className='group flex items-center gap-2'>
                <span className='bg-white rounded-full w-2 h-2 transition-all duration-300 group-hover:opacity-50'/>
                <span className='text-white text-lg transition-all duration-300 group-hover:opacity-50'>{title}</span>
            </a> 
        </li>
    )
}