import * as React from "react";

interface TabsProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  onClick: (value: string) => void;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({ children }) => (
  <div className="border-b">{children}</div>
);

const TabsList: React.FC<TabsProps> = ({ children }) => (
  <div className="flex">{children}</div>
);

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value, onClick }) => (
  <button onClick={() => onClick(value)} className="p-2 border-b-2">
    {children}
  </button>
);

const TabsContent: React.FC<TabsContentProps> = ({ children, value, activeTab }) =>
  activeTab === value ? <div className="p-4">{children}</div> : null;

export { Tabs, TabsList, TabsTrigger, TabsContent };
