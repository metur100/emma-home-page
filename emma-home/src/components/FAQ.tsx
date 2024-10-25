/* eslint-disable react-refresh/only-export-components */
import React from 'react';

const FAQ: React.FC = () => (
<section className="faq section-padding prelative" data-scroll-index='5'>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center">
          <h3>Često Postavljana Pitanja</h3>
          <span className="line"></span>
          <p>Ovdje mozete pronaci cesto postavljena pitanja</p>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
              <h4>Koje vrste tereta mogu objaviti na platformi?</h4>
              <p>Možete objaviti širok spektar vrsta tereta, uključujući standardni, vanredni, rashladni i specijalizirani teret.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
              <h4>Kako upravljam svojim spiskom vozila?</h4>
              <p>Jednostavno idite na sekciju Upravljanje Vozilima kako biste dodali, ažurirali ili uklonili detalje vozila u bilo kojem trenutku.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
              <h4>Da li je moguće sigurno razmijeniti dokumente na platformi?
              </h4>
              <p>Da, naša platforma podržava sigurnu razmjenu dokumenata, osiguravajući da su svi papiri zaštićeni i lako dostupni.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
              <h4>Kako funkcioniše funkcija planiranja rute?</h4>
              <p>Naš alat za planiranje ruta pomaže vam da mapirate najefikasnije puteve za vaš transport, uzimajući u obzir udaljenost, vrijeme i uslove na putu.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
              <h4>Mogu li prilagoditi ponude za teret prema specifičnim transportnim potrebama?
              </h4>
              <p>Apsolutno! Možete prilagoditi svaku ponudu za teret kako biste uključili specifične zahtjeve, cijene i detalje isporuke.</p>
            </div>
            <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
              <h4>Šta da radim ako naiđem na problem s platformom?
              </h4>
              <p>Posjetite našu sekciju Podrška Korisnicima za uputstva, ili kontaktirajte naš tim podrške direktno kako biste riješili sve nedoumice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);

export default FAQ;
