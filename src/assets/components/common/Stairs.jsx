import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { useRef } from 'react';
import { useLocation } from 'react-router';

function Stairs(props) {
    const currentPath = useLocation().pathname
    const stairsDiv = useRef(null);
    const pageRef = useRef(null)
    
    useGSAP(function () {
        const tl = gsap.timeline();
        tl.to(stairsDiv.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: -0.1
        })
        tl.to('.stair', {
            y: '100%',
            stagger: -0.1
        })
        tl.to(stairsDiv.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })
        gsap.from(pageRef.current,{
            delay:1.3,
            opacity:0,
            scale: 1.3
        })
    }, [currentPath])
    return (
        <>
            <div ref={stairsDiv} className='h-screen w-full fixed z-10 top-0'>
                <div className='h-full flex w-full'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </>
    )
}
export default Stairs