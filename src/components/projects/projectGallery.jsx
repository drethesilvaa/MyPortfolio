import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { urlFor } from "../../functions/sanityFunctions";
import { StyleGallery } from "../../stylesheets/StyleGallery";

export default function ProjectGallery({ data }) {
  if (!data) return "";
  
  return (
    <>
      <StyleGallery></StyleGallery>
      <Carousel
        indicators={false}
        animation="fade"
        interval={20000}
        duration={1000}
      >
        {data
          ? data.gallery.images.map((element) => (
              <Paper elevation={2}>
                <img src={urlFor(element.asset._ref)} />
              </Paper>
            ))
          : "No Images for now"}
      </Carousel>
    </>
  );
}
