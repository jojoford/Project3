//alyse add
import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import images from "../../assets/jo2.jpg";
import PageTitle from "../../components/Title";
import "./artists.css";

function Artists() {
  return (
    <div className="about-wrapper">
      <PageTitle title="Artists" />
      <div className="about-grid">

        <div className="about-container" style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <p>
                About the photographers
           </p>
              <p>
                About the price
           </p>
              <p>
                More about them
           </p>
              <p>Join us as we spread light and creativity through the ingenuity of original ideas.</p>
            </Col>
          </Row>
        </div>

        {/* here is the artists data */}

        <div className="members-container">

          <div className="row">

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" alt="photo1" src="" />
                </div>
                <div className="team-content">
                  <h3 className="name">KatieJane</h3>
                  <h4 className="title">photographer years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank"> </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto: her@gmail" target="_blank" > </a></li>
                </ul>
              </div>
            </div>



            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" alt="James" src="" />
                </div>
                <div className="team-content">
                  <h3 className="name">James </h3>
                  <h4 className="title"> Blank years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank"> </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto:him@gmail.com" target="_blank"> </a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" alt="Kim" src=""/>
                </div>
                <div className="team-content">
                  <h3 className="name">Kim</h3>
                  <h4 className="title">Artist for years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank"> </a> </li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto:alex.engelmann@gmail.com" target="_blank"> </a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" alt="fourth" src="" />
                </div>
                <div className="team-content">
                  <h3 className="name">Name 4</h3>
                  <h4 className="title">Photographer</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/" target="_blank" > </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto: @gmail.com" target="_blank"> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}
export default Artists;