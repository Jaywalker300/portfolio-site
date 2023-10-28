import React from 'react'
import './Portfolio.css'
import Item1 from '../../assets/Portfolio items/item-1.jpg'
import Item2 from '../../assets/Portfolio items/Article Summarizer.jpg'
import Item3 from '../../assets//Portfolio items/item-3.jpg'
import Item4 from '../../assets/Portfolio items/item-4.png'
import Item5 from '../../assets/Portfolio items/item-5.jpg'
import Item6 from '../../assets/Portfolio items/item-6.jpg'
import Item7 from '../../assets/Portfolio items/item-7.jpg'


/* array map item method */

const data = [
      
  {

    id:1,
    image:Item1,
    title: 'Car rental web application built with NextJS',
    github: 'https://github.com/Jaywalker300/CAR-SHOWCASE',
    demo: 'https://car-showcase-5gao.vercel.app/',
   },
  {

    id:2,
    image:Item2,
    title: 'An Article summarizer built with OpenAI-GPT',
    github: 'https://jay-ai-summarizer.netlify.app/',
    demo: 'https://github.com/Jaywalker300/summarizer-ai-gpt.git',
   },
   
   {
     
     id:3,
     image:Item3,
     title: 'Restaurant Menu Page',
     github: 'https://github.com/Jaywalker300/menu-page',
     demo: 'https://jaywalker300.github.io/menu-page/',
    
   },

   {

    id:4,
    image:Item4,
    title: 'Skysurf Surf Tours Page',
    github: 'https://github.com/Jaywalker300/skysurf-tour-SPA',
    demo: ' https://jaywalker300.github.io/skysurf-tour-SPA/',
    
   },
     
   {

    id:5,
    image:Item5,
    title: 'Stripe Online Payment Landing page',
    github: 'https://github.com/Jaywalker300/stripe-menu',
    demo: ' https://jaywalker300.github.io/stripe-menu/',
   },

    {

    id:6,
    image:Item6,
    title: 'Cocktail Database Demo',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },


    {
      id:7,
      image:Item7,
      title: 'An AI Saas Page built with Next 13, Prisma, Tailwind, Typescript and shadcn for ui components',
      github: 'https://github.com/Jaywalker300/sabiguy-saas-app',
      demo: 'https://sabiguy-saas-qqvarfl65-jaywalker300.vercel.app',
    },
   
 ]


const portfolio = () => {
  return (
   <section id='Portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

     {
      data.map(({id, image, title, github, demo })=>{
        return(
         <>

            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='https://github.com/Jaywalker300/'>Github</a>
                  <a href={demo} className='btn btn-primary' target='https://github.com/Jaywalker300/pages'>Live Demo</a>
                  
                 
                  
                  </div>
              </article>
              </> 
        )
      })
        


     }

      </div>
    </section>
  )
}

export default portfolio