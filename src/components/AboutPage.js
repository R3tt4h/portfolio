import React from 'react';
import  Image  from '../assets/kevin.jpg'
import './AboutPage.css'

function AboutPage() {
    return (
        <div className         = "container-about">
            <div className     = "info-about">
                <div className = "info-about-image"><img src={Image} alt="Kevin Almeida" className="img-me"/></div>
                <p className   = "info-about-text">
                <h1>À propos de moi :</h1>
                Je m'appelle Kevin Almeida, j'ai 24 ans et je suis étudiant à la Tech & Code Factory.
                <br/><br/>
                Il y a 4 ans, j'ai découvert un livre qui s'appelait "programmer en C", et j'ai vite été captivé par la programmation informatique.
                <br/> <br/>
                Après quelques formations d'une cinquantaine d'heure sur différents langages et frameworks tel que
                React, Php, Symfony, Java, mySQL, Angular, C. J'ai décider de devenir développeur web front-end.
                <br/> <br/>
                Je suis ouvert à tout apprentissage, très investi dans mon travail et je prends grand plaisir à l'exercer.
                <br/> <br/>
                À côté de ça, j'aime faire du sport, apprendre à jouer du piano, 
                faire des rencontres sur Final Fantasy XIV ou bien visionner diverses séries, animés.

                </p>
            </div>
        </div>
    )
}

export default AboutPage;
