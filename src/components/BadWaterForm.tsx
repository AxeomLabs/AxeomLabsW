import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const badWaterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  topic: z.enum(['homework', 'project-advice', 'career-guidance', 'research-help', 'other'], {
    required_error: 'Please select a topic',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  file: z.instanceof(FileList).optional(),
});

type BadWaterFormData = z.infer<typeof badWaterSchema>;

export default function BadWaterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BadWaterFormData>({
    resolver: zodResolver(badWaterSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const fileRef = form.register('file');

  const onSubmit = async (data: BadWaterFormData) => {
    setIsSubmitting(true);
    console.log('BadWater form submitted:', data);
    
    const file = data.file?.[0];
    if (file && file.size > MAX_FILE_SIZE) {
      toast({
        title: 'File too large',
        description: 'Please upload a file smaller than 10MB',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }
    
    // TODO: Implement actual form submission to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Question submitted!',
      description: 'A human will review your question and respond shortly. No AI involved!',
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" data-testid="input-badwater-name" {...field} />
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
                <Input type="email" placeholder="your@email.com" data-testid="input-badwater-email" {...field} />
              </FormControl>
              <FormDescription>We'll send a human response to this email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-badwater-topic">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="homework">Homework</SelectItem>
                  <SelectItem value="project-advice">Project Advice</SelectItem>
                  <SelectItem value="career-guidance">Career Guidance</SelectItem>
                  <SelectItem value="research-help">Research Help</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your question..." 
                  className="min-h-32"
                  data-testid="input-badwater-message"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>File (Optional)</FormLabel>
          <FormControl>
            <Input 
              type="file" 
              accept="*/*"
              data-testid="input-badwater-file"
              {...fileRef}
            />
          </FormControl>
          <FormDescription>Max 10MB. Any file type accepted.</FormDescription>
        </FormItem>

        <Button type="submit" className="w-full" disabled={isSubmitting} data-testid="button-badwater-submit">
          {isSubmitting ? 'Submitting...' : 'Submit Question'}
        </Button>
      </form>
    </Form>
  );
}
