/** Join site base path with an asset or route segment (handles missing slashes). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, '');
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${normalized}`;
}