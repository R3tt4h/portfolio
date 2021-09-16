import '../App.css';
import React from 'react';

import { About, Contact, Project }  from '.';


function Page() {
    return(
        <div>
            <About/>
            <Project/>
            <Contact/>
        </div>

    )
}

export default Page;