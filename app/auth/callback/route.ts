// app/auth/callback/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Extract searchParams and origin from the Next.js extended request
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirect_to") || "/dashboard";

  if (!code) {
    console.error("OAuth callback error: Missing authorization code.");
    return NextResponse.redirect(`${origin}/sign-in?error=missing_code`);
  }

  try {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Supabase OAuth session exchange failed:", error.message);
      return NextResponse.redirect(`${origin}/sign-in?error=session_exchange_failed`);
    }

    // Finally, redirect to the specified path (default /dashboard)
    return NextResponse.redirect(`${origin}${redirectTo}`);
  } catch (err) {
    console.error("Unexpected OAuth callback error:", err);
    return NextResponse.redirect(`${origin}/sign-in?error=unexpected_error`);
  }
}
