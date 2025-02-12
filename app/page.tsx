// app/page.tsx
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-opacity-90 backdrop-blur-md">
        <div className="w-full max-w-6xl flex justify-between items-center p-4 text-lg font-semibold">
          <Link href="/" className="text-xl font-bold">
            X Automation
          </Link>
          <div className="flex gap-4 items-center">
            {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            <DeployButton />
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 max-w-4xl">
        <h1 className="text-4xl font-bold md:text-6xl leading-tight">
          Transform Social Media Management with Smart AI Automation
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          Streamline your social media presence with AI-powered content creation and scheduling.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/sign-up"
            className="px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="px-6 py-3 text-lg font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Sign In
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center py-20 px-6 max-w-6xl">
        <div className="p-6 rounded-lg bg-gray-900">
          <h3 className="text-xl font-semibold">AI-Driven Content</h3>
          <p className="mt-2 text-gray-400">
            Generate engaging content with AI-powered tools.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-900">
          <h3 className="text-xl font-semibold">Automated Scheduling</h3>
          <p className="mt-2 text-gray-400">
            Schedule posts across platforms effortlessly.
          </p>
        </div>
        <div className="p-6 rounded-lg bg-gray-900">
          <h3 className="text-xl font-semibold">Performance Analytics</h3>
          <p className="mt-2 text-gray-400">
            Track and optimize engagement with smart insights.
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center border-t py-10 text-center text-sm gap-4">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
        <ThemeSwitcher />
      </footer>
    </main>
  );
}
