import React from 'react'

const Skills = () => {
  return (
    <div>
        
        <div className='skill' id='skills'>
            <div className="skillHeading h2">Skills</div>
            <div className="row">
                <div className="skillBox col-sm-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="skillTitle card-title">Languages</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">Javascript</li>
                                <li className="list-group-item">C</li>
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skillBox col-sm-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="skillTitle card-title">Frameworks & Libraries</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Django</li>
                                <li className="list-group-item">ReactJS</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">Sklearn</li>
                                <li className="list-group-item">ExpressJS</li>
                                <li className="list-group-item">NodeJS</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">TailWind</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skillBox col-sm-4">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="skillTitle card-title">Tools</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Figma</li>
                                <li className="list-group-item">ArcGIS</li>
                                <li className="list-group-item">Microsoft Office</li>
                                <li className="list-group-item">Adobe Illustrator</li>
                                <li className="list-group-item">Canva</li>
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Skills
