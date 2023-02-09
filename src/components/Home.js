import React from 'react'
import profile from '../assets/profile.jpg'
import { Link } from 'react-scroll'

const Home = () => {

    return (
        <div id='home'>
                <div className="introduction">
                    <img src={profile} alt="" className="profileImg " />
                    <h1>Hi , I am Mehul Parekh</h1>
                    <h5> Undergrad Student </h5>
                    <p > As a highly motivated individual with a passion for technology, I am excited to share my portfolio with you.<br /> My main areas of interest are web development, data science, machine learning, and UI/UX design with Figma. <br /> I am constantly seeking new challenges and opportunities to further develop my skills and knowledge in these fields. </p>
                    <Link to='projects' smooth duration={300} className='btn'>Portfolio <i className="fa-solid fa-arrow-right"></i></Link>

            </div>

        </div>
    )
}

export default Home
