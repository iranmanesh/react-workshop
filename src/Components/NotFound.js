import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () =>(
    <div>
        <p>Not Found</p>
        <Link to='/'>Go Back</Link>
    </div>
)

export default NotFound;