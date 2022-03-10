import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (getnews) => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><strong>Short-News</strong></a>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}
              {/* <span className="navbar-toggler-icon"></span> */}
            {/* </button> */}
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginBottom:"0px"}}>
              <div className="navbar-nav" >
                <b><Link className="nav-link" aria-current="page" to="/" style={{marginLeft:"265px"}}>Home</Link></b>
                                            {/* Navigate the path */}
                <b><li className="nav-item"><Link onClick={getnews}  className='nav-link' to='/general'>General</Link></li></b>
                <b><li className="nav-item"><Link onClick={getnews} className='nav-link' to='/business'>Business</Link></li></b>
                <b><li className="nav-item"><Link onClick={getnews} className='nav-link' to='/science'>Scienece</Link></li></b>
                <b><li className="nav-item"><Link onClick={getnews} className='nav-link' to='/technology'>Tecgnology</Link></li></b>
                <b><li className="nav-item"><Link onClick={getnews} className='nav-link' to='/health'>Health</Link></li></b>
                <b><li className="nav-item"><Link onClick={getnews} className='nav-link' to='/sports'>Sports</Link></li></b>

              </div>
            </div>
            {/* </div> */}
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar