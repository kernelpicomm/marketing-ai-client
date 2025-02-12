import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({ request: { headers: request.headers } });

    // ✅ Create Supabase client with cookie support
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
            response = NextResponse.next({ request });

            cookiesToSet.forEach(({ name, value, options }) => 
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // ✅ Get the latest session
    const { data: user, error } = await supabase.auth.getUser();

    // ✅ BLOCK access to protected pages if user is NOT authenticated
    if (request.nextUrl.pathname.startsWith("/protected") && error) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // ❌ Do NOT force a redirect to `/dashboard` yet. Let `/loading` handle it.
    return response;
  } catch (e) {
    console.error("Middleware Error:", e);
    return NextResponse.next({ request: { headers: request.headers } });
  }
};
