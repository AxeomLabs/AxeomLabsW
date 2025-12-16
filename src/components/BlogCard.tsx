import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: number;
}

export default function BlogCard({ slug, title, excerpt, date, tags, readingTime }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="hover-elevate transition-all duration-300 h-full cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readingTime} min read
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
