import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "brandName", title: "Brand Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "subTagline", title: "Sub-tagline", type: "string" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp Link", type: "url" }),
    defineField({ name: "whatsappDisplay", title: "WhatsApp Display Number", type: "string" }),
    defineField({ name: "footerAbout", title: "Footer About Text", type: "text", rows: 2 }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "brandName" } },
});
