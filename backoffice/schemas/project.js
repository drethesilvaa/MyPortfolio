export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "Language_Frameworks",
      title: "Language and Frameworks",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
          { value: "school", title: "school" },
        ],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "Links",
      type: "array",
      of: [
        {
          type: "url",
        },
      ],
      option: {
        layuot: "tags",
      },
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
                {
                  name: "cap",
                  type: "string",
                  title: "Caption",
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },      
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const { images, image } = selection;
    
          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `${image.cap}`,
            media: image,
          };
        },
      },
    },
  ],
};
