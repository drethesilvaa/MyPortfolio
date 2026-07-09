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
      name: "sections",
      title: "Showcase Sections",
      type: "array",
      description:
        "Menu sections for the project detail dialog. Each section has a menu title and its own images.",
      of: [
        {
          name: "section",
          type: "object",
          title: "Section",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Menu Title",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Description (optional)",
            },
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
              title: "title",
              images: "images",
              image: "images.0",
            },
            prepare(selection) {
              const { title, images, image } = selection;

              return {
                title: title || "Untitled section",
                subtitle: `${images ? Object.keys(images).length : 0} images`,
                media: image,
              };
            },
          },
        },
      ],
    },
  ],
};
