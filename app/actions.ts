"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const supabase = createClient();

export const handleSignup = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect("error", "/sign-up", "Email and password are required");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link."
  );
};

export const handleSignin = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return encodedRedirect("error", "/sign-in", "Email and password are required");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/dashboard");
};

export const handleTwitterLogin = async () => {
  const origin = (await headers()).get("origin");
  
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "twitter",
    options: {
      redirectTo: `${origin}/dashboard`, // Ensure dashboard is correct for Twitter auth
    },
  });

  if (error) {
    console.error("Twitter login error:", error.message);
    return encodedRedirect("error", "/sign-in", "Twitter login failed");
  }

  return redirect("/dashboard");
};

export const handleForgotPassword = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const origin = (await headers()).get("origin");

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect("error", "/forgot-password", "Could not reset password");
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const handleResetPassword = async (formData: FormData) => {
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  if (!password || !confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed"
    );
  }

  return encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const handleSignOut = async () => {
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
