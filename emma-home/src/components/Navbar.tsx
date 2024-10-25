import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand navbar-logo" href="#">
          <img src="src/assets/logo.png" alt="logo" className="logo-1" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">O aplikaciji</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Znacajke</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Tim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">Najcesca pitanja</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Kontak informacije</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
