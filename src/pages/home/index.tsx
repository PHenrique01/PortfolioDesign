import Header from '@components/header'
import Layout from '@components/layout'
import HeroImg from '@assets/background/bg-hero.svg'

export default function Home() {
    return(
        <>
            <Header/>
            <main className='mt-52'>
                <section aria-label='seção hero'>
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

            </main>
        </>
    )
}