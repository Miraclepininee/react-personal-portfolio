import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2019,
    title: 'Video Editor',
    duration: '3 years',
    details:
      'I learned video editing the year 2020 which was my first <em>Tect Skill</em> in the tech industries and without any ideal of how the computer operate and what it can do and i thought that was the best thing to do as a young boy who love technology from the age of 13 trying to know what really computer is made up of, and why is everything working the way it is, and how was it done.'
  },
  {
    year: 2020,
    title: 'Youtuber',
    duration: '2 years',
    details: 'I was really interested in learning about youtube and search engine because i spend most of my time watching other peoples videos and they edited it, and they make money from it also not just editing the videos and leave it in the local machine, but exposing it to the world what they are good at doing, then i took a step to learn how to be a Youtuber and not just but also good at it, like others. '
  },
  {
    year: 2021,
    title: 'Facebook',
    duration: '1 year',
    details: '2021 I realise that facebook was one of the largest wedsite or application with the highest users in the world i had advice myself that <em>what is the advantage of using facebookin my feed</em> and <strong>what problem it solve for me and my career </strong>, e.g what is the problem i have that facebook can help me solve properly an give me the result a looking for in the little skill i have at hand at the moment.'
  },
  {
    year: 2022,
    title: 'Web development',
    duration: '3 years',
    details: 'I thought web development was easy i never knew there was hidden history untold about the web, i had a strong desire to be a developer thinking it was just <em>HTML, CSS, JAVASCRIPT </em>that was needed and nothing more until i finish html, css, javascript, and i was introduce to node.js i was like what i happening and what is this thing called node self from no where  and is this even use for, and at this stage i recieve a laptop on the process of consistent practice on a sunday night when i was going out of the door post my laptop bag cut and my laptop was inside everythng hit the ground, the screen went blank'
  }
]
const Work = () => {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {
        data.map((item, idx) => (
        <WorkItem 
        key={idx} 
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details} />
        )
        )
       }
    </div>
  )
}


export default Work
