import { defineField, defineType } from "sanity";

export default defineType({
  name: "whyUsItem",
  title: "Why ChoteBade — Item",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", description: "e.g. search-check, puzzle, feather, hammer, sprout, trending-up" }),
    defineField({ name: "body", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "body" } },
});
