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
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={LayoutIcon} title='Interface do Usuário' description='Criação de interfaces modernas, organizadas e funcionais, com foco em estética e usabilidade para experiências digitais claras e consistentes.'/>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={BrainIcon} title='Experiência do Usuário' description='Desenvolvimento de soluções centradas no usuário com foco em navegação intuitiva, clareza visual e interações simples e eficientes.'/>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' variant='column' icon={NetworkIcon} title='Prototipação de Interfaces' description='Planejamento de fluxos, wireframes e protótipos navegáveis para transformar ideias em experiências digitais claras e consistentes.'/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção contato' className='py-28'>
                    <Layout>
                        <div>
                            <div className='flex flex-col gap-8'>
                                <Title title='vamos trabalhar juntos' subtitle='Fique à vontade para entrar em contato para dúvidas, oportunidades ou ideais. Estou sempre aberto a novas conversas e colaboração em design.' variant='lg'/>
                                <div>
                                    <ul className="flex list-disc marker:text-white pl-4 gap-8">
                                        <li><a href="#" className='text-white text-lg'>LinkedIn</a></li>
                                        <li><a href="#" className='text-white text-lg'>Behance</a></li>
                                        <li><a href="#" className='text-white text-lg'>Github</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </section>
            </main>
        </>
    )
}