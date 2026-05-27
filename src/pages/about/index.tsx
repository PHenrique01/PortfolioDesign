import Header from '@components/header'
import Layout from '@components/layout'
import Title from '@components/title'
import ProjetosImg from '@assets/images/image-4.png'
import Card from '@components/card'
import LogoOne from '@assets/logo/logo-1.svg'
import LogoTwo from '@assets/logo/logo-2.svg'
import Footer from '@components/footer'

export default function About() {
    return(
        <>
            <Header/>
            <main className='mt-52'>
                <section aria-label='seção sobre' className='mb-28'>
                    <Layout>
                        <div className='grid grid-cols-2 gap-12'>
                            <div className='flex flex-col gap-4'>
                                <Title title='minha trajetória no design' subtitle='Aprendendo, criando e evoluindo através de experiência digitais.'/>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-grey-100'>
                                        Meu interesse por UI/UX começou ainda no ensino médio técnico, durante uma disciplina voltada ao design. Apensar de não ser um conteúdo aprofundado, foi nesse momento que tive o primeiro contato com o universo do design e passei a criar pequenas interfaces.
                                    </p>
                                    <p className='text-grey-100'>
                                        Ao ingressar na faculdade, compreendi a importância de planejar bem os projetos antes do desenvolvimento. Em algumas disciplinas, comecei a criar protótipos para estruturar melhor as ideias antes de transformá-las em produtos funcionais, o que fortaleceu ainda mais meu interesse por UI/UX.
                                    </p>
                                    <p className='text-grey-100'>
                                        Desde então, venho me dedicando a cursos na área de UI/UX Design com o objetivo de aprimorar minhas habilidades e conhecimentos. Atualmente, continuo em constante aprendizado e evolução.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <img src={ProjetosImg} alt="Imagens de projetos"/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção experiência profissional' className='py-28'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title='experiência profissional' subtitle='Entre código, interfaces e experiência do usuário.'/>
                            <div className='flex flex-col gap-6'>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title='RotaOnco | agost de 2025 - out de 2025 (Freelancer)' subtitle='Responsável pelo Design UI/UX' list={["Pesquisa de referência visuais e funcionais", "Criação de wireframes para definição perfis de usuários (médicos, paciente e adm do gerenciador).", "Protótipos de alta fidelidade para app e gerenciador, garantindo experiência intuitiva."]}/>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title='EquipeWT | jul de 2025 - agost de 2025 (Freelancer)' subtitle='Responsável pelo Design UI/UX' list={["Pesquisa de referência visuais e funcionais.", "Criação de wireframes para definição da estrutura do site.", "Desenvolvimento do layout e protótipos de alta fidelidade."]}/>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title='Sistema Fiea | out de 2024 - jun de 2025 (Estágio)' subtitle='Estágio em Design UI/UX' list={["Atuação em parceria com outro designer no desenvolvimento de interfaces para sistemas internos.", "Criação de wireframes e protótipos de alta fidelidade no Figma.", "Participação em todo o processo de design, do planejamento à prototipação.", "Aprofundamento em UX e UI Design, com foco na experiência do usuário e na construção visual das interfaces."]}/>
                                <Card nameClasse='bg-grey-500 p-6 rounded-2xl' title='Sistema Fiea | jul de 2024 - set de 2024 (Estágio)' subtitle='Estágio em Desenvolvimento Front' list={["Colaboração com a equipe no desenvolvimento do front-end de um sistema interno.", "Participação em prática de desenvolvimento ágil, como sprints, dailies e retrospectivas.", "Aprimoramento dos conhecimentos técnicos em front-end durante o estágio.", "Experiência prática em trabalho em equipe e aplicação de metodologias ágeis."]}/>
                            </div>
                        </div>
                    </Layout>
                </section>
                <section aria-label='seção minha formação' className='py-28'>
                    <Layout>
                        <div className='flex flex-col gap-12'>
                            <Title title='minha formação' subtitle='Caminho de estudos e aprendizado.'/>
                            <div className='flex flex-col gap-6'>
                                <Card nameClasse='items-center' image={LogoOne} title='Centro Universitário - CESMAC' subtitle='Sistemas de Informação | 2021.2 - 2025.1' variant='row'/>
                                <Card nameClasse='items-center' image={LogoTwo} title='Centro de Educação e Tecnologia Sesi Senai' subtitle='Ensino Médio Técnico em Informatica para Internet | 2019 - 2021' variant='row'/>
                            </div>
                        </div>
                    </Layout>
                </section>
            </main>
            <Footer/>
        </>
    )
}