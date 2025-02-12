"use client";

import { useState } from "react";
import {
  BarChart3,
  Users,
  MessageSquare,
  TrendingUp,
  LogOut,
  Wand2,
  History,
  Calendar,
} from "lucide-react";
import { StatsCard } from "@/app/components/dashboard/StatsCard";
import { RecentPosts } from "@/app/components/dashboard/RecentPosts";
import { QuickActions } from "@/app/components/dashboard/QuickActions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 600 },
  { name: "Thu", value: 400 },
  { name: "Fri", value: 500 },
  { name: "Sat", value: 350 },
  { name: "Sun", value: 450 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Handlers for quick actions
  const handleGenerateNewContent = () => {
    console.log("Generating new content...");
  };

  const handleGenerateBlogPost = () => {
    console.log("Generating blog post...");
  };

  const handleScheduleContent = () => {
    console.log("Scheduling content...");
  };

  const handleViewAnalytics = () => {
    console.log("Viewing analytics...");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Welcome back! Here’s an overview of your recent activity.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              onClick={handleGenerateNewContent}
            >
              <Wand2 className="w-4 h-4" />
              New Content
            </button>
            {/* Logout Button (if using manual logout, wrap in a form calling a server action)
            <form action={handleSignOut} method="POST">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 border rounded-md text-foreground hover:bg-muted transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </form>
            */}
          </div>
        </header>

        {/* Stats Cards */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <StatsCard
            title="Total Posts"
            value="128"
            icon={<BarChart3 className="h-5 w-5 text-secondary" />}
            description="+14% from last month"
          />
          <StatsCard
            title="Audience Reach"
            value="24.5K"
            icon={<Users className="h-5 w-5 text-secondary" />}
            description="Across all platforms"
          />
          <StatsCard
            title="Engagement Rate"
            value="4.3%"
            icon={<MessageSquare className="h-5 w-5 text-secondary" />}
            description="Average across posts"
          />
          <StatsCard
            title="Growth Rate"
            value="+22%"
            icon={<TrendingUp className="h-5 w-5 text-secondary" />}
            description="Month over month"
          />
        </section>

        {/* Performance Overview Chart */}
        <section className="mb-10">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Performance Overview
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Quick Actions, Recent Posts & Insights */}
        <section className="grid gap-6 md:grid-cols-3">
          <QuickActions
            onGenerateBlogPost={handleGenerateBlogPost}
            onScheduleContent={handleScheduleContent}
            onViewAnalytics={handleViewAnalytics}
          />
          <RecentPosts />
          <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              Insights
            </h2>
            <p className="text-muted-foreground">
              Detailed analytics and insights coming soon.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}