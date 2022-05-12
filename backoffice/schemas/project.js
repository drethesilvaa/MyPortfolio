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
  ],
};
