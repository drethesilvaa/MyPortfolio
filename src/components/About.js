import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import SanityBlockContent from "@sanity/block-content-to-react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  const styleBioTitle = {
    position: "absolute",
    opacity: "0.5",
    top: "50%",
    transform: "translateY(-50%)",
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <div className="rounded-lg shadow-2xl lg:flex p-20">
        <AnimatedOnScroll animationIn="fadeInUp">
          <h1
            class="cursive text-8xl text-green-300 mb-4 "
            style={styleBioTitle}
          >
            BIO
          </h1>
          <section className="rounded-lg shadow-2xl lg:flex pl-40">
            {/* <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          ></img> */}

            <div className="text-lg flex flex-col justify-center">
              {/* <h1 className="cursive text-8xl text-green-300 mb-4 ">
                Hey there. I'm{" "}
                <span className="text-green-100">{author.name}</span>
              </h1> */}
              <div className="prose lg:prose-xl text-white ">
                {
                  <SanityBlockContent
                    blocks={author.bio}
                    projectId={sanityClient.projectId}
                    dataset={sanityClient.dataset}
                  ></SanityBlockContent>
                }
              </div>
            </div>
          </section>
        </AnimatedOnScroll>
      </div>
      <span id="aboutme"></span>
    </main>
  );
}
