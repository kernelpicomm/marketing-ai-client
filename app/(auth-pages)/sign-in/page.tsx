// app/(auth-pages)/sign-in/page.tsx
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import TwitterLoginButton from "@/app/components/TwitterLoginButton"; // Adjust path if needed
import { handleSignin } from "@/app/actions"; // Server action for sign in

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Center container with a fixed max-width */}
      <div className="w-full max-w-md mx-auto">
        <form
          action={handleSignin}
          method="POST"
          className="flex flex-col p-6 bg-background rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-medium text-center">Sign in</h1>
          <p className="text-sm text-center text-foreground mb-4">
            Don't have an account?{" "}
            <Link className="text-primary font-medium underline" href="/sign-up">
              Sign up
            </Link>
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                required
                className="w-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                className="text-xs text-foreground underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <SubmitButton pendingText="Signing In...">Sign in</SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>

        {/* Twitter Login Button */}
        <div className="mt-6 flex justify-center">
          <TwitterLoginButton />
        </div>
      </div>
    </div>
  );
}
