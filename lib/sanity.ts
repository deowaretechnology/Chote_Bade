import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

/** True only once a real Sanity project ID has been provided in .env.local */
export const isSanityConfigured = Boolean(projectId && projectId.trim().length > 0);

export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Minimal shape of a Sanity image reference — avoids depending on an internal subpath type. */
type SanityImageLike = { asset?: { _ref?: string; _id?: string } } | string;

/** Resolve a Sanity image field into a usable URL. Returns null if there's no image. */
export function urlFor(source: unknown) {
  if (!builder || !source) return null;
  return builder.image(source as SanityImageLike);
}

/**
 * Fetch a GROQ query from Sanity. If Sanity isn't configured yet, the
 * request fails, or it returns nothing, this silently falls back to the
 * local JSON data passed in — so the site always renders something.
 *
 * Once real content is added in Sanity, it takes over automatically.
 */
export async function fetchSanity<T>(query: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback;

  try {
    const result = await sanityClient.fetch<T>(query);
    if (result === null || result === undefined) return fallback;
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result;
  } catch (err) {
    console.warn("[sanity] fetch failed, using local fallback data:", err);
    return fallback;
  }
}