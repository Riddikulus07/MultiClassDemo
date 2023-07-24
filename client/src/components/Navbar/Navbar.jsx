import './Navbar.scss'
import config from '../../config.json'

const Navbar = ()=>{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            {
              config.entities.map((e)=>{
                return <a className="nav-link active" href={`/${e.name}`} key={`/${e.name}`}>{e.altName}</a>
              })
            }
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;