import {NavLink} from 'react-router-dom';
import "../../Stylesheet/Navbar.css"

const Navbar = ()=>{

    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-warning navbar-img rounded-3">
            <div className="container-fluid">
                <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className='text-primary fw-bold'
                style={{textDecoration:"none"}}
              >
                <i className="bi bi-windows"></i>&nbsp;<strong>Learn React</strong>
              </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active fw-bold" to={"/"}  data-testid="home"><i className="bi bi-house-door-fill"></i>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold" to={"/list"}  data-testid="list"><i className="bi bi-list-stars"></i>List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold" to={"/signin"} data-testid="signin"><i className="bi bi-box-arrow-in-right"></i>SignIn</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link fw-bold" to={"/signup"} data-testid="signup"><i className="bi bi-r-circle"></i>Sign Up</NavLink>
                    </li>
                    <li className="nav-item">
                        <i title="Ramashankar Kumar" className="bi bi-person-circle nav-link fw-bold" ></i>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    </>
 )
}

export default Navbar;