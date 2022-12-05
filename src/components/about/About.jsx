import React from 'react'
import './about.css'
import ME from '../../assets/8C86BF1C-A6C8-4693-8E22-8D20D48E994D_1_105_c.jpeg'

const About = () => {
    return (
    <section id="about">
        <h5>Get To Know</h5>
        <h3>About Me</h3>

        <div className="about_container">
            <div className="about__me">
                <img src={ME} alt="about__me-image" />
                </div>
                </div>
                <article className='about__card'>
                    <h5>Experience</h5>
                    <small>General Assembly 12 week Software Engineering Immersive</small>
                    <small>Over 600 hours of front end and back end learning and development</small>

                </article>
                <article className='about__card'>
                    <h5>Experience</h5>
                    <small>1 year working</small>
                    

                </article>
                <article className='about__card'>
                    <h5>Projects</h5>
                    <small>ttt</small>
                    

                </article>
                <p>
                    lorem ipsum
                    </p>


        <a href="#">Work</a>
    </section>
    )
}

export default About
