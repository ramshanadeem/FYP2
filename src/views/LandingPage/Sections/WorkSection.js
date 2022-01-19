import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const navigate = useNavigate();

  const ratio = () => {
    navigate("/Ratio");
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Trauma System Checklist</h2>
          {/* <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4> */}
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                {/* <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                /> */}
                <FormControl fullWidth="true">
                  <FormGroup
                    aria-label="position"
                    column
                    // style={{ alignItems: "center" }}
                  >
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      // value="start"
                      control={<Checkbox />}
                      label="1. Headaches"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      // value="start"
                      style={{ display: "inline-block" }}
                      control={<Checkbox />}
                      label="2. Insomnia"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label="3. Weight loss (without dieting)"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label="4. Stomach problems"
                      labelPlacement="start"
                    />

                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label="5. Sexual problems"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label=" 6. Feeling isolated from others"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label=" 7. Restless sleep"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label=" 8. Anxiety attacks"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label=" 9. Nightmares"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      style={{ display: "inline-block" }}
                      value="start"
                      control={<Checkbox />}
                      label=" 10. Memory Problem"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
              </GridItem>

              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  onClick={ratio}
                  style={{
                    backgroundColor: "#70c57d",
                    width: "100%",
                  }}
                  round
                >
                  Send
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
