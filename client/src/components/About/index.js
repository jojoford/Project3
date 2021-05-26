import React from 'react';
import PageTitle from "../Title";
import "./about.css";
import Row from "../Row";
import Col from "../Col";

// about component
function About() {
  return (
    <div className="about-wrapper">
      <PageTitle title="About Us" />

      <div className="about-grid">

        <div className="about-container" style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
      <h1 id="about"> We are...</h1>
      <p>Long time supporters of the Nashville art community we want to connect you with talented locals.
        <br></br>
        Do you have an event comming up that you need presented well and preserved to be cherished for all time? Do have an interest in photography and would like to learn from someone nearby?
        Then you are in the right place. Our local photographers can help you!
        </p>
            </Col>
          </Row>
        </div>
</div> </div>
        
           
            );
            }

export default About;
