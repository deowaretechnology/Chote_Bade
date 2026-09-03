import { defineField, defineType } from "sanity";

export default defineType({
  name: "problem",
  title: "Problem",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon key — e.g. message-square-warning, notebook-pen, repeat, globe, layout-grid, phone-missed",
    }),
    defineField({ name: "body", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "body" } },
});
