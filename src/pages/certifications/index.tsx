import Header from '@components/header'
import Layout from '@components/layout'
import Title from '@components/title'
import { useState } from 'react'
import { certifications } from '@data/certifications.data'
import CategoryButton from '@components/categoryButton'
import Footer from '@components/footer'

export default function Certifications() {
    const [selected, setSelected] = useState('Todos')

    const categories = [
        'Todos',
        'UI/UX Design',
        'Front-End',
        'Imersão',
    ]

    const filteredCertifications = selected === 'Todos' ? certifications : certifications.filter(
        (item) => item.category === selected
    )

    return(
        <>
            <Header/>
            <main className='mt-52'>
                <section aria-label='Certificações' className='pb-24'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title='minhas certificações' subtitle='Algumas das minhas conquistas.'/>
                            <div className='flex flex-col gap-8'>
                                <div className='flex gap-4'>
                                    {categories.map((category) => (
                                        <CategoryButton
                                            key={category}
                                            label={category}
                                            active={selected === category}
                                            onClick={() => setSelected(category)}
                                        />
                                    ))}
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {filteredCertifications.map((item) => (
                                        <div key={item.id} className='group overflow-hidden rounded-2xl'>
                                            <a href={item.file} target='_blank' rel='noopener noreferrer'>
                                                <img src={item.image} alt="Imagem do certificado" className='w-full transition-transform duration-700 ease-out group-hover:scale-105'/>
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