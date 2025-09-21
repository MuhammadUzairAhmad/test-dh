"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { routes } from "@/lib/routes";
import { matchRoute, normalizePath } from "@/lib/matchRoute";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const currentPath = normalizePath(pathname);

  useEffect(() => {
    if (isLoading) return;

    const matchedRoute = routes.find((route) =>
      matchRoute(currentPath, normalizePath(route.path))
    );

    const routeType = matchedRoute ? matchedRoute.type : "protected";

    if (routeType === "protected" && !isAuthenticated) {
      router.push("/");
    } else if (routeType === "public" && isAuthenticated) {
      router.push("/contests");
    }
  }, [currentPath, isAuthenticated, isLoading, router]);

  return <>{children}</>;
}
