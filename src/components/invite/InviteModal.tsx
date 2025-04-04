
import React, { useState, useEffect } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const inviteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  relationship: z.enum(["internal", "external"], {
    required_error: "Please select a relationship type.",
  }),
  role: z.enum(["BD", "HR", "Program", "SME", "Reviewer"], {
    required_error: "Please select a role.",
  }).optional(),
  message: z.string().optional(),
});

type InviteFormValues = z.infer<typeof inviteFormSchema>;

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextualData?: {
    partnerName?: string;
    opportunityName?: string;
  };
}

export const InviteModal = ({ isOpen, onClose, contextualData }: InviteModalProps) => {
  const [inviteStep, setInviteStep] = useState<'form' | 'success'>('form');
  const [inviteLink, setInviteLink] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<InviteFormValues>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      relationship: 'external',
      message: contextualData?.opportunityName 
        ? `Hi, I'd like to collaborate with you on the ${contextualData.opportunityName} opportunity.` 
        : '',
    },
  });

  // Auto-detect internal vs external based on email domain
  useEffect(() => {
    const emailValue = form.watch('email');
    if (emailValue && emailValue.includes('@')) {
      const domain = emailValue.split('@')[1];
      // Assuming 'meritsolutions.com' is the internal domain
      const isInternal = domain === 'meritsolutions.com';
      form.setValue('relationship', isInternal ? 'internal' : 'external');
    }
  }, [form.watch('email')]);

  const handleSubmit = (values: InviteFormValues) => {
    // Generate a mock invite link that would normally come from an API
    const mockInviteId = Math.random().toString(36).substring(2, 15);
    setInviteLink(`https://merit.app/invite/${mockInviteId}`);
    
    // Show success state
    setInviteStep('success');
    
    // In a real app, you would send this data to your backend
    console.log('Invitation data:', values);
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopySuccess(true);
      toast({
        title: "Link copied",
        description: "Invite link copied to clipboard"
      });
      
      // Reset the copy button after 2 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    });
  };
  
  const handleClose = () => {
    setInviteStep('form');
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {inviteStep === 'form' ? 'Invite Contact to MERIT' : 'Invitation Sent'}
          </DialogTitle>
          <DialogDescription>
            {inviteStep === 'form' 
              ? 'Send an invitation to collaborate on the MERIT platform.' 
              : 'Your invitation has been sent successfully.'}
          </DialogDescription>
        </DialogHeader>
        
        {inviteStep === 'form' ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="email@example.com" 
                        type="email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="relationship"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Relationship</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="internal" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            Internal Teammate
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="external" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            External Partner
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Role (Optional)</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                        className="grid grid-cols-3 gap-2"
                      >
                        {['BD', 'HR', 'Program', 'SME', 'Reviewer'].map((role) => (
                          <FormItem key={role} className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={role} />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              {role}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Add a personal message..." 
                        className="resize-y"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  Send Invitation
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-center p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Check className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-medium">Invitation sent successfully</h3>
              <p className="text-sm text-muted-foreground">
                The invitation will expire in 7 days if not accepted.
              </p>
            </div>
            
            <div className="relative">
              <Input
                value={inviteLink}
                readOnly
                className="pr-10"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0"
                onClick={handleCopyLink}
              >
                {copySuccess ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button onClick={handleClose}>
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
