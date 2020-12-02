import React from 'react'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
function Trailer(props) {
 
    const trailer= props.location.state
    return (
        <div>
     
    <h2>Trailer</h2>
    <div className="video">
    <ReactPlayer url={trailer} />
    </div>
    <div className='home'> <Link to='/'>back home</Link></div>
        </div>

    )
}

export default Trailer