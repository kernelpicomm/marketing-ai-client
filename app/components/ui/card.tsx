import * as React from "react";
import { cn } from "@/lib/utils"; 

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn("bg-white shadow-md rounded-lg p-4", className)} {...props} />
);

const CardHeader: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn("border-b pb-2 mb-2 font-semibold", className)} {...props} />
);

const CardTitle: React.FC<CardProps> = ({ className, ...props }) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props} />
);

const CardContent: React.FC<CardProps> = ({ className, ...props }) => (
  <div className={cn("text-sm text-gray-600", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardContent };
