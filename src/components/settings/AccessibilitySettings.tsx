
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Slider } from '@/components/ui/slider';

const AccessibilitySettings = () => {
  const form = useForm({
    defaultValues: {
      textSize: 'medium',
      contrast: [50],
    }
  });

  const onSubmit = (data: any) => {
    console.log('Accessibility settings saved:', data);
    // Show toast notification (if using the toast component)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility Settings</CardTitle>
        <CardDescription>Customize your viewing experience for better accessibility</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="textSize"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-medium">Text Size</FormLabel>
                    <FormDescription>
                      Choose your preferred text size
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
                        <ToggleGroupItem value="small" aria-label="Small">Small</ToggleGroupItem>
                        <ToggleGroupItem value="medium" aria-label="Medium">Medium</ToggleGroupItem>
                        <ToggleGroupItem value="large" aria-label="Large">Large</ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contrast"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-base font-medium">Color Contrast</FormLabel>
                    <FormDescription>
                      Adjust the color contrast for better readability
                    </FormDescription>
                    <FormControl>
                      <div className="px-1">
                        <Slider 
                          min={0} 
                          max={100} 
                          step={1} 
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Low Contrast</span>
                      <span>High Contrast</span>
                    </div>
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

export default AccessibilitySettings;
