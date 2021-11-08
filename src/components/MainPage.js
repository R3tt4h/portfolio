import { React } from 'react';
import { Contact, Home, Project, About }  from '.';
import AOS from 'aos'
import 'aos/dist/aos.css'



function Page() {
    
    AOS.init();

    
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