import Head from 'next/head';

import '../styles/main.css';

const Logo = () => (
  <>
    <img src="/logo.png" alt="Logo" width={150} className="p-2 hidden md:inline-block" />
    <img src="/codar.png" alt="Logo" width={50} className="p-2 md:hidden" />
  </>
);

const Menu = () => (
  <div className='p-2 flex items-center'>
    <a href="http://github.com/galter" target="_blank" rel="noopener noreferrer">
      github
    </a>

    <a href="http://github.com/codar.me" target="_blank" rel="noopener noreferrer">
      instagram
    </a>

    <a href="http://youtube.com/galter" target="_blank" rel="noopener noreferrer">
      youtube
    </a>
  </div>
);

const Banner = () => (
  <div className="container max-w-5xl m-auto p-6 flex-1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <span className="text-grey">Criamos a Codar.me para te ajudar a</span>
    <div className="uppercase text-4xl font-extrabold leading-snug">
      Desenvolver <span className="text-green">software</span> de verdade
    </div>
    <span className="text-grey">e se tornar um desenvolvedor acima da média</span>
  </div>
);

const Header = () => (
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
    <Logo />
    <Menu />
  </div>
);

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1"
      style={{ background: 'url(/bg.png) no-repeat center/cover' }}
    >
      <Head>
        <title>Codar.me -  Tailwind + Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div >
  )
}
