import React from "react";

const Team: React.FC = () => (
  <section className="team section-padding" data-scroll-index="3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="sectioner-header text-center">
            <h3>Naš tim</h3>
            <span className="line"></span>
            <p>
              Naš tim čine stručnjaci posvećeni pružanju najbolje moguće usluge u
              sektoru logistike i transporta. Svaki član tima donosi svoje jedinstvene
              vještine kako bi zajedno ispunili zahtjeve naših klijenata i ostvarili
              efikasna rješenja.
            </p>
          </div>
          <div className="section-content text-center">
            <div className="row">
              <div className="col-md-4">
                <div className="team-detail wow bounce" data-wow-delay="0.2s">
                  {" "}
                  <img src="src/assets/medin.png" className="img-fluid" />
                  <h4>Medin Turkeš</h4>
                  <p>CEO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-detail wow bounce" data-wow-delay="0.4s">
                  {" "}
                  <img src="src/assets/ermin.png" className="img-fluid" />
                  <h4>Ermin Šaćirović</h4>
                  <p>CEO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-detail wow bounce" data-wow-delay="0.6s">
                  {" "}
                  <img src="src/assets/mirsad.png" className="img-fluid" />
                  <h4>Mirsad Piro</h4>
                  <p>CEO</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-detail wow bounce" data-wow-delay="0.6s">
                  {" "}
                  <img src="src/assets/armin.png" className="img-fluid" />
                  <h4>Armin Ostrvica</h4>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
