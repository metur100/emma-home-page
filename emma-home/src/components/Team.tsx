import React from 'react';

const Team: React.FC = () => (
<section className="team section-padding" data-scroll-index='3'>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="sectioner-header text-center">
          <h3>Nas tim</h3>
          <span className="line"></span>
          <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
        </div>
        <div className="section-content text-center">
          <div className="row">
            <div className="col-md-4">
              <div className="team-detail wow bounce" data-wow-delay="0.2s"> <img src="src/assets/user1.jpg" className="img-fluid"/>
                <h4>Nitu Singh</h4>
                <p>Marketing Specialist</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-detail wow bounce" data-wow-delay="0.4s"> <img src="src/assets/user2.jpg" className="img-fluid"/>
                <h4>Yogesh Singh</h4>
                <p>CEO & Founder</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-detail wow bounce" data-wow-delay="0.6s"> <img src="src/assets/user3.jpg" className="img-fluid"/>
                <h4>Nisha Sharma</h4>
                <p>Web Developer</p>
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
