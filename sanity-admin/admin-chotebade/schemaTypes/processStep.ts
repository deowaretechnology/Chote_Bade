import { defineField, defineType } from "sanity";

export default defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: { list: [{ title: "Philosophy (Home)", value: "philosophy" }, { title: "How We Work (full page)", value: "howWeWork" }] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "number", title: "Step Number", type: "string", description: "e.g. 01" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "group" } },
});
