import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "basics", title: "Basics", default: true },
    { name: "story", title: "The Story" },
    { name: "results", title: "Results" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "basics",
      description: "e.g. 'From missed WhatsApp messages to zero missed bookings'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basics",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "business",
      title: "Business Name",
      type: "string",
      group: "basics",
      description: "e.g. 'Bloom Salon & Spa'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "businessType",
      title: "Business Type",
      type: "string",
      group: "basics",
      description: "e.g. 'Salon / Beauty Studio'",
    }),
    defineField({
      name: "address",
      title: "Address / Location",
      type: "string",
      group: "basics",
      description: "e.g. 'Andheri West, Mumbai'",
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      group: "basics",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
    defineField({
      name: "imageLink",
      title: "Image Link (optional)",
      type: "url",
      group: "basics",
      description: "Where the cover image links to when clicked, e.g. the live website",
    }),
    defineField({
      name: "summary",
      title: "Short Summary / Overview",
      type: "text",
      group: "basics",
      rows: 3,
      description: "One or two lines shown on the card and as the page overview",
    }),

    // ---- Project info box ----
    defineField({
      name: "publishedDate",
      title: "Published",
      type: "string",
      group: "basics",
      description: "e.g. 'June 2024'",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      group: "basics",
      description: "e.g. 'Salon & Beauty' or 'IT & ITES'",
    }),
    defineField({
      name: "techStack",
      title: "Tech / Tools Used",
      type: "array",
      group: "basics",
      of: [{ type: "string" }],
      description: "e.g. 'Next.js', 'WhatsApp API'",
    }),
    defineField({
      name: "ctaLabel",
      title: "Live Project Button Label",
      type: "string",
      group: "basics",
      initialValue: "View Live Project",
    }),
    defineField({
      name: "ctaUrl",
      title: "Live Project Button Link",
      type: "url",
      group: "basics",
    }),

    // ---- The story ----
    defineField({
      name: "challenge",
      title: "The Challenge (bullet points)",
      type: "array",
      group: "story",
      of: [{ type: "string" }],
      description: "What problem was the business facing? One point per line.",
    }),
    defineField({
      name: "solutionPoints",
      title: "What We Did (bullet points)",
      type: "array",
      group: "story",
      of: [{ type: "string" }],
      description: "Key actions taken to solve it. One point per line.",
    }),
    defineField({
      name: "body",
      title: "Extra Story (optional, rich text)",
      type: "array",
      group: "story",
      of: [{ type: "block" }],
      description: "Any additional narrative beyond the Challenge / What We Did bullets",
    }),
    defineField({
      name: "testimonialQuote",
      title: "Client Testimonial Quote (optional)",
      type: "text",
      group: "story",
      rows: 3,
    }),
    defineField({
      name: "testimonialAuthor",
      title: "Testimonial Author (optional)",
      type: "string",
      group: "story",
      description: "e.g. 'Aanya Mehta, Owner'",
    }),

    // ---- Results ----
    defineField({
      name: "results",
      title: "Results & Impact (stat highlights)",
      type: "array",
      group: "results",
      of: [
        {
          type: "object",
          name: "resultStat",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", description: "e.g. '42%', '4x', '1 hr/day'" }),
            defineField({ name: "label", title: "Label", type: "string", description: "e.g. 'Increase in bookings'" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
    defineField({
      name: "bulletPoints",
      title: "Key Takeaways (short bullets, shown on the card)",
      type: "array",
      group: "results",
      of: [{ type: "string" }],
      description: "Short bullet points shown on the case-study card preview",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      group: "basics",
      description: "Lower numbers show first",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "business", media: "image" },
  },
});
