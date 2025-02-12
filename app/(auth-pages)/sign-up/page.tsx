// app/(auth-pages)/sign-up/page.tsx
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import TwitterLoginButton from "@/app/components/TwitterLoginButton"; // Adjust path if needed
import { handleSignup } from "@/app/actions"; // Server action for signup

export default async function Signup(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  // If a message is provided (error or success), center it on the screen.
  if ("message" in searchParams) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Center container with a fixed max-width */}
      <div className="w-full max-w-md mx-auto">
        <form
          action={handleSignup}
          method="POST"
          className="flex flex-col p-6 bg-background rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-medium text-center">Sign up</h1>
          <p className="text-sm text-center text-foreground mb-4">
            Already have an account?{" "}
            <Link className="text-primary font-medium underline" href="/sign-in">
              Sign in
            </Link>
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="you@example.com"
                required
                className="w-full" // Remove 'text-center' if you prefer input text to be left aligned
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                minLength={6}
                required
                className="w-full" // Remove 'text-center' if not desired
              />
            </div>
            <SubmitButton pendingText="Signing up...">Sign up</SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>

        {/* Twitter Login Button */}
        <div className="mt-6 flex justify-center">
          <TwitterLoginButton />
        </div>
      </div>
      <SmtpMessage />
    </div>
  );
}