import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
              title,
              description,
              Language_Frameworks,
              date,
              projectType,
              link,
              tags       
          }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return;
}
