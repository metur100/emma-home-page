import React from 'react';

const Testimonials: React.FC = () => (
  <section className="testimonial section-padding" data-scroll-index="4">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="sectioner-header text-center white">
            <h3>Testimonials</h3>
            <span className="line"></span>
            <p className="white">
              Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
            </p>
          </div>

          <div className="section-content">
            <div className="row">
              <div className="offset-md-2 col-md-8 col-sm-12">
                <div className="slider">
                  {/* First Testimonial */}
                  <div className="slider-item">
                    <div className="test-img">
                      <img 
                        src="src/assets/user1.jpg" 
                        alt="John Michal"
                        width={157} 
                        height={157} 
                      />
                    </div>
                    <div className="test-text">
                      <span className="title">
                        <span>John Michal</span> Digital Designer
                      </span>
                      Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </div>
                  </div>

                  {/* Second Testimonial */}
                  <div className="slider-item">
                    <div className="test-img">
                      <img 
                        src="src/assets/user3.jpg" 
                        alt="Steve Smith"
                        width={157} 
                        height={157} 
                      />
                    </div>
                    <div className="test-text">
                      <span className="title">
                        <span>Steve Smith</span> App User
                      </span>
                      Euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.
                    </div>
                  </div>

                  {/* Third Testimonial */}
                  <div className="slider-item">
                    <div className="test-img">
                      <img 
                        src="src/assets/user3.jpg" 
                        alt="Gordon Shaw"
                        width={157} 
                        height={157} 
                      />
                    </div>
                    <div className="test-text">
                      <span className="title">
                        <span>Gordon Shaw</span> Blogger
                      </span>
                      Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.
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

export default Testimonials;
