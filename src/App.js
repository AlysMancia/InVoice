import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './App.css';
// COLOR: #EBD6FB
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style= {{backgroundColor:'#EBD6FB'}}>
      <div className="container-fluid">
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} /></button>
          </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlink">
              <li className="nav-link active " href="#">Home</li>
              <li className="nav-link active" href="#">About</li>
              <li className="nav-link active" href="#">Products</li>
              <li className="nav-link active" href="#">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
