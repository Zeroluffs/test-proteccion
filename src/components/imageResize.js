import "../App.css";
import React, { useState } from "react";
import { PhotoCamera } from "@material-ui/icons";
import { IconButton, Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  faceImage: {
    color: theme.palette.primary,
  },
}));

function ImageResize() {
  const classes = useStyles();

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const fileSelect = (e) => {
    console.log(e.target.files[0]);
    let img = e.target.files[0];
    setImage(URL.createObjectURL(img));
    setImageName(img.name);
  };

  return (
    <div className="mainContainer">
      <div className="imgButton">
        <>
          <input
            accept="image/*"
            className={classes.input}
            id="faceImage"
            type="file"
            onChange={fileSelect}
          />
          <Tooltip title="Select Imagse">
            <label htmlFor="faceImage">
              <IconButton
                className={classes.faceImage}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera fontSize="large" />
              </IconButton>
            </label>
          </Tooltip>
          <label>{image ? imageName : "Select Image"}</label>
        </>
      </div>
      {/* <input type="file" onChange={fileSelect}></input> */}
      <div className="containerImg">
        <img className="imgResize" alt="" src={image} />
        {/* <Paper variant="outlined">
          <Container style={{ width: "796", height: "1123" }}>
            <img
              alt="eve"
              src={cEve}
              style={{
                objectFit: "contain",
              }}
            ></img>
          </Container>
        </Paper> */}
      </div>
    </div>
  );
}

export default ImageResize;
