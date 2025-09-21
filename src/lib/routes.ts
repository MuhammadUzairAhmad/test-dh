export type RouteType = "public" | "protected" | "shared";

export type AppRoute = {
  path: string;
  type: RouteType;
};

export const routes: AppRoute[] = [
  // Public routes
  { path: "/", type: "public" },

  { path: "/contests", type: "protected" },
  { path: "/contests/new", type: "protected" },
  { path: "/users", type: "protected" },
];
