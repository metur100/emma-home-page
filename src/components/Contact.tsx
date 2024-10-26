import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sectioner-header text-center">
              <h3>Kontaktirajte nas</h3>
              <span className="line"></span>
              <p>
                Uvijek smo dostupni za podršku i odgovore na vaša pitanja.
                Kontaktirajte nas kako bismo zajedno pronašli najbolje rješenje za vaše logističke potrebe.
              </p>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <form id="contact_form" action="">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          id="your_name"
                          className="form-input w-100"
                          name="full-name"
                          placeholder="Ime i prezime"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="email"
                          id="email"
                          className="form-input w-100"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="subject"
                      className="form-input w-100"
                      name="subject"
                      placeholder="Predmet"
                    />
                    <textarea
                      className="form-input w-100"
                      id="message"
                      placeholder="Poruka"
                      name="message"
                    ></textarea>
                    <button
                      className="btn-grad w-100 text-uppercase"
                      type="submit"
                      name="button"
                    >
                      Posalji
                    </button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="contact-info white">
                    <div className="contact-item media">
                      <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Adresa</p>
                        <p className="text-uppercase">Džemilić Planje bb</p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-mobile media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Telefon</p>
                        <p className="text-uppercase">
                          <a className="text-white" href="tel:+15173977100">
                            +38762258023
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-envelope media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">E-mail</p>
                        <p className="text-uppercase">
                          <a
                            className="text-white"
                            href="mailto:abcdefg@gmail.com"
                          >
                            emmalogistics@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-item media">
                      <i className="fa fa-clock media-left media-right-margin"></i>
                      <div className="media-body">
                        <p className="text-uppercase">Radno vrijeme</p>
                        <p className="text-uppercase">
                          Pon-pet od 7 do 16 sati
                        </p>
                      </div>
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
};

export default Contact;
