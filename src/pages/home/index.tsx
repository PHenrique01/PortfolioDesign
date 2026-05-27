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


export default function Home() {
    const stats = [
        {
            number: "1+",
            label: "Anos de experiência",
        },
        {
            number: "10+",
            label: "Projetos UI/UX",
        },
        {
            number: "5+",
            label: "Projetos publicados",
        },
        {
            number: "100+",
            label: "Horas de aprendizado",
        },
    ]

    const [selected, setSelected] = useState("Geral");

    return(
        <>
            <Header/>
            <main className='mt-52'>
                <section aria-label='seção hero' className='mb-64'>
                    <img src={HeroImg} alt="" className='absolute inset-0 w-full h-full object-cover -z-10'/>
                    <Layout>
                        <div className='select-none'>
                            <div className='flex flex-col items-center gap-2'>
                                <h1 className="text-white text-8xl">Paulo Henrique</h1>
                                <ul className="flex items-center gap-4">
                                    <li className="text-grey-400 text-lg uppercase">ui/ux designer</li>
                                    <li className="text-grey-400 text-lg uppercase">protótipo</li>
                                    <li className="text-grey-400 text-lg uppercase">design system</li>
                                    <li className="text-grey-400 text-lg uppercase">figma</li>
                                </ul>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção stats' className='my-20'>
                    <Layout>
                        <div className='flex justify-between'>
                            {stats.map((stat) => (
                                <StateItem key={stat.label} number={stat.number} label={stat.label}/>
                            ))}
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção projetos em destaque' className='py-28'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title='projetos em destaque' subtitle='Alguns dos principais trabalhos desenvolvidos.'/>
                            <div className='flex flex-col gap-6'>
                                <ProjectCard image={JackTheJumperImg} title='Jack The Jumper' href='#'/>
                                <ProjectCard image={ImersivaMedImg} title='ImersivaMed' href='#'/>
                                <ProjectCard image={RotaOncoImg} title='RotaOnco' href='#'/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção design em prática' className='py-28'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title='design em prática' subtitle='Design aplicado em projetos reais'/>
                            <div className='flex gap-6'>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={LayoutIcon} title='Interface do Usuário' description='Criação de interfaces modernas, organizadas e funcionais, com foco em estética e usabilidade para experiências digitais claras e consistentes.'/>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={BrainIcon} title='Experiência do Usuário' description='Desenvolvimento de soluções centradas no usuário com foco em navegação intuitiva, clareza visual e interações simples e eficientes.'/>
                                <Card animated nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={NetworkIcon} title='Prototipação de Interfaces' description='Planejamento de fluxos, wireframes e protótipos navegáveis para transformar ideias em experiências digitais claras e consistentes.'/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção contato' className='py-28'>
                    <Layout>
                        <div className='grid grid-cols-2 items-start gap-12'>
                            <div className='flex flex-col gap-8'>
                                <Title title='vamos trabalhar juntos' subtitle='Fique à vontade para entrar em contato para dúvidas, oportunidades ou ideais. Estou sempre aberto a novas conversas e colaboração em design.' nameClasse='max-w-[414px]' variant='lg'/>
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
                                    <CategoryButton label='Geral' active={selected === "Geral"} onClick={() => setSelected("Geral")}/>
                                    <CategoryButton label='Projeto' active={selected === "Projeto"} onClick={() => setSelected("Projeto")}/>
                                    <CategoryButton label='Parceria' active={selected === "Parceria"} onClick={() => setSelected("Parceria")}/>
                                    <CategoryButton label='Outro' active={selected === "Outro"} onClick={() => setSelected("Outro")}/>
                                </div>
                                <div>
                                    <form action="" className='flex flex-col gap-8'>
                                        <Input label='Nome' placeholder='Seu nome'/>
                                        <Input label='Email' placeholder='Seu email'/>
                                        <Input label='Mensagem' placeholder='Como posso ajudar?'/>
                                        <button type='submit' className='text-white font-medium py-4 rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-grey-700 cursor-pointer'>Enviar mensagem</button>
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