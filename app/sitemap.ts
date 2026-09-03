import type { MetadataRoute } from "next";
import demosJson from "@/data/demos.json";
import caseStudiesJson from "@/data/caseStudies.json";

const SITE_URL = "https://chotebade.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/problems",
    "/solutions",
    "/demos",
    "/case-studies",
    "/how-we-work",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const demoRoutes = demosJson.items.map((d) => ({
    url: `${SITE_URL}/demos/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = caseStudiesJson.items.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...demoRoutes, ...caseStudyRoutes];
}