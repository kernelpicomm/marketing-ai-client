"use client"; 
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, Wand2, History, Calendar, BarChart3 } from "lucide-react";

const mockData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 600 },
  { name: "Thu", value: 400 },
  { name: "Fri", value: 500 },
  { name: "Sat", value: 350 },
  { name: "Sun", value: 450 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
      <div className="container mx-auto p-6 space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Manage your content generation and social media posts
            </p>
          </div>
          <Button size="lg" className="gap-2" onClick={handleGenerateNewContent}>
            <Wand2 className="w-4 h-4" />
            Generate New Content
          </Button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Generated Posts
              </CardTitle>
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Engagement Rate
              </CardTitle>
              <ArrowUpRight className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6%</div>
              <p className="text-xs text-muted-foreground">+2.2% from last month</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Scheduled Posts
              </CardTitle>
              <Calendar className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Next 7 days</p>
            </CardContent>
          </Card>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Generations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <History className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Content #{i}</p>
                          <p className="text-sm text-muted-foreground">
                            Generated 2 hours ago
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start gap-2" onClick={handleGenerateBlogPost}>
                      <Wand2 className="w-4 h-4" />
                      Generate Blog Post
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" onClick={handleScheduleContent}>
                      <Calendar className="w-4 h-4" />
                      Schedule Content
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2" onClick={handleViewAnalytics}>
                      <BarChart3 className="w-4 h-4" />
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Detailed analytics will be shown here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Content schedule will be shown here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
