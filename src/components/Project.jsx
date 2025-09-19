import React from 'react'
import ProjectItem from './ProjectItem'
import mealImg from '../../images/meal.jpg'
import ecomerceImg from '../../images/ecomerce.jpg'
import personalImg from '../../images/personal.jpg'
import portfolioImg from '../../images/portfolio.jpg'

const Project = () => {
    return (
        <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>This are the <strong>projects</strong> i have build so far during my process of learning,
                from the begining of my learning about the contents of the browser and what is made up of, up to this point.
                And am always ready to learn new skill and improve the little i know to move on with my career.
            </p>
            <div className='grid sm:grid-cols-2 gap-12' >
                <ProjectItem img={mealImg} title='Educative App' link='https://privalex1.netlify.app/' />
                <ProjectItem img={ecomerceImg} title='Ecomerce App' />
                <ProjectItem img={personalImg} title='Personal App' />
                <ProjectItem img={portfolioImg} title='EpcAcademy' />
            </div>
        </div>
    )
}

export default Project
