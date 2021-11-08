import React from 'react'
import './ProjectCard.css'
import  ImageSailing  from '../assets/sailing.jpg'
import  ImageJoinUs  from '../assets/joinus.jpg'
import  ImageChess  from '../assets/chess.jpg'


function ProjectCard() {

    /**
     * Ajout d'un nouveau projet
     * Créer un nouvelle objet datas, voir ci-dessous.
     */
    const datas = [
        {
            id:1,
            image: `${ImageSailing}`,
            title: "Sailing",
            desc:   `Il s'agit d'une application web permettant aux utilisateurs de réaliser 
                    des paris sur des matchs de League of Legends contre d'autres utilisateurs.`,
            tech: `React, Node(Express), Auth0, Stripe, Riot API, Github`
        },        {
            id:2,
            image: `${ImageJoinUs}`,
            title: "JoinUs!",
            desc:   `Site web permettant à un étudiant de partager un repas 
                    avec d'autres étudiants à l'aide de création d'événement.`,
            tech: `Angular, Github`
        },        {
            id:3,
            image: `${ImageChess}`,
            title: "ChessFriend",
            desc:   `Il s'agit d'une application web permettant aux utilisateurs de 
                    créer ou de rejoindre une partie d'échec, et de discuter entre eux via un chat. 
                    À terme, un ladder sera implémenté.`,
            tech: `React, Firebase`
        },
    ]

    return (
            <div>
                {datas.map(project => (
                <div>
                    <div key={project.id} className = "info-project reveal">
                        <p className="info-project-text">
                            <h2 className="info-project-title"> {project.title} </h2>
                            {project.desc}
                            <br/><br/>
                            <strong>Technologies :</strong> {project.tech}
                        </p>
                        <div>
                            <div className = "toile">
                                <img className="project-image" src={project.image} alt="project"/>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
    )
}

export default ProjectCard
