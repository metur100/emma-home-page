import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="banner-text">
                <h2 className="white">EMMA Logistics</h2>
                <h6 className="white">Platforma za razmjenu tereta</h6>
                <p className="banner-text white">
                  Dobrodošli na našu Platformu za Razmjenu Tereta, gdje
                  povezujemo klijente s pouzdanim transportnim opcijama za
                  njihove potrebe prijevoza.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://kind-sand-03c376003.5.azurestaticapps.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="src/assets/web4.png"
                        alt="Web browser"
                        className="wow fadeInUp"
                        data-wow-delay="0.4s"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="src/assets/preuzmi.png"
                        alt="Play Store"
                        className="wow fadeInUp"
                        data-wow-delay="0.7s"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <img
                src="src/assets/iphone-screen.png"
                alt="iPhone Screen"
                className="img-fluid wow fadeInUp"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Corrected to img tag for the SVG wave */}
      <span className="svg-wave"></span>
    </section>
  );
};

export default Banner;
