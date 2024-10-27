const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {" "}
        <a className="navbar-brand navbar-logo" href="#">
          {" "}
          <img src="/src/assets/logo.png" alt="logo" className="logo-1" />{" "}
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
          {" "}
          <span className="fas fa-bars"></span>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="" data-scroll-nav="0">
                Početna
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#" data-scroll-nav="1">
                O aplikaciji
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#" data-scroll-nav="2">
                Značajke
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#" data-scroll-nav="3">
                Tim
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#" data-scroll-nav="5">
                Najčešća pitanja
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#" data-scroll-nav="6">
                Kontak informacije
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
