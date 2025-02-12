"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Loading() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const interval = setInterval(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        clearInterval(interval);
        router.push("/dashboard");
      }
    }, 500); // Poll every 500ms

    // Fallback timeout: after 10 seconds, if no session, redirect to sign-in.
    const timeout = setTimeout(() => {
      clearInterval(interval);
      router.push("/sign-in");
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [supabase, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-medium">Verifying authentication...</p>
    </div>
  );
}
