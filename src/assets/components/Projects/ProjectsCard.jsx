import React from 'react'

function ProjectsCard(props) {
    return (
        <>
            <div className='overflow-hidden hover:rounded-3xl transition-all relative group'>
                <img className='object-cover w-full h-full object-center' src={props.image1} alt="" />
                <div className='absolute opacity-0 group-hover:opacity-100 bg-black/30 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <span className='text-6xl border pt-2 px-5 rounded-full uppercase font-[font2]'>View Project</span>
                </div>
            </div>
            <div className='overflow-hidden hover:rounded-3xl transition-all relative group'>
                <img className='object-cover w-full h-full object-center' src={props.image2} alt="" />
                <div className='absolute opacity-0 group-hover:opacity-100 bg-black/30 top-0 left-0 w-full h-full flex justify-center items-center'>
                    <span className='text-6xl border pt-2 px-5 rounded-full uppercase font-[font2]'>View Project</span>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard