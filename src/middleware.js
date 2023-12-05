import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	publicRoutes: ['/', '/details', '/details/:id', '/api/users'],
	ignoredRoutes: ['/(api/games)(.*)','/api/license', '/api/userLicense', '/api/sendEmail', '/api/webhook'] // Utiliza .* para representar cualquier cadena de caracteres.
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};