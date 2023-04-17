import React from 'react'
import { Box } from '@mui/material'
import "./aboutPerso.scss"
import htmlIcone from "../../assets/img/🦆 icon _html5_.png"
import cssIcone from "../../assets/img/🦆 icon _css3_.png"
import TechnoContainer from './TechnoContainer'

function AboutPerso() {
    const technos= [
        {
            id:1,
            name:"html",
            imageTechno:htmlIcone,
        },
        {
            id:2,
            name:"css",
            imageTechno:cssIcone,
        },
        {
            id:3,
            name:"javascript",
            imageTechno:htmlIcone,
        },
    ]
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
        <h1 className='apropos'>A Propos de moi</h1>
        <div className='presentation'>
            <p>
            Je suis avant tout un passionné. Passionné de découvrir de nouveau languages informatique, passionné dans le fait même d'apprendre. C'est cette passion qui fait de moi un véritable couteau suisse dans la crétation et le développement d'application web. HTML, CSS et javascript sont à ce jour des languages qui ont très peu de secret pour moi. Bien évidemment, l'univers du web étant en évolution perpétuelle, il me reste toujours de nouvelles chose à découvrir.
            Le travail en équipe ne m'est pas inconnu et je suis toujours à l'écoute des remarques de ceux avec qui je travaille. Ainsi les projets que j'ai réalisé au cours de ma formation chez OpenClassrooms reflète de ma tenacité quant à l'aboutissement d'une fonctionnalité que j'ai à implémenter, mais témoigne également d'un travail de qualité que je suis en mesure de rendre dans des délais impartis. Aussi, si vous me faites confiance dans la réalisation de vos projets, soyez assuré des maîtres-mots suivants : "Qualité et Délais".
            </p>
        </div>
        <div className='technos'>
          <h1>Les technos que je maitrise</h1>
          <div className='techno-container'>
            {
                technos.map((techno)=>(
                    <TechnoContainer key={techno.id} name={techno.name} technoPic={techno.imageTechno}/>
                ))
            }
          </div>
        </div>
    </Box>    
  )
}

export default AboutPerso