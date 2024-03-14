import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/dashboard","/api/webhooks/clerk", "/api/webhooks/stripe"],
  ignoredRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
