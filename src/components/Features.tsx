import React from "react";

const Features: React.FC = () => (
  <section className="feature section-padding" data-scroll-index="2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="sectioner-header text-center">
            <h3>Znacajke</h3>
            <span className="line"></span>
            <p>
              Ovo su neke od ključnih karakteristika koje izdvajaju našu
              platformu:
            </p>
          </div>
          <div className="section-content text-center">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="media-body text-right media-right-margin">
                    <h5>Jednostavno Objavljivanje Tereta</h5>
                    <p>
                      Brzo kreirajte i upravljajte ponudama za teret s detaljnim
                      informacijama kako biste privukli odgovarajuće transportne
                      partnere.
                    </p>
                  </div>
                  <div className="media-right icon-border">
                    {" "}
                    <span className="fa fa-bolt" aria-hidden="true"></span>{" "}
                  </div>
                </div>
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="media-body text-right media-right-margin">
                    <h5>Integrisani Spisak Vozila</h5>
                    <p>
                      Pregledajte i upravljajte vašom flotom vozila,
                      olakšavajući pronalaženje odgovarajućih poslova u
                      zavisnosti od kapaciteta i dostupnosti.
                    </p>
                  </div>
                  <div className="media-right icon-border">
                    {" "}
                    <span
                      className="fa fa-battery-full"
                      aria-hidden="true"
                    ></span>{" "}
                  </div>
                </div>
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="media-body text-right media-right-margin">
                    <h5>Razmjena Dokumenata</h5>
                    <p>
                      Sigurno učitajte, sačuvajte i razmjenjujte važne dokumente
                      povezane s vašim teretom i ugovorima o transportu,
                      pojednostavljujući papirologiju.
                    </p>
                  </div>
                  <div className="media-right icon-border">
                    {" "}
                    <span className="fa fa-wifi" aria-hidden="true"></span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-none d-md-block d-lg-block">
                <div className="feature-mobile">
                  {" "}
                  <img
                    src="src/assets/iphone-screen-with-shadow.png"
                    className="img-fluid wow fadeInUp"
                  />{" "}
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="media-left icon-border media-right-margin">
                    {" "}
                    <span
                      className="fa fa-check-double"
                      aria-hidden="true"
                    ></span>{" "}
                  </div>
                  <div className="media-body text-left">
                    <h5>Planiranje Rute</h5>
                    <p>
                      Iskoristite našu integrisanu funkciju planiranja ruta kako
                      biste optimizirali svoje transportne rute, štedeći vrijeme
                      i gorivo.
                    </p>
                  </div>
                </div>
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="media-left icon-border media-right-margin">
                    {" "}
                    <span
                      className="fa fa-dollar-sign"
                      aria-hidden="true"
                    ></span>{" "}
                  </div>
                  <div className="media-body text-left">
                    <h5>Brza Navigacija</h5>
                    <p>
                      Pristupite ključnim alatima i opcijama kroz naš intuitivni
                      raspored nadzorne ploče, poboljšavajući produktivnost i
                      efikasnost.
                    </p>
                  </div>
                </div>
                <div
                  className="media single-feature wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="media-left icon-border media-right-margin">
                    {" "}
                    <span className="fa fa-hdd" aria-hidden="true"></span>{" "}
                  </div>
                  <div className="media-body text-left">
                    <h5>Prilagodljive Ponude</h5>
                    <p>
                      Prilagodite svoje ponude za teret i transport prema
                      specifičnim potrebama, omogućujući vam efikasno
                      pregovaranje i zaključivanje poslova.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
