import { auth } from "./configuration/auth"

 
export const config = {
  matcher: ['/pages/profile', '/pages/protectedPage1'],
}

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL("/pages/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})