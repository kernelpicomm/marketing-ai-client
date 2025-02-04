"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function TwitterLoginButton() {
  const router = useRouter();

  const handleTwitterLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitter",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      console.error("Twitter login error:", error.message);
    } else {
      router.push("/dashboard"); // ✅ Redirect to dashboard after login
    }
  };

  return (
    <Button
      onClick={handleTwitterLogin}
      variant="outline"
      className="flex items-center gap-2"
    >
      <Twitter size={20} />
      Continue with Twitter
    </Button>
  );
}

