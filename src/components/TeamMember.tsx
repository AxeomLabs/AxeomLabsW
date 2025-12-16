import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  initials: string;
  vision: string;
  role?: string;
}

export default function TeamMember({ name, initials, vision, role }: TeamMemberProps) {
  return (
    <Card className="hover-elevate transition-all duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <Avatar className="h-32 w-32 border-2 border-primary/30">
          <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
        <p className="text-sm text-muted-foreground italic">"{vision}"</p>
      </CardContent>
    </Card>
  );
}
