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
  { path: "/contests/:id", type: "protected" },
  { path: "/contests/:id/edit", type: "protected" },
  { path: "/users", type: "protected" },
  { path: "/users/:userId/settings", type: "protected" },

  // Shared routes
  { path: "/about", type: "shared" },
  { path: "/contact", type: "shared" },
];
