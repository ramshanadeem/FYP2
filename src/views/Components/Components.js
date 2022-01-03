import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const navigate = useNavigate();

  const survey = () => {
    navigate("/survey");
  };
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MHI-22"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/back5.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1
                  style={{
                    color: "black",
                    display: " inline-block",
                    position: "relative",
                    fontSize: "4.2rem",
                    fontWeight: 600,
                  }}
                >
                  Mental Health
                </h1>
              </div>
              <Button
                onClick={survey}
                style={{
                  backgroundColor: "#70c57d",
                  width: "26%",
                  marginLeft: "40px",
                }}
                round
              >
                Survey
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <SectionBasics /> */}
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
      {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin /> */}
      {/* <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}
