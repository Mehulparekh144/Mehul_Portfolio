import React from 'react'

import D1 from '../assets/D1.jpg'
import D2 from '../assets/D2.jpg'
import D3 from '../assets/D3.png'

const Projects = () => {

    const projects = [
        {
            id: '1',
            title: 'Music Recommendation System',
            description: 'This project involved creating a system that could recommend music to users based on their current mood. We were responsible for designing and implementing the recommendation system, as well as integrating machine learning techniques to analyse and understand user moods. We used Spotify API for generating songs dataset, Machine learning libraries of python for model development and Django for website development.',
            link: 'https://github.com/harsh08git/MusicLab'

        },
        {
            id: '2',
            title: 'Medical Website',
            description: "This project involved working with a team to develop a website that could provide useful information and resources for patients and healthcare professionals. We were responsible for designing and implementing the website's features and functionality, which including enclosing  all of the medical information inside a QR Code so that doctors can have information of the patient on scanning that QR.",
            link: 'https://github.com/Mehulparekh144/MedWay'

        },
        {
            id: '3',
            title: 'NoteBook App',
            description: 'A Notebook application built using the MERN stack (MongoDB, Express, React, and Node.js) is a web-based application that allows users to create and manage notes, journals, or any form of text-based content.',
            link: 'https://github.com/Mehulparekh144/React-NoteBookApp'

        },


    ]

    const designs = [
        {
            id : '1',
            title : 'Ecommerce Spice Platform Mockup',
            image : D1,
            link : 'https://www.figma.com/file/v3GdIVU6e8aCvbtXffeSur/Ecommerce?node-id=0%3A1&t=AaB2lCySZu45kE3T-1'
        },
        {
            id : '2',
            title : 'Tech Blogs Mockup',
            image : D2,
            link :'https://www.figma.com/file/MDnV0dPRPYbBA3VUq7U1qw/Tech-Blogs?node-id=2%3A2&t=pdWz3OIr0jvpthqe-1'
        },
        {
            id : '3',
            title : 'Payment Application',
            image : D3,
            link : 'https://www.figma.com/file/m8HbtaZxViFTjXALe1UAQq/Payment-App?node-id=6%3A764&t=T7ABWcdR3YHI4mFY-1'
        },
    ]

    return (
        <div id='projects'>
            <div className="container1">
                <h2 style={{
                    color:
                        "white",
                    fontFamily:"Comfortaa",
                }}>Projects</h2>
                <h4 style={{
                    color:
                        "white"
                    , margin: ' 1.2rem 1.2rem 0.5rem 1.2rem'
                }}>Coding</h4>
                <div className="projectDiv d-flex flex-row">

                    {projects.map(project => (
                        <div key={project.id} className="project card">
                            <div className="card-body" >
                                <h5 className="projectTitle card-title">{project.title}</h5>
                                <p className="projectDesc card-text">{project.description}</p>
                                <button className="btn projectBtn" ><a href={project.link} target
                                    ="_blank"><i className="fa-brands fa-github"></i> View Code</a></button>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
            <div className="container1">
                <h4 style={{
                    color:
                        "white"
                    , margin: ' 1.2rem 1.2rem 0.5rem 1.2rem'
                }}>Design</h4>
                <div className="projectDiv d-flex flex-row">

                    {designs.map(design => (
                        <div key={design.id} className="project card" >
                            <img src= {design.image} className="card-img-top" alt="..."></img>
                            <div className="card-body" >
                                <h5 className="projectTitle card-title">{design.title}</h5>
                                <button className="btn projectBtn" ><a href={design.link} target
                                    ="_blank"><i className="fa-brands fa-figma"> <br /></i> View Design File</a></button>
                            </div>
                        </div>

                    ))}


                </div>
            </div>


        </div>
    )
}

export default Projects