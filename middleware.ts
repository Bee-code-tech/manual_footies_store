import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  apiRoutes: [], 
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 