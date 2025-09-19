import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: "07/2024 - 01/2025",
    title: 'Freelance Frontend Developer, Privalex',
    duration: '7 months',
    details:
      'Built and deployed 3+ full-stack cybersecurity web applications using React, HTML5, CSS3, and JavaScript, serving 500+ daily users. Optimized performance (32% faster load times) via code splitting, lazy loading, and image compression. Collaborated with designers (Figma) to deliver pixel-perfect UIs. Established CI/CD pipeline with GitHub Actions and Netlify, reducing deployment time by 60%. Enhanced SEO and accessibility, improving search rankings by 25%.'
  },
  {
    year: "01/2025 - Present",
    title: 'Programming Instructor, EPC Academy',
    duration: 'Ongoing',
    details:
      'Mentor 15+ students in JavaScript and web development through interactive workshops and coding exercises. Developed curriculum materials and hands-on projects. Provided one-on-one support, resulting in 85% course completion rate. Facilitated group programming sessions and code reviews to promote collaborative learning.'
  },
  {
    year: "05/2020 - 07/2020",
    title: 'CS50 Student, Harvard University (edX)',
    duration: '2 months',
    details:
      'Completed comprehensive computer science curriculum covering algorithms, data structures, memory management, and web development. Developed problem-solving skills through hands-on programming projects and debugging exercises.'
  },
  {
    year: "2025",
    title: 'React & JavaScript Student, Udemy',
    duration: 'Ongoing',
    details:
      'Mastered ES6+ features and built multiple projects demonstrating proficiency in DOM manipulation, asynchronous JavaScript, and modern workflows. Learning advanced React patterns, custom hooks, Context API, useReducer, and exploring Next.js and Redux for state management.'
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
