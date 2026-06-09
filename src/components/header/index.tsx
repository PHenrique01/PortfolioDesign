import Logo from '@assets/logo/logo-3.svg'
import Layout from '@components/layout'
import LanguageSelector from '@components/translator'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ scrolled ? "bg-grey-700/90 backdrop-blur-md border-b border-white/10" : "bg-transparent border-transparent"}`}>
            <Layout>
                <div className='flex justify-between py-8'>
                    <div>
                        <Link to="/">
                            <img src={Logo} alt="Logo do projeto"/>
                        </Link>  
                    </div>
                    <nav>
                        <ul className='flex items-center gap-6'>
                            <li><NavLink to="/sobre" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.about")}</NavLink></li>
                            <li><NavLink to="/certificacoes" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.certifications")}</NavLink></li>
                            <li><NavLink to="/projetos" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.projects")}</NavLink></li>
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