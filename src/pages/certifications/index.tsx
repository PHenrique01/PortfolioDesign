import Header from '@components/header'
import Layout from '@components/layout'
import Title from '@components/title'
import { useState } from 'react'
import { certifications } from '@data/certifications.data'
import CategoryButton from '@components/categoryButton'
import Footer from '@components/footer'
import { useTranslation } from 'react-i18next'
import Reveal from '@components/reveal'

export default function Certifications() {
    const [selected, setSelected] = useState('Todos')
    const { t } = useTranslation()

    const categories = [
        t("certification.categoryOne"),
        t("certification.categoryTwo"),
        t("certification.categoryThree"),
        t("certification.categoryFour"),
    ]

    const filteredCertifications = selected === 'Todos' ? certifications : certifications.filter(
        (item) => item.category === selected
    )

    return(
        <>
            <Header/>
            <main className='mt-40 md:mt-52'>
                <section aria-label='Certificações' className='pb-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Reveal>
                                <Title title={t("certification.title")} subtitle={t("certification.subTitle")}/>
                            </Reveal>
                            <div className='flex flex-col gap-8'>
                                <Reveal delay={100}>
                                    <div className='flex items-center flex-wrap gap-4'>
                                        {categories.map((category) => (
                                            <CategoryButton
                                                key={category}
                                                label={category}
                                                active={selected === category}
                                                onClick={() => setSelected(category)}
                                            />
                                        ))}
                                    </div>
                                </Reveal>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {filteredCertifications.map((item, index) => (
                                        <Reveal key={item.id} delay={index * 100}>
                                            <div className='group overflow-hidden rounded-2xl'>
                                                <a href={item.file} target='_blank' rel='noopener noreferrer'>
                                                    <img src={item.image} alt="Imagem do certificado" className='w-full transition-transform duration-700 ease-out group-hover:scale-105'/>
                                                </a>
                                            </div>
                                        </Reveal>
                                    ))}
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