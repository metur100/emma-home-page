import React from "react";

const About: React.FC = () => (
  <section className="about section-padding prelative" data-scroll-index="1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="sectioner-header text-center">
            <h3>O aplikaciji</h3>
            <span className="line"></span>
            <p>
              Naša platforma je dizajnirana kako bi pojednostavila upravljanje
              logistikom fokusirajući se na tri ključna elementa:
            </p>
          </div>
          <div className="section-content text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  {" "}
                  <i className="fa fa-life-ring" aria-hidden="true"></i>
                  <h5>Teret</h5>
                  <p>
                    Jednostavno upravljajte i objavite ponude za teret s
                    detaljnim specifikacijama. Pronađite savršenu uslugu za svoj
                    teret i osigurajte siguran proces isporuke.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  {" "}
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <h5>Vozilo</h5>
                  <p>
                    Bez napora unesite svoja dostupna vozila i pretražujte
                    transportne prilike. Ostanite u toku s detaljima vozila i
                    brzo pronađite odgovarajući teret.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-box wow fadeInUp" data-wow-delay="0.6s">
                  {" "}
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  <h5>Transport</h5>
                  <p>
                    Povežite teret sa uslugama transporta bez poteškoća.
                    Odaberite iz različitih opcija kako bi vaš teret stigao na
                    odredište na vrijeme i sigurno.
                  </p>
                </div>
              </div>
            </div>
            <a href="#" className="about-btn">
              Saznaj više
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
