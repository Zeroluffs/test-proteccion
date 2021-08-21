import "./styles/imageButton.css";
import React, { useState, Fragment } from "react";
import { PhotoCamera } from "@material-ui/icons";
import { IconButton, Tooltip, makeStyles } from "@material-ui/core";
import ImageComponent from "../image/ImageComponent";
import reactImageSize from "react-image-size";

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

function ImageButton() {
  const classes = useStyles();
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [horizontal, setHorizontal] = useState(false);

  const fileSelect = async (e) => {
    console.log(e.target.files[0]);
    let img = e.target.files[0];
    let imgURL = await imageHandlerURL(img);
    let imgDimension = await gettingDimension(imgURL);

    if (imgDimension.width > imgDimension.height) {
      setHorizontal(true);
    }
    setImageName(img.name);
  };

  async function gettingDimension(imgUrl) {
    try {
      const { width, height } = await reactImageSize(imgUrl);
      let dimensions = { width: width, height: height };
      return dimensions;
    } catch (error) {
      console.log(error);
    }
  }
  async function imageHandlerURL(img) {
    let imgURL = URL.createObjectURL(img);

    setImage(imgURL);
    return imgURL;
  }
  return (
    <Fragment>
      <div className="imgButton">
        <>
          <input
            accept="image/*"
            className={classes.input}
            id="faceImage"
            type="file"
            onChange={fileSelect}
            data-testid="required-input"
          />
          <Tooltip title="Select Imagee">
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
      <ImageComponent horizontal={horizontal} image={image}></ImageComponent>
    </Fragment>
  );
}

export default ImageButton;
