import { defineField, defineType } from "sanity";

export default defineType({
  name: "demo",
  title: "Demo Lab Item",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "problem", title: "Problem" },
    { name: "solution", title: "Solution" },
    { name: "gallery", title: "Gallery" },
    { name: "tech", title: "Tech & Link" },
    { name: "extra", title: "Extra" },
  ],
  fields: [
    defineField({ name: "business", title: "Business Name", type: "string", validation: (Rule) => Rule.required(), group: "hero" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "business" }, validation: (Rule) => Rule.required(), group: "hero" }),
    defineField({ name: "icon", title: "Icon", type: "string", description: "e.g. scissors, gem, coffee, briefcase", group: "hero" }),
    defineField({
      name: "accent",
      title: "Accent Color",
      type: "string",
      options: { list: ["saffron", "navy", "green"] },
      group: "hero",
    }),

    // ---------- HERO ----------
    defineField({
      name: "coverImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Big image shown in the Hero section at the top of the detail page (and on the demo listing card).",
      group: "hero",
    }),
    defineField({ name: "problem", title: "Hero Heading (the problem, shown as the page title)", type: "text", rows: 3, group: "hero" }),

    // ---------- PROBLEM SECTION ----------
    defineField({ name: "before", title: "Problem — Paragraph", type: "text", rows: 3, group: "problem" }),
    defineField({
      name: "problemPoints",
      title: "Problem — Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullet points listed under the problem paragraph.",
      group: "problem",
    }),

    // ---------- SOLUTION SECTION ----------
    defineField({ name: "solution", title: "Solution — Paragraph", type: "text", rows: 3, group: "solution" }),
    defineField({
      name: "solutionPoints",
      title: "Solution — Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      description: "Short bullet points listed under the solution paragraph.",
      group: "solution",
    }),
    defineField({
      name: "solutionImage",
      title: "Solution — Image",
      type: "image",
      options: { hotspot: true },
      description: "Image shown alongside the solution section.",
      group: "solution",
    }),

    // ---------- GALLERY (unlimited images) ----------
    defineField({
      name: "gallery",
      title: "Gallery — Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Add as many images as you like — screenshots, mockups, extra visuals for this demo.",
      group: "gallery",
    }),

    // ---------- TECH & LINK ----------
    defineField({
      name: "techStack",
      title: "Tech / Tools Used",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. 'Next.js', 'WhatsApp API'",
      group: "tech",
    }),
    defineField({
      name: "websiteLabel",
      title: "Live Link Button Label",
      type: "string",
      description: "e.g. 'View Live Demo Site'",
      initialValue: "View Live Demo Site",
      group: "tech",
    }),
    defineField({
      name: "websiteUrl",
      title: "Live Link URL",
      type: "url",
      description: "If filled in, a 'Live Link' button appears on the demo's detail page.",
      group: "tech",
    }),

    // ---------- EXTRA ----------
    defineField({ name: "flow", title: "Flow Steps (fallback chain diagram, shown only if Solution has no bullet points)", type: "array", of: [{ type: "string" }], group: "extra" }),
    defineField({ name: "cta", title: "Listing Card Button Label", type: "string", description: "Label for the button on the demo listing card, e.g. 'Explore Salon Demo'.", group: "extra" }),
    defineField({ name: "order", title: "Display Order", type: "number", group: "extra" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "business", subtitle: "problem", media: "coverImage" },
  },
});