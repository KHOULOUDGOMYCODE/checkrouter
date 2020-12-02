import React from 'react'

import {Link} from 'react-router-dom'

function Desc(props) {
    const description = props.location.state

    return (
        <div>
           <h2>Description</h2>

           <h4>{description}</h4> 


    <div className='home'><Link to='/'>back home</Link></div>
        </div>

    )
}

export default Desc