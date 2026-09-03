import { defineField, defineType } from "sanity";

export default defineType({
  name: "demo",
  title: "Demo Lab Item",
  type: "document",
  fields: [
    defineField({ name: "business", title: "Business Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "business" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "string", description: "e.g. scissors, gem, coffee, briefcase" }),
    defineField({
      name: "accent",
      title: "Accent Color",
      type: "string",
      options: { list: ["saffron", "navy", "green"] },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image (optional)",
      type: "image",
      options: { hotspot: true },
      description: "If added, this image replaces the illustrative mockup card shown on the demo listing and detail pages.",
    }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 3 }),
    defineField({ name: "before", title: "Before", type: "text", rows: 3 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 3 }),
    defineField({ name: "flow", title: "Flow Steps", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "whyItHelps", title: "Why It Helps", type: "text", rows: 3 }),
    defineField({ name: "cta", title: "Button Label", type: "string" }),
    defineField({
      name: "websiteLabel",
      title: "Website Button Label",
      type: "string",
      description: "e.g. 'View Live Demo Site'",
      initialValue: "View Live Demo Site",
    }),
    defineField({
      name: "websiteUrl",
      title: "Website Link (optional)",
      type: "url",
      description: "If filled in, a button linking here appears on the demo's detail page",
    }),
    defineField({
      name: "techStack",
      title: "Tech / Tools Used",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. 'Next.js', 'WhatsApp API'",
    }),
    defineField({
      name: "results",
      title: "Illustrative Results (example scenario, not real data)",
      type: "array",
      of: [
        {
          type: "object",
          name: "demoResult",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", description: "e.g. '0', '~1 hr/day', '100%'" }),
            defineField({ name: "label", title: "Label", type: "string", description: "e.g. 'Missed enquiries (example)'" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      description: "Since this is a fictional example business, keep labels honest — e.g. always include '(example)' where relevant. Never phrase as real measured results.",
    }),
    defineField({
      name: "testimonialQuote",
      title: "Example Scenario Quote (illustrative, not a real client)",
      type: "text",
      rows: 3,
      description: "Write this as an illustrative scenario, not a fabricated real customer quote.",
    }),
    defineField({
      name: "testimonialAuthor",
      title: "Quote Attribution",
      type: "string",
      initialValue: "Illustrative example, not a real client quote",
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "business", subtitle: "problem", media: "coverImage" },
  },
});