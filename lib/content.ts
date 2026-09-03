import { fetchSanity, urlFor } from "./sanity";

import problemsJson from "@/data/problems.json";
import solutionsJson from "@/data/solutions.json";
import demosJson from "@/data/demos.json";
import processJson from "@/data/process.json";
import whyUsJson from "@/data/whyUs.json";
import aboutJson from "@/data/about.json";
import caseStudiesJson from "@/data/caseStudies.json";

// ---------- Problems ----------
export interface ProblemItem {
  id?: string;
  _id?: string;
  icon: string;
  title: string;
  body: string;
}

export async function getProblemItems(): Promise<ProblemItem[]> {
  const query = `*[_type == "problem"] | order(order asc){ _id, icon, title, body }`;
  return fetchSanity<ProblemItem[]>(query, problemsJson.items);
}

// ---------- Solutions ----------
export interface SolutionItem {
  id?: string;
  _id?: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export async function getSolutionItems(): Promise<SolutionItem[]> {
  const query = `*[_type == "solution"] | order(order asc){ _id, "id": solutionId, icon, title, description, points }`;
  return fetchSanity<SolutionItem[]>(query, solutionsJson.items);
}

// ---------- Demos ----------
export interface DemoItem {
  slug: string;
  business: string;
  icon: string;
  accent: string;
  problem: string;
  before: string;
  solution: string;
  flow: string[];
  cta: string;
  websiteLabel?: string;
  websiteUrl?: string;
  techStack?: string[];
  /** Optional real screenshot/photo uploaded in Sanity; when present, replaces the illustrative mockup card. */
  coverImageUrl?: string | null;
  /** Bullet points shown under the Problem paragraph on the detail page. */
  problemPoints?: string[];
  /** Bullet points shown under the Solution paragraph on the detail page. */
  solutionPoints?: string[];
  /** Optional image shown alongside the Solution section. */
  solutionImageUrl?: string | null;
  /** Optional unlimited image gallery shown on the detail page. */
  galleryUrls?: string[];
}

export async function getDemoItems(): Promise<DemoItem[]> {
  const query = `*[_type == "demo"] | order(order asc){
    "slug": slug.current, business, icon, accent, coverImage, problem, before, solution,
    problemPoints, solutionPoints, solutionImage, gallery,
    flow, cta, websiteLabel, websiteUrl, techStack
  }`;
  const raw = await fetchSanity<
    Array<DemoItem & { coverImage?: unknown; solutionImage?: unknown; gallery?: unknown[] }>
  >(query, demosJson.items as DemoItem[]);
  return raw.map((d) => ({
    ...d,
    coverImageUrl: d.coverImage
      ? (urlFor(d.coverImage)?.width(600).url() ?? null)
      : (d.coverImageUrl ?? null),
    solutionImageUrl: d.solutionImage
      ? (urlFor(d.solutionImage)?.width(700).url() ?? null)
      : (d.solutionImageUrl ?? null),
    galleryUrls: Array.isArray(d.gallery) && d.gallery.length > 0
      ? d.gallery
          .map((img) => urlFor(img)?.width(900).url())
          .filter((url): url is string => Boolean(url))
      : (d.galleryUrls ?? []),
  }));
}

// ---------- Why Us ----------
export interface WhyUsItem {
  icon: string;
  title: string;
  body: string;
}

export async function getWhyUsItems(): Promise<WhyUsItem[]> {
  const query = `*[_type == "whyUsItem"] | order(order asc){ icon, title, body }`;
  return fetchSanity<WhyUsItem[]>(query, whyUsJson.items);
}

// ---------- Process Steps ----------
export interface ProcessStepItem {
  number: string;
  title: string;
  body: string;
}

export async function getProcessSteps(
  group: "philosophy" | "howWeWork",
): Promise<ProcessStepItem[]> {
  const query = `*[_type == "processStep" && group == $group] | order(order asc){ number, title, body }`;
  const fallback =
    group === "philosophy" ? processJson.steps : processJson.howWeWork.steps;
  return fetchSanity<ProcessStepItem[]>(
    query.replace("$group", `"${group}"`),
    fallback as ProcessStepItem[],
  );
}

// ---------- Case Studies ----------
export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  business: string;
  businessType?: string;
  address?: string;
  imageUrl?: string | null;
  imageLink?: string;
  summary?: string;
  publishedDate?: string;
  industry?: string;
  techStack?: string[];
  challenge?: string[];
  solutionPoints?: string[];
  results?: CaseStudyResult[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  bulletPoints?: string[];
  body?: unknown;
  ctaLabel?: string;
  ctaUrl?: string;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const query = `*[_type == "caseStudy"] | order(order asc){
    "slug": slug.current, title, business, businessType, address,
    image, imageLink, summary, publishedDate, industry, techStack,
    challenge, solutionPoints, results, testimonialQuote, testimonialAuthor,
    bulletPoints, body, ctaLabel, ctaUrl
  }`;
  const raw = await fetchSanity<Array<CaseStudy & { image?: unknown }>>(
    query,
    caseStudiesJson.items,
  );
  return raw.map((cs) => ({
    ...cs,
    imageUrl: cs.image
      ? (urlFor(cs.image)?.width(800).url() ?? null)
      : (cs.imageUrl ?? null),
  }));
}

// ---------- About Page ----------
// ---------- About Page ----------
export interface AboutPageContent {
  heading: string;
  paragraphs: string[];
  promisesHeading?: string;
  promises?: string[];
  audience: { heading: string; items: string[] };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  const query = `*[_type == "aboutPage"][0]{ heading, paragraphs, promisesHeading, promises, "audienceHeading": audienceHeading, "audienceItems": audienceItems }`;
  const result = await fetchSanity<{
    heading?: string;
    paragraphs?: string[];
    promisesHeading?: string;
    promises?: string[];
    audienceHeading?: string;
    audienceItems?: string[];
  } | null>(query, null);
  if (!result) return aboutJson as AboutPageContent;
  return {
    heading: result.heading || aboutJson.heading,
    paragraphs: result.paragraphs?.length
      ? result.paragraphs
      : aboutJson.paragraphs,
    promisesHeading: result.promisesHeading || aboutJson.promisesHeading,
    promises: result.promises?.length ? result.promises : aboutJson.promises,
    audience: {
      heading: result.audienceHeading || aboutJson.audience.heading,
      items: result.audienceItems?.length
        ? result.audienceItems
        : aboutJson.audience.items,
    },
  };
}