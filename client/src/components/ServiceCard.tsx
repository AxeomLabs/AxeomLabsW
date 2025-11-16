import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  benefits: string[];
  note?: string;
}

export default function ServiceCard({ icon: Icon, title, benefits, note }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300">
      <CardHeader>
        <Icon className="h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        {note && (
          <p className="text-xs text-muted-foreground italic">{note}</p>
        )}
        <Link href="/contact">
          <Button className="w-full" data-testid={`button-contact-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Contact to discuss
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
