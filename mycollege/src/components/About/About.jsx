import React from 'react'
import './About.css'

import ReactPlayer from 'react-player'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <ReactPlayer controls url='https://youtu.be/50EdqP5ypjU?si=jg4PIQT_Q4rxv8ZU' />
          
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>B. P. Poddar Institute of Management and Technology</h2>
            <p>
B. P. Poddar Institute of Management and Technology or BPPIMT is an undergraduate college in West Bengal, India. It was established in 1999 by B.P. Poddar Foundation for Education. It ranks as one of the best engineering colleges in Kolkata, West Bengal under WBJEE. The college is affiliated with Maulana Abul Kalam Azad University of Technology[1] and all the programmes are approved by the All India Council for Technical Education and the courses C.S.E., E.C.E., E.E., I.T. are accredited by NBA (National Board of Accreditation). </p>
    </div>
    </div>
  )
}

export default About
