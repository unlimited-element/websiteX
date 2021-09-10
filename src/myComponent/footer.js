import React, { Component } from "react";
import { Typography } from "@material-ui/core";
 
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            display="inline"
          >
            <i class="far fa-copyright">
              Copyright Rachit. All Rights Reserved
            </i>
          </Typography>
        </div>
        <div className="footer-a">
          <a href="https://www.facebook.com/gr8.rachit" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-facebook-f " />
          </a>
          <a href="https://twitter.com/rachit_g8t" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/_rachit_gupta/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-instagram" />
          </a>
          <a href="mailto: guptarachit371@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
