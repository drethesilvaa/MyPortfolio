import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "jlufwann",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-03"
});
