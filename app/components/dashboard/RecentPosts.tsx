import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

interface Post {
  id: number;
  platform: string;
  content: string;
  status: string;
  date: string;
}

const recentPosts: Post[] = [
  {
    id: 1,
    platform: "Twitter",
    content: "Boost your social media presence with AI-powered content generation!",
    status: "Published",
    date: "2024-03-20",
  },
  {
    id: 2,
    platform: "LinkedIn",
    content: "Discover how AI is transforming social media marketing strategies.",
    status: "Scheduled",
    date: "2024-03-21",
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Automate your social media content with our AI tools.",
    status: "Draft",
    date: "2024-03-22",
  },
];

export const RecentPosts = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors"
            >
              <div className="space-y-1">
                <p className="font-medium text-foreground">{post.content}</p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{post.platform}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  post.status === "Published"
                    ? "bg-green-100 text-green-800"
                    : post.status === "Scheduled"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
