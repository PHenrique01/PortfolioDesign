import Header from '@components/header'
import Layout from '@components/layout'
import HeroImg from '@assets/background/bg-hero.svg'
import JackTheJumperImg from '@assets/images/image-1.png'
import ImersivaMedImg from '@assets/images/image-2.png'
import RotaOncoImg from '@assets/images/image-3.png'
import LayoutIcon from '@assets/icons/Layout.svg'
import BrainIcon from '@assets/icons/Brain.svg'
import NetworkIcon from '@assets/icons/Network.svg'
import Card from '@components/card'
import ProjectCard from '@components/projectCard'
import StateItem from '@components/statesItem'
import Title from '@components/title'
import CategoryButton from '@components/categoryButton'
import Input from '@components/input'
import { useState } from 'react'
import Footer from '@components/footer'
import SocialLink from '@components/socialLink'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const [selected, setSelected] = useState('Geral')
    const { t } = useTranslation()

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

    return(
        <>
            <Header/>
            <main>
                <section aria-label='Hero' className='min-h-screen flex items-center justify-center'>
                    <img src={HeroImg} alt="" className='absolute inset-0 w-full h-full object-cover -z-10'/>
                    <Layout>
                        <div className='select-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <h1 className="text-white text-8xl">Paulo Henrique</h1>
                                <ul className="flex items-center gap-4">
                                    <li className="text-grey-400 text-lg uppercase">{t("hero.designer")}</li>
                                    <li className="text-grey-400 text-lg uppercase">{t("hero.prototipo")}</li>
                                    <li className="text-grey-400 text-lg uppercase">{t("hero.designSystem")}</li>
                                    <li className="text-grey-400 text-lg uppercase">{t("hero.figma")}</li>
                                </ul>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Stats' className='py-20'>
                    <Layout>
                        <div className='flex justify-between'>
                            {stats.map((item) => (
                                <StateItem key={item.label} number={item.number} suffix={item.suffix} label={item.label}/>
                            ))}
                        </div>
                    </Layout>
                </section>
                <section aria-label='Projetos em destaque' className='py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title={t("project.title")} subtitle={t("project.subTitle")}/>
                            <div className='flex flex-col gap-6'>
                                <ProjectCard image={JackTheJumperImg} title={t("project.projectOne")} href='https://www.behance.net/gallery/237397827/Landing-page-Jack-The-Jumper-UIUX'/>
                                <ProjectCard image={ImersivaMedImg} title={t("project.projectTwo")} href='https://www.behance.net/gallery/247477215/Mobile-ImersivaMed-UIUX'/>
                                <ProjectCard image={RotaOncoImg} title={t("project.projectThree")} href='https://www.behance.net/gallery/248212809/Mobile-RotaOnco-UIUX'/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Design em prática' className='py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title={t("design.title")} subtitle={t("design.subTitle")}/>
                            <div className='grid grid-cols-3 gap-6'>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={LayoutIcon} title={t("design.interfaceTitle")} description={t("design.interfaceDesc")}/>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={BrainIcon} title={t("design.experienceTitle")} description={t("design.experienceDesc")}/>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={NetworkIcon} title={t("design.prototypeTitle")} description={t("design.prototypeDesc")}/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Contato' className='py-24'>
                    <Layout>
                        <div className='grid grid-cols-2 items-start gap-12'>
                            <div className='flex flex-col gap-8'>
                                <Title title={t("contact.title")} subtitle={t("contact.subTitle")} nameClasse='max-w-[414px]' variant='lg'/>
                                <div>
                                    <ul className="flex pl-4 gap-8">
                                        <SocialLink title='LinkedIn' href='https://www.linkedin.com/in/paulo-henrique2003'/>
                                        <SocialLink title='Behance' href='https://www.behance.net/paulohenrique239'/>
                                        <SocialLink title='Github' href='https://github.com/PHenrique01'/>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-wrap gap-4'>
                                    <CategoryButton label={t("contact.categoryOne")} active={selected === "Geral"} onClick={() => setSelected("Geral")}/>
                                    <CategoryButton label={t("contact.categoryTwo")} active={selected === "Projeto"} onClick={() => setSelected("Projeto")}/>
                                    <CategoryButton label={t("contact.categoryThree")} active={selected === "Parceria"} onClick={() => setSelected("Parceria")}/>
                                    <CategoryButton label={t("contact.categoryFour")} active={selected === "Outro"} onClick={() => setSelected("Outro")}/>
                                </div>
                                <div>
                                    <form action="" className='flex flex-col gap-8'>
                                        <Input label={t("contact.labelOne")} placeholder={t("contact.placeholderOne")}/>
                                        <Input label={t("contact.labelTwo")} placeholder={t("contact.placeholderTwo")}/>
                                        <Input label={t("contact.labelThree")} placeholder={t("contact.placeholderThree")}/>
                                        <button type='submit' className='text-white font-medium py-4 rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-grey-700 cursor-pointer'>{t("contact.button")}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </section>
            </main>
            <Footer/>
        </>
    )
}