import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { urlFor } from "../../functions/sanityFunctions";
import { StyleGallery } from "../../stylesheets/StyleGallery";

export default function ProjectGallery({ data }) {
  return (
    <>
      <StyleGallery></StyleGallery>
      {
        <Carousel
          animation="fade"
          interval={20000}
          duration={1000}
          index={0}
          swipe={false}
          height={500}
        >
          {data
            ? data.gallery.images.map((element, i) => (
                <Paper elevation={2} key={i}>
                  <div className="text-center">
                    <img alt="" src={urlFor(element.asset._ref)} />
                    <p
                      style={{
                        marginTop: "10px",
                        paddingBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      {element.cap}
                    </p>
                  </div>
                </Paper>
              ))
            : "No Images for now"}
        </Carousel>
      }
    </>
  );
}
