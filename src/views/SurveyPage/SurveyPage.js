/* eslint-disable prettier/prettier */
import React from "react";
import Low from "../../assets/img/Low.jpg";
import High from "../../assets/img/High.jpg";
import Button from "components/CustomButtons/Button.js";
import Medium from "../../assets/img/Medium.png";

function SurveyPage() {
  return (
    <>
      <h1
        style={{
          color: "black",
          display: " inline-block",
          position: "relative",
          fontSize: "4.2rem",
          fontWeight: 600,
          width: "100%",
          textAlign: "center",
        }}
      >
        Well-Being
      </h1>
      <div
        style={{
          textAlign: "center",
          flexDirection: "column",
          display: "flex",
          marginTop: "6%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            color="rose"
            // onClick={survey}
            style={{
              width: "26%",
              marginLeft: "40px",
              height: "48px",
              marginTop: "26px",
            }}
            round
          >
            Low
          </Button>
          <div>
            <img style={{ width: "43%", height: "69%" }} src={Low} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "3%",
          }}
        >
          <Button
            // onClick={survey}
            color="warning"
            style={{
              width: "26%",
              //   marginLeft: "40px",
              marginRight: "200px",

              height: "48px",
              marginTop: "26px",
            }}
            round
          >
            Medium
          </Button>
          <div>
            <img style={{ width: "92%", height: "67%" }} src={Medium} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            color="success"
            // onClick={survey}
            style={{
              width: "26%",
              marginLeft: "40px",
              height: "48px",
              marginTop: "26px",
            }}
            round
          >
            High
          </Button>
          <div>
            <img style={{ width: "43%", height: "69%" }} src={High} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SurveyPage;
