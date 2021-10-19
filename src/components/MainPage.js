import '../App.css';
import React from 'react';

import { Contact, Home, Project }  from '.';


function Page() {
    return(
        <div>
            <Home/>
            <Project/>
            <Contact/>
        </div>

    )
}

export default Page;