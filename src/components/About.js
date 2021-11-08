import React from 'react';
import  Image  from '../assets/kevin.jpg'
import './About.css'

function About() {

    return (
        <section id = "about">
            <div className = "space"></div>
            <div className  = "content-about" data-aos="fade-up">
                <h2 className="about-title">À propos de moi</h2>
                <div className="info-about">
                    <div className = "info-about-image">
                        <img src={Image} alt="Kevin Almeida" className="img-me"/>
                    </div>
                    <p className   = "info-about-text">
                        <div>
                        Âgé de 24 ans, je suis étudiant à la Tech & Code Factory.
                        <br/> <br/>
                        Après quelques formations d'une cinquantaine d'heures sur différents langages et frameworks tel que
                        React, Php, Python, Java, mySQL, Angular, C. J'ai décider de devenir développeur web front-end.
                        <br/> <br/>
                        Je suis ouvert à tout apprentissage, très investi dans mon travail et je prends grand plaisir à l'exercer.
                        </div>
                    </p>
                </div>
            </div>
            <div className = "space"></div>
        </section>
    )
}

export default About;
