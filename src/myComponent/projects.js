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
              <h1>Front End </h1>
            </CardContent>
            <Divider light />
            <CardContent>
               <h2 style={{ color: "#cac531" }}>React.js</h2>
              <Typography variant="body2" color="inherit" component="p">
                Developed a full functional project for the MP Police . It is a
                Crime Detection System which will identify the criminals in the
                prone areas.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>May 2019</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Web Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>ACM Student Chapter</h2>
              <Typography variant="body2" color="inherit">
                Developed the official website for the event name AlgoRythm
                conducted by <b> MITS ACM STUDENT CHAPTER</b>.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jan 2019 -</span>-<span>Feb 2019</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Backend Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>AgroGram</h2>
              <Typography variant="body2" color="inherit" component="p">
                Currently Working
              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2019 -</span>
              <span>Present</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
