import React from 'react';

const Download: React.FC = () => {
  return (
    <section className="download section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center white">
              <h3>Aplikacija</h3>
              <span className="line"></span>
              <p className="white">
                Skini našu aplikaciju ili koristi je putem web browser-a
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section-content text-center">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="src/assets/appstore.png"
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                      alt="Download on App Store"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="src/assets/playstore.png"
                      className="wow fadeInUp"
                      data-wow-delay="0.7s"
                      alt="Download on Google Play"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
