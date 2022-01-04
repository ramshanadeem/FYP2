/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React from "react";
// import Low from "../../assets/img/Low.jpg";
// import High from "../../assets/img/High.jpg";
// // import Button from "components/CustomButtons/Button.js";
// import Medium from "../../assets/img/Medium.png";
// // import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

// export default function SurveyPage() {
//   const navigate = useNavigate();

//   const screening = () => {
//     navigate("/screeningForm");
//   };
//   return (
//     <div style={{ backgroundColor: "#fff" }}>
//       <h1
//         style={{
//           color: "black",
//           display: " inline-block",
//           position: "relative",
//           fontSize: "4.2rem",
//           fontWeight: 600,
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         Well-Being
//       </h1>
//       <div
//         style={{
//           textAlign: "center",
//           flexDirection: "column",
//           display: "flex",
//           marginTop: "6%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//           }}
//         >
//           <Button
//             onClick={screening}
//             color="rose"
//             style={{
//               width: "26%",
//               marginLeft: "40px",
//               height: "48px",
//               marginTop: "26px",
//             }}
//             round
//           >
//             Low
//           </Button>
//           <div>
//             <img style={{ width: "43%", height: "69%" }} src={Low} alt="" />
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             marginLeft: "3%",
//           }}
//         >
//           <Button
//             // onClick={survey}
//             color="warning"
//             style={{
//               width: "26%",
//               //   marginLeft: "40px",
//               marginRight: "200px",

//               height: "48px",
//               marginTop: "26px",
//             }}
//             round
//           >
//             Medium
//           </Button>
//           <div>
//             <img style={{ width: "92%", height: "67%" }} src={Medium} alt="" />
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-around",
//           }}
//         >
//           <Button
//             color="success"
//             // onClick={survey}
//             style={{
//               width: "26%",
//               marginLeft: "40px",
//               height: "48px",
//               marginTop: "26px",
//             }}
//             round
//           >
//             High
//           </Button>
//           <div>
//             <img style={{ width: "43%", height: "69%" }} src={High} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import Low from "../../assets/img/Low.jpg";
import High from "../../assets/img/High.jpg";
// import Button from "components/CustomButtons/Button.js";
import Medium from "../../assets/img/Medium.png";
// import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// @material-ui/icons
// core components
// sections for this page

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

import { useNavigate } from "react-router-dom";

export default function SurveyPage() {
  const navigate = useNavigate();

  const survey = () => {
    navigate("/screeningQuestion");
  };

  return (
    <div>
      <div style={{ backgroundColor: "#fff" }}>
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
              onClick={survey}
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
              <img
                style={{ width: "92%", height: "67%" }}
                src={Medium}
                alt=""
              />
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
      </div>
    </div>
  );
}
