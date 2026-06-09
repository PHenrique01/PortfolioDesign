import Header from '@components/header'
import Layout from '@components/layout'
import Title from '@components/title'
import { useState } from 'react'
import { projects } from '@data/projects.data'
import CategoryButton from '@components/categoryButton'
import Footer from '@components/footer'
import { useTranslation } from 'react-i18next'

export default function Projects() {
    const [selected, setSelected] = useState('Todos')
    const { t } = useTranslation()

    const categories = [
        t("projects.categoryOne"),
        t("projects.categoryTwo"),
        t("projects.categoryThree"),
        t("projects.categoryFour"),
    ]

    const filterProjects = selected === 'Todos' ? projects :
    projects.filter(
        (item) => item.category === selected
    )

    return(
        <>
            <Header/>
            <main className='mt-52'>
                <section aria-label='Projetos' className='pb-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title={t("projects.title")} subtitle={t("projects.subTitle")}/>
                            <div className='flex flex-col gap-8'>
                                <div className='flex gap-4'>
                                    {categories.map((category) => (
                                        <CategoryButton
                                            key={category}
                                            label={category}
                                            active={selected === category}
                                            onClick={() => setSelected (category)}
                                        />
                                    ))}
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {filterProjects.map((item) => (
                                        <div key={item.id} className='group overflow-hidden rounded-2xl'>
                                            <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                                <img src={item.image} alt="Imagem do projeto" className='w-full transition-transform duration-700 ease-out group-hover:scale-105'/>
                                            </a>
                                        </div>
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