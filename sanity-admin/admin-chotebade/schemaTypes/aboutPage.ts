import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 2 }],
    }),
    defineField({
      name: "promisesHeading",
      title: "Promises Section Heading",
      type: "string",
      description: "e.g. 'Our promise to you'",
    }),
    defineField({
      name: "promises",
      title: "Promises (bullet points)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "audienceHeading",
      title: "Audience Section Heading",
      type: "string",
    }),
    defineField({
      name: "audienceItems",
      title: "Audience Items",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { select: { title: "heading" } },
});
