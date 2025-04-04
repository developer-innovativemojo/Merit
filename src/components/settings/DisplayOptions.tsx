
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Moon, Sun } from 'lucide-react';

const DisplayOptions = () => {
  const form = useForm({
    defaultValues: {
      theme: 'light',
      density: 'comfortable',
    }
  });

  const onSubmit = (data: any) => {
    console.log('Display settings saved:', data);
    // Show toast notification (if using the toast component)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Display Options</CardTitle>
        <CardDescription>Customize the appearance of your MERIT dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-medium">Theme</FormLabel>
                    <FormDescription>
                      Choose between light and dark mode for your dashboard
                    </FormDescription>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        value={field.value}
                        onValueChange={(value) => {
                          if (value) field.onChange(value);
                        }}
                        className="justify-start"
                      >
                        <ToggleGroupItem value="light" aria-label="Light Mode" className="flex gap-2 items-center">
                          <Sun className="h-4 w-4" />
                          <span>Light</span>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="dark" aria-label="Dark Mode" className="flex gap-2 items-center">
                          <Moon className="h-4 w-4" />
                          <span>Dark</span>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="density"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-medium">Dashboard Density</FormLabel>
                    <FormDescription>
                      Control how compact the dashboard appears
                    </FormDescription>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        value={field.value}
                        onValueChange={(value) => {
                          if (value) field.onChange(value);
                        }}
                        className="justify-start"
                      >
                        <ToggleGroupItem value="comfortable" aria-label="Comfortable">Comfortable</ToggleGroupItem>
                        <ToggleGroupItem value="compact" aria-label="Compact">Compact</ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DisplayOptions;
