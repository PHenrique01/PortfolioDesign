import Logo from '@assets/logo/logo-3.svg'
import Layout from '@components/layout'
import LanguageSelector from '@components/translator'

export default function Header() {
    return (
        <header>
            <Layout>
                <div className='flex justify-between py-8'>
                    <div>
                        <img src={Logo} alt="Logo do projeto"/>
                    </div>
                    <div>
                        <ul className='flex items-center gap-6'>
                            <li><a href="" className='text-grey-100 uppercase'>sobre</a></li>
                            <li><a href="" className='text-grey-100 uppercase'>certificações</a></li>
                            <li><a href="" className='text-grey-100 uppercase'>projetos</a></li>
                        </ul>
                    </div>
                    <div>
                        <LanguageSelector/>
                    </div>
                </div>
            </Layout>
        </header>
    )
}