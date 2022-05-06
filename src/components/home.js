import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="big-home-box">
        <div className="home-box">
          <div className="first-row">
            <div className="home-half">
              <h1 className="home-title">About us</h1>
              <div className="border"></div>
              <div className="about-box">
                <p className="about-us">
                  We are a start-up organic vegan beauty company founded by two
                  young women with a passion for sustainable beauty. All of our
                  products are fairly sourced and produced with care.
                </p>
              </div>
            </div>
            <img
              className="img-home1"
              src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            />
          </div>
        </div>
        <div className="second-row">
          <div className="news-box">
            <div className="halfy-half">
              <h1 className="subscribe">Subscribe to our newsletter</h1>
              <p className="sub-text">
                To keep up with newest products, get special discounts and be
                notified of aproaching sales!
              </p>
            </div>
            <button className="btn-3"> Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
