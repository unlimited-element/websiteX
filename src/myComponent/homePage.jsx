import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import profile from "../images/profile.jpg";


class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img alt={'profile'} src={profile} className="profile-img" />
              </div>
              <h1 className="name-css">
                Julius <span className="surname">Bolden</span>
              </h1>
              <p className="sub-detail"> Web Developer </p>
              <br />
              <p className="sub-detail2">
                <a href="https://github.com/unlimited-element" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-github " />
                </a>
                <a href="https://twitter.com/unlimitdelement/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter" />
                </a>

                <a href="https://www.linkedin.com/in/coderjulius" rel="noopener noreferrer" target="_blank">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
