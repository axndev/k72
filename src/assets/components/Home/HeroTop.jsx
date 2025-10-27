import React from 'react'
import Video from './Video'

function HeroTop() {
    return (
        <div className='text-[9vw] leading-[9vw] pt-3  uppercase font-[font1] text-white flex flex-col justify-center items-center'>
            <div>L'étincelle</div>
            <div className='flex justify-center items-center'>qui
                <div className='w-[16vw] h-[7vw] rounded-full overflow-hidden'>
                    <Video />
                </div>
                génère
            </div>
            <div>la créativité</div>
        </div>
    )
}

export default HeroTop