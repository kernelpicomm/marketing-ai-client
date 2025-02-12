import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Plus, Zap, Calendar, RefreshCw } from "lucide-react";

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button className="flex items-center space-x-2" variant="outline">
          <Plus className="h-4 w-4" />
          <span>New Post</span>
        </Button>
        <Button className="flex items-center space-x-2" variant="outline">
          <Zap className="h-4 w-4" />
          <span>Generate</span>
        </Button>
        <Button className="flex items-center space-x-2" variant="outline">
          <Calendar className="h-4 w-4" />
          <span>Schedule</span>
        </Button>
        <Button className="flex items-center space-x-2" variant="outline">
          <RefreshCw className="h-4 w-4" />
          <span>Sync</span>
        </Button>
      </CardContent>
    </Card>
  );
};
