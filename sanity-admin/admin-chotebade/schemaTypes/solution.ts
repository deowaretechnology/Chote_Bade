import { defineField, defineType } from "sanity";

export default defineType({
  name: "solution",
  title: "Solution",
  type: "document",
  fields: [
    defineField({ name: "solutionId", title: "ID (slug-like key)", type: "string", description: "e.g. websites, customer-experience, business-tools, automation, integrations" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", description: "Icon key — e.g. layout-template, calendar-check, layout-dashboard, zap, plug-zap" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "points", title: "Points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "description" } },
});
