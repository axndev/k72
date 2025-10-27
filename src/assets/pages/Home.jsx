import React from 'react'
import Video from '../components/Home/Video'
import HeroTop from '../components/Home/HeroTop'
import HeroBottom from '../components/Home/HeroBottom'
function Home() {
    return (
        <>
            <div className='relative min-h-screen flex flex-col justify-center items-center'>
                <HeroTop />
                <p className="font-[font2] mb-5 p-5  pt-0 text-white max-w-100 ml-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
                <HeroBottom />
            </div>
            <div className='-z-1 h-full w-full fixed top-0 bottom-0'>
                <Video />
            </div>
        </>
    )
}

export default Home