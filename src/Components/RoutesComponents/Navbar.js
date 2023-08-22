import {NavLink} from 'react-router-dom';

const Navbar = ()=>{

    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <div className="container-fluid">
                <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className='text-sucess'
              >
                Learn React
              </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" to={"/"}  data-testid="home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/list"}  data-testid="list">List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={"/signin"} data-testid="signin">SignIn</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    </>
 )
}

export default Navbar;