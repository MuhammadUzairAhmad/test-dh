export function matchRoute(pathname: string, routePath: string): boolean {
  const normalize = (p: string) => (p === "" || p === "/" ? "/" : p.endsWith("/") ? p.slice(0, -1) : p);
  const rp = normalize(routePath);
  const pn = normalize(pathname);

  if (rp === "/") return pn === "/";

  const routeParts = rp.split("/").filter(Boolean);
  const pathParts = pn.split("/").filter(Boolean);

  if (routeParts.length > pathParts.length) return false;

  return routeParts.every((part, i) => (part.startsWith(":") ? true : part === pathParts[i]));
}

export function normalizePath(path: string) {
  if (!path) return "/";
  return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
}
