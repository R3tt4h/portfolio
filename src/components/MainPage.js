import React from 'react';
import { Contact, Home, Project, About }  from '.';


function Page() {

    /**
     * Apparition au défilement 
     * Ajout d'une classe lorsque l'élément deviendra visible dans la page. 
     * Pour détecter quand l'élément rentre dans la zone d'affichage on 
     * utilise l'API intersection observer.
     * */

    const threshold = 0.1
    const options = {
        root: null,
        rootMargin: '0px',
        threshold
    }

    const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
        }
    })
    }

    window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleIntersect, options)
    const targets = document.querySelectorAll('.reveal')
    targets.forEach(function (target) {
        observer.observe(target)
    })
    })
    
    return(
        <div>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
        </div>

    )
}

export default Page;