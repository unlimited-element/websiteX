import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();

class Projects extends Component {
  render() {
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Completed <span className="surname">Projects</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 className="center">Front End </h1>
            </CardContent>
            <Divider light />
            <CardContent>
               <h2 className="center" style={{ color: "#cac531"}}>ReactJS, AOS, Material UI</h2>
              <Typography variant="body2" align="center" color="inherit" component="p">
                The current project was constructed with tools such as React, Animate On Scroll, and Material UI to display understanding 
                of current front end libraries and frameworks
              </Typography>
            </CardContent>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="center">
              <h1> Back End </h1>
            </CardContent>
            <Divider light />
            <CardContent>

              <h2 className="center" style={{ color: "#cac531" }}>NodeJS, ExpressJS </h2>
              <Typography variant="body2" align="center" color="inherit">
                Created an application with pure Node and Express frameworks to display backend competencies
              </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="center">
              <h1>Full Stack</h1>
            </CardContent>
            <Divider light />
            <CardContent>
              <h2 className="center" style={{ color: "#cac531" }}>ReactJS NodeJS </h2>
              <Typography variant="body2" color="inherit" align="center" component="p">
                In Progress
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
