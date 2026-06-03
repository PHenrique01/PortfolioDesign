import LinkedInIcon from '@assets/icons/Linkedin.svg'
import BehanceIcon from '@assets/icons/Behance.svg'
import GithubIcon from '@assets/icons/Github.svg'
import Layout from '@components/layout'

export default function Footer() {
    return(
        <footer className='border-t border-t-grey-500 py-10'>
            <Layout>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-grey-400'>© 2026 Paulo Henrique. Todos os direitos reservados.</p>
                    </div>
                    <div className='flex items-center gap-8'>
                        <a href="https://www.linkedin.com/in/paulo-henrique2003" target='_blank'><img src={LinkedInIcon} alt="" className='w-5 h-5 transition-all duration-300 hover:opacity-50'/></a>
                        <a href="https://www.behance.net/paulohenrique239" target='_blank'><img src={BehanceIcon} alt="" className='w-6 h-6 transition-all duration-300 hover:opacity-50'/></a>
                        <a href="https://github.com/PHenrique01" target='_blank'><img src={GithubIcon} alt="" className='w-5 h-5 transition-all duration-300 hover:opacity-50'/></a>
                    </div>
                </div>
            </Layout>
        </footer>
    )
}