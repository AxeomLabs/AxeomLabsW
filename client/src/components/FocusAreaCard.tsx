import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FocusAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FocusAreaCard({ icon: Icon, title, description }: FocusAreaCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-300">
      <CardContent className="p-6 text-center space-y-4">
        <Icon className="h-10 w-10 mx-auto text-primary" />
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
