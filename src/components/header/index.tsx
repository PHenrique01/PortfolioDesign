import Logo from '@assets/logo/logo-3.svg'
import Layout from '@components/layout'
import LanguageSelector from '@components/translator'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Layout>
                <div className='flex justify-between py-8'>
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="Logo do projeto"/>
                        </Link>  
                    </div>
                    <nav>
                        <ul className='flex items-center gap-6'>
                            <li><NavLink to="/sobre" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>sobre</NavLink></li>
                            <li><NavLink to="/certificacoes" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>certificações</NavLink></li>
                            <li><NavLink to="/projetos" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>projetos</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <LanguageSelector/>
                    </div>
                </div>
            </Layout>
        </header>
    )
}