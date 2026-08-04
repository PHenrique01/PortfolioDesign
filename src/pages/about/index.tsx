import Header from '@components/header'
import Layout from '@components/layout'
import Title from '@components/title'
import ProjetosImg from '@assets/images/image-4.png'
import Card from '@components/card'
import LogoOne from '@assets/logo/logo-1.svg'
import LogoTwo from '@assets/logo/logo-2.svg'
import Footer from '@components/footer'
import { useTranslation } from 'react-i18next'
import Reveal from '@components/reveal'

export default function About() {
    const { t } = useTranslation()

    return(
        <>
            <Header/>
            <main className='mt-40 md:mt-52'>
                <section aria-label='Sobre' className='mb-24'>
                    <Layout>
                        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
                            <div className='flex flex-col gap-4'>
                                <Reveal>
                                    <Title title={t("about.title")} subtitle={t("about.subTitle")}/>
                                </Reveal>
                                <Reveal delay={100}>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-grey-100'>{t("about.descriptionOne")}</p>
                                        <p className='text-grey-100'>{t("about.descriptionTwo")}</p>
                                        <p className='text-grey-100'>{t("about.descriptionThree")}</p>
                                    </div>    
                                </Reveal>
                            </div>
                            <div className='flex justify-end'>
                                <Reveal delay={200}>
                                    <img src={ProjetosImg} alt="Imagens de projetos"/>
                                </Reveal>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Experiência profissional' className='py-12 md:py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Reveal>
                                <Title title={t("experience.title")} subtitle={t("experience.subTitle")}/>
                            </Reveal>
                            <div className='flex flex-col gap-6'>
                                <Reveal delay={100}>
                                    <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title={t("experience.rotaOncoTitle")} subtitle={t("experience.rotaOncoSubTitle")} list={[t("experience.rotaOncoListOne"), t("experience.rotaOncoListTwo"), t("experience.rotaOncoListThree")]}/>
                                </Reveal>
                                <Reveal delay={200}>
                                    <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title={t("experience.equipeWTTitle")} subtitle={t("experience.equipeWTSubTitle")} list={[t("experience.equipeWTListOne"), t("experience.equipeWTListTwo"), t("experience.equipeWTListThree")]}/>
                                </Reveal>
                                <Reveal delay={300}>
                                    <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title={t("experience.designTitle")} subtitle={t("experience.designSubTitle")} list={[t("experience.designListOne"), t("experience.designListTwo"), t("experience.designListThree"), t("experience.designListFour")]}/>
                                </Reveal>
                                <Reveal delay={400}>
                                    <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title={t("experience.devTitle")} subtitle={t("experience.devSubTitle")} list={[t("experience.devListOne"), t("experience.devListTwo"), t("experience.devListThree"), t("experience.devListFour")]}/>
                                </Reveal>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='Minha formação' className='py-12 md:py-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Reveal>
                                <Title title={t("training.title")} subtitle={t("training.subTitle")}/>
                            </Reveal>
                            <div className='flex flex-col gap-6'>
                                <Reveal>
                                    <Card image={LogoOne} title={t("training.graduationTitle")} subtitle={t("training.graduationSubTitle")} variant='row'/>
                                </Reveal>
                                <Reveal>
                                    <Card image={LogoTwo} title={t("training.technicalTitle")} subtitle={t("training.technicalSubTitle")} variant='row'/>
                                </Reveal>
                            </div>
                        </div>
                    </Layout>
                </section>
            </main>
            <Footer/>
        </>
    )
}