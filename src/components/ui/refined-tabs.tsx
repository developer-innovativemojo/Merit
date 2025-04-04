
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface RefinedTabsProps extends React.ComponentPropsWithoutRef<typeof Tabs> {
  className?: string;
  children: React.ReactNode;
}

const RefinedTabs = React.forwardRef<
  React.ElementRef<typeof Tabs>,
  RefinedTabsProps
>(({ className, ...props }, ref) => (
  <Tabs
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
));
RefinedTabs.displayName = "RefinedTabs";

interface RefinedTabsListProps extends React.ComponentPropsWithoutRef<typeof TabsList> {
  className?: string;
}

const RefinedTabsList = React.forwardRef<
  React.ElementRef<typeof TabsList>,
  RefinedTabsListProps
>(({ className, ...props }, ref) => (
  <TabsList
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-start px-1 rounded-t-lg border-b border-border bg-background overflow-x-auto overflow-y-hidden w-full gap-2 scrollbar-none",
      className
    )}
    {...props}
  />
));
RefinedTabsList.displayName = "RefinedTabsList";

interface RefinedTabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsTrigger> {
  className?: string;
  hasIndicator?: boolean;
  indicatorColor?: 'red' | 'amber' | 'green';
}

const RefinedTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsTrigger>,
  RefinedTabsTriggerProps
>(({ className, hasIndicator, indicatorColor = 'amber', children, ...props }, ref) => (
  <TabsTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition-all",
      "text-muted-foreground hover:text-foreground",
      "data-[state=active]:text-primary data-[state=active]:font-semibold",
      "data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0",
      "data-[state=active]:after:h-1 data-[state=active]:after:w-full data-[state=active]:after:bg-primary",
      "data-[state=active]:bg-primary/5",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50 relative h-full",
      "transition-colors duration-200",
      className
    )}
    {...props}
  >
    <div className="relative inline-flex items-center justify-center">
      {children}
      {hasIndicator && (
        <span 
          className={cn(
            "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full",
            indicatorColor === 'red' && "bg-red-500",
            indicatorColor === 'amber' && "bg-amber-500",
            indicatorColor === 'green' && "bg-green-500"
          )} 
        />
      )}
    </div>
  </TabsTrigger>
));
RefinedTabsTrigger.displayName = "RefinedTabsTrigger";

interface RefinedTabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsContent> {
  className?: string;
}

const RefinedTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsContent>,
  RefinedTabsContentProps
>(({ className, ...props }, ref) => (
  <TabsContent
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
RefinedTabsContent.displayName = "RefinedTabsContent";

export { RefinedTabs, RefinedTabsList, RefinedTabsTrigger, RefinedTabsContent };
