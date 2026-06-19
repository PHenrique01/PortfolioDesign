import Logo from '@assets/logo/logo-3.svg'
import Layout from '@components/layout'
import LanguageSelector from '@components/translator'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MenuOpenIcon from '@assets/icons/List.svg'
import MenuCloseIcon from '@assets/icons/X.svg'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
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
        <>
            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ menuOpen ? "bg-grey-700 border-transparent" : scrolled ? "bg-grey-700/90 backdrop-blur-md border-b border-white/10" : "bg-transparent border-transparent"}`}>
                <Layout>
                    <div className='flex items-center justify-between py-8'>
                        <div>
                            <Link to="/">
                                <img src={Logo} alt="Logo do projeto" className='lg:w-auto'/>
                            </Link>  
                        </div>
                        <nav className='hidden md:block'>
                            <ul className='flex items-center gap-6'>
                                <li><NavLink to="/sobre" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.about")}</NavLink></li>
                                <li><NavLink to="/certificacoes" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.certifications")}</NavLink></li>
                                <li><NavLink to="/projetos" className={({ isActive }) => `uppercase transition-all duration-300 ${ isActive ? "text-white" : "text-grey-100 hover:text-white"}`}>{t("header.projects")}</NavLink></li>
                            </ul>
                        </nav>
                        <div className='flex items-center gap-4'>
                            <div className='hidden md:block'>
                                <LanguageSelector/>
                            </div>
                            <div>
                                <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden' aria-label='Abrir menu'>
                                    {menuOpen ? (
                                        <img src={MenuCloseIcon} alt="" className='w-7 h-7 hover:opacity-50'/>
                                    ): (
                                        <img src={MenuOpenIcon} alt="" className='w-7 h-7 hover:opacity-50'/>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </Layout>
            </header>
            <div className={`fixed inset-0 bg-grey-700 z-40 transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <nav className='mt-20'>
                    <ul className='flex flex-col py-4'>
                        <li>
                            <NavLink to="/sobre" onClick={() => setMenuOpen(false)} className='text-grey-100 uppercase block px-6 py-4 hover:text-white transition-colors'>
                                {t("header.about")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/certificacoes" onClick={() => setMenuOpen(false)} className='text-grey-100 uppercase block px-6 py-4 hover:text-white transition-colors'>
                                {t("header.certifications")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projetos" onClick={() => setMenuOpen(false)} className='text-grey-100 uppercase block px-6 py-4 hover:text-white transition-colors'>
                                {t("header.projects")}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='px-6 py-4'>
                    <div className='border-t border-white/10 px-6 py-4'/>
                    <LanguageSelector mobile/>
                </div>
            </div>
        </>
    )
}