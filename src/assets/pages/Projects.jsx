import React from 'react'
import ProjectsCard from '../components/Projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

function Projects() {
  const peojects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      image2: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
    }
  ]
gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.projectGrid',{
      height:'100px',
      stagger:{
        amount:0.2
      },
      scrollTrigger:{
        trigger:'.allProjects',
        start:'top 100%',
        end:'top -150%',
        scrub:true,
      }
    })
  })
  return (
    <div className=' px-3'>
      <h2 className='md:pt-60 pt-30 text-[13vw] uppercase font-[font1]'>Projets</h2>
      <div className='md:-mt-17 -mt-5 allProjects'>
        {
          peojects.map(function (elem, idx) {
            return <div key={idx} className='projectGrid grid md:grid-cols-2 h-140 gap-3 mt-3'>
              <ProjectsCard image1={elem.image1} image2={elem.image2}/>
            </div> 
          })
        }
      </div>
    </div>
  )
}

export default Projects