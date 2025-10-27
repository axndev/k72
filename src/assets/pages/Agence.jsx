import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
function Agence() {
  const imageDiv = useRef(null);
  const imageCurrent = useRef('./../../public/images/1.jpg');
  const images = [
    "../../../public/images/1.jpg",
    "../../../public/images/2.jpg",
    "../../../public/images/3.jpg",
    "../../../public/images/4.jpg",
    "../../../public/images/5.jpg",
    "../../../public/images/6.jpg",
  ]
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        start: 'top 25%',
        end: 'top -170%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.round(elem.progress * images.length)

          } else {
            imageIndex = images.length - 1
          }
          imageCurrent.current.src = images[imageIndex]
        }
      }
    })
  })
  return (
    <div className='py-1'>
      <div ref={imageDiv} className='absolute rounded-2xl overflow-hidden w-[18vw] top-40 left-[30vw]'>
        <img ref={imageCurrent} src="../../../public/images/1.jpg" alt="" />
      </div>
      <div className='font-[font1] mt-[50vh] relative pb-80'>
        <h1 className='font-[font2] uppercase text-[19vw] text-center leading-[17vw]'>Soixan7e Douze</h1>
        <div className='text-6xl pl-[40vw]'>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
      </div>
    </div>
  )
}

export default Agence