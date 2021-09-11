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
              © 2021-2022 Julius Bolden. All Rights Reserved
            </i>
          </Typography>
        </div>
      </div>
    );
  }
}
