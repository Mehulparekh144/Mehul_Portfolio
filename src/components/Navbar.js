import React from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {

    const links = [
        {
            id: '1',
            link: 'home'
        },
        {
            id: '2',
            link: 'skills'
        },
        {
            id: '3',
            link: 'projects'
        },
        
        {
            id: '4',
            link: 'contact'
        },
    ]

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">

                            {links.map(({link , id}) => (
                                <li key={id} className="nav-item" style={{cursor : 'pointer'}}>
                                    <Link className="nav-link" aria-current="page" smooth duration={300} to={link}>{link}</Link>
                                </li>

                            ))}


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
