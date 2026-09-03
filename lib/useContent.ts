import { useEffect, useState } from "react";

/**
 * Renders `initial` (from local JSON) immediately, then calls `fetcher`
 * (which internally prefers Sanity and falls back to the same JSON) and
 * updates once it resolves. If Sanity isn't configured or has no data
 * for this content type yet, the fetcher resolves back to `initial`
 * almost instantly, so there's no visible change.
 */
export function useContent<T>(fetcher: () => Promise<T>, initial: T): T {
  const { data } = useContentState(fetcher, initial);
  return data;
}

/**
 * Same as `useContent`, but also exposes whether the async fetch has
 * finished. Use this on pages that look up a single item by slug/id and
 * redirect away when it's missing — without `loading`, that lookup runs
 * against the stale `initial` data on the very first render (before
 * Sanity's real data has arrived) and can trigger a false "not found"
 * redirect even though the item exists in Sanity under a different slug.
 */
export function useContentState<T>(
  fetcher: () => Promise<T>,
  initial: T,
): { data: T; loading: boolean } {
  const [state, setState] = useState<{ data: T; loading: boolean }>({
    data: initial,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;
    fetcher().then((result) => {
      if (!cancelled) setState({ data: result, loading: false });
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
