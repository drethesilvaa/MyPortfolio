export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    { name: "skill", type: "string", title: "Skill name" },
    {
      name: "skill_Level",
      type: "number",
      title: "Skill Level",
      validation: (Rule) => Rule.required().min(10).max(100),
    },
  ],
};
