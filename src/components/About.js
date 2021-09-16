import '../App.css';
import React from 'react';
import Img from '../assets/desk.png'

function About() {
    return (
        <section id="about">
            <div class="content-about">
                <p><strong class="name">Bonjour!</strong><br/><br/>Je suis Kevin Almeida, <br/> développeur web.</p>
                <img class="img-desk" src={Img} alt="img"/>
            </div>
        </section>
    );
  }
  
  export default About;