import Header from '@components/header'
import Layout from '@components/layout'
import HeroImg from '@assets/background/bg-hero.svg'
import JackTheJumperImg from '@assets/images/image-1.png'
import ImersivaMedImg from '@assets/images/image-2.png'
import RotaOncoImg from '@assets/images/image-3.png'
import JackTheJumperMobileImg from '@assets/images/image-mobile-1.png'
import ImersivaMedMobileImg from '@assets/images/image-mobile-2.png'
import RotaOncoMobileImg from '@assets/images/image-mobile-3.png'
import LayoutIcon from '@assets/icons/Layout.svg'
import BrainIcon from '@assets/icons/Brain.svg'
import NetworkIcon from '@assets/icons/Network.svg'
import Card from '@components/card'
import ProjectCard from '@components/projectCard'
import StateItem from '@components/statesItem'
import Title from '@components/title'
import CategoryButton from '@components/categoryButton'
import Input from '@components/input'
import { useEffect, useState } from 'react'
import Footer from '@components/footer'
import SocialLink from '@components/socialLink'
import { useTranslation } from 'react-i18next'
import Reveal from '@components/reveal'
import { SendEmail } from '@services/email'
import type { SyntheticEvent } from 'react'
import TextArea from '@components/textArea'

export default function Home() {
    const [selected, setSelected] = useState('Geral')
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errors, setErrors] = useState({name: '', email: '', message: ''})

    useEffect(() => {
        if (!success) return

        const timer = setTimeout(() => {
            setSuccess(false)
        }, 4000)

        return () => clearTimeout(timer)
    }, [success])

    const stats = [
        {
            number: 1,
            suffix: '+',
            label: t("stats.experience"),
        },
        {
            number: 10,
            suffix: '+',
            label: t("stats.projects"),
        },
        {
            number: 5,
            suffix: '+',
            label: t("stats.published"),
        },
        {
            number: 100,
            suffix: '+',
            label: t("stats.hours"),
        },
    ]

    const handleSubmit = async (
        event: SyntheticEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        const newErrors = {
            name:
                name.trim().length < 2
                    ? 'Informe pelo menos 2 caracteres' : '',
            
            email:
                !emailRegex.test(email)
                    ? 'Informe um e-mail válido' : '',
            
            message:
                message.trim().length < 10
                    ? 'A mensagem deve ter pelo menos 10 caracteres' : '',
        }

        setErrors(newErrors)

        const hasErrors = Object.values(newErrors).some((error) => error !== '')

        if (hasErrors) {
            return
        }

        try {
            setLoading(true)

            await SendEmail({
                category: selected,
                name,
                email,
                message,
            })

            setSuccess(true)

            setName('')
            setEmail('')
            setMessage('')

            setErrors({
                name: '',
                email: '',
                message: '',
            })
        } catch (erro) {
            console.error(erro)
            setError(true)
        } finally {
            setLoading(false)
        }

        
    }

    return(
        <>
            <Header/>
            <main>
                <section aria-label='Hero' className='relative min-h-screen flex items-center justify-center'>
                    <img src={HeroImg} alt="" className='absolute inset-0 w-full h-full object-cover -z-10'/>
                    <Layout>
                        <div className='select-none'>
                            <div className='flex flex-col sm:items-center gap-2'>
                                <h1 className="text-white text-6xl md:text-8xl">Paulo Henrique</h1>
                                <ul className='flex items-center flex-wrap gap-1 md:gap-4'>
                                    <li className='text-grey-400 text-xs md:text-lg uppercase max-w-2xl'>{t("hero.designer")}</li>
                                    <li className='text-grey-400 text-xs md:text-lg uppercase max-w-2xl'>{t("hero.prototipo")}</li>
                                    <li className='text-grey-400 text-xs md:text-lg uppercase max-w-2xl'>{t("hero.designSystem")}</li>
                                    <li className='text-grey-400 text-xs md:text-lg uppercase max-w-2xl'>{t("hero.figma")}</li>
                                </ul>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Stats' className='py-20'>
                    <Layout>
                        <div className='flex justify-between flex-wrap gap-y-12'>
                            {stats.map((item) => (
                                <div key={item.label} className='w-[40%] md:w-auto'>
                                    <StateItem number={item.number} suffix={item.suffix} label={item.label}/>
                                </div>
                            ))}
                        </div>
                    </Layout>
                </section>
                <section aria-label='Projetos em destaque' className='py-12 md:py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Reveal>
                                <Title title={t("project.title")} subtitle={t("project.subTitle")}/>
                            </Reveal>
                            <div className='flex flex-col gap-6'>
                                <Reveal delay={100}>
                                    <ProjectCard imageMobile={JackTheJumperMobileImg} image={JackTheJumperImg} title={t("project.projectOne")} href='https://www.behance.net/gallery/237397827/Landing-page-Jack-The-Jumper-UIUX'/>
                                </Reveal>
                                <Reveal delay={200}>
                                    <ProjectCard imageMobile={ImersivaMedMobileImg} image={ImersivaMedImg} title={t("project.projectTwo")} href='https://www.behance.net/gallery/247477215/Mobile-ImersivaMed-UIUX'/>
                                </Reveal>
                                <Reveal delay={300}>
                                    <ProjectCard imageMobile={RotaOncoMobileImg} image={RotaOncoImg} title={t("project.projectThree")} href='https://www.behance.net/gallery/248212809/Mobile-RotaOnco-UIUX'/>
                                </Reveal>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Design em prática' className='py-12 md:py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Reveal>
                                <Title title={t("design.title")} subtitle={t("design.subTitle")}/>
                            </Reveal>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                <Reveal delay={100}>
                                    <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={LayoutIcon} title={t("design.interfaceTitle")} description={t("design.interfaceDesc")}/>
                                </Reveal>
                                <Reveal delay={200}>
                                    <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={BrainIcon} title={t("design.experienceTitle")} description={t("design.experienceDesc")}/>
                                </Reveal>
                                <Reveal delay={300}>
                                    <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={NetworkIcon} title={t("design.prototypeTitle")} description={t("design.prototypeDesc")}/>
                                </Reveal>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Contato' className='py-12 md:py-24'>
                    <Layout>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-12'>
                            <div className='flex flex-col gap-8'>
                                <Reveal>
                                    <Title title={t("contact.title")} subtitle={t("contact.subTitle")} nameClasse='max-w-[414px]' variant='lg'/>
                                </Reveal>
                                <Reveal delay={100}>
                                    <div>
                                        <ul className="flex flex-wrap pl-4 gap-8">
                                            <SocialLink title='LinkedIn' href='https://www.linkedin.com/in/paulo-henrique2003'/>
                                            <SocialLink title='Behance' href='https://www.behance.net/paulohenrique239'/>
                                            <SocialLink title='Github' href='https://github.com/PHenrique01'/>
                                        </ul>
                                    </div>
                                </Reveal>
                            </div>
                            <Reveal delay={200}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex items-center flex-wrap gap-2 md:gap-4'>
                                        <CategoryButton label={t("contact.categoryOne")} active={selected === "Geral"} onClick={() => setSelected("Geral")}/>
                                        <CategoryButton label={t("contact.categoryTwo")} active={selected === "Projeto"} onClick={() => setSelected("Projeto")}/>
                                        <CategoryButton label={t("contact.categoryThree")} active={selected === "Parceria"} onClick={() => setSelected("Parceria")}/>
                                        <CategoryButton label={t("contact.categoryFour")} active={selected === "Outro"} onClick={() => setSelected("Outro")}/>
                                    </div>
                                    <div>
                                        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                                            <Input label={t("contact.labelOne")} placeholder={t("contact.placeholderOne")} name='name' value={name} error={!!errors.name} errorMessage={errors.name} onChange={(e) => {
                                                setName(e.target.value) 
                                                if (errors.name) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        name: '',
                                                    }))
                                                }
                                            }}/>
                                            <Input label={t("contact.labelTwo")} placeholder={t("contact.placeholderTwo")} type='email' name='email' value={email} error={!!errors.email} errorMessage={errors.email} onChange={(e) => {
                                                setEmail(e.target.value)
                                                if (errors.email) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        email: '',
                                                    }))
                                                }
                                            }}/>
                                            <TextArea label={t("contact.labelThree")} placeholder={t("contact.placeholderThree")} name='message' value={message} error={!!errors.message} errorMessage={errors.message} onChange={(e) => {
                                                setMessage(e.target.value)
                                                if (errors.message) {
                                                    setErrors((prev) => ({
                                                        ...prev,
                                                        message: '',
                                                    }))
                                                }
                                            }}/>
                                            <button type='submit' disabled={loading} className='text-white font-medium py-4 rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-grey-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>{loading ? "Enviando..." : t("contact.button")}</button>
                                            {success && (
                                                <p className='text-green-400 text-sm text-center'>Mensagem enviada com sucesso!</p>
                                            )}
                                            {error && (
                                                <p className='text-red-400 text-sm text-center'>Não foi possível enviar a mensagem. Tente novamente.</p>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </Layout>
                </section>
            </main>
            <Footer/>
        </>
    )
}