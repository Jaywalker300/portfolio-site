import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

 const Experience = () => {
  return (
    <section id='Experience'>
      <h5>My Digital Superpowers</h5>
      <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
           
            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React Native</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            </div>
          </div>
          {/* End of frontend   */}

          <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Next.js</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              < BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PYTHON</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Experience