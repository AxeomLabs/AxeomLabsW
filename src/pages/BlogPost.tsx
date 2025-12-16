import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  
  // TODO: remove mock functionality - fetch actual post content from markdown files
  const post = {
    slug: params?.slug || '',
    title: 'Why honest research matters',
    date: '2025-11-16',
    tags: ['Research', 'Ethics', 'Philosophy'],
    readingTime: 5,
    content: `
In an age of rapid information spread and AI-generated content, the importance of honest, human-driven research has never been more critical. At AxeomLabs, we believe that truthful research is the foundation upon which better futures are built.

## The Problem with Shortcuts

The pressure to publish quickly, to show results, or to confirm existing beliefs can lead researchers down problematic paths. Data can be cherry-picked, methodologies can be rushed, and conclusions can be drawn before the evidence truly supports them.

We've seen this play out repeatedly across industries:
- Tech companies releasing AI products before understanding their limitations
- Research papers that can't be reproduced
- Solutions that work in controlled environments but fail in the real world

## Our Commitment to Honesty

At AxeomLabs, we take a different approach:

**Transparent Methodology**: We document our research process completely, including dead ends and failures. These "failures" often contain the most valuable insights.

**Long-term Thinking**: We prioritize research that stands the test of time over quick wins. If a project needs more time to be done right, we take that time.

**Human Review**: While we use AI tools, every piece of research is ultimately reviewed, understood, and validated by humans. We don't outsource our critical thinking to algorithms.

## The Real-World Impact

Honest research isn't just an academic ideal—it has practical implications:

When a student asks us for help with a project, they get guidance that will actually work, not just sound impressive. When an executive seeks security advice, they receive an honest assessment of vulnerabilities, not a sales pitch. When we publish findings, other researchers can build on them with confidence.

## Building Better Futures

The future we're working toward is one where:
- Research can be trusted
- Technology serves people rather than deceiving them
- Knowledge compounds reliably over time
- Students and professionals alike can find honest guidance

This vision requires commitment from all of us—researchers, educators, technologists, and the broader community. It requires saying "I don't know" when we don't know. It requires admitting mistakes. It requires patience.

## Your Role

If you're a student, demand honesty from your resources. If you're a professional, prioritize accuracy over speed. If you're a leader, create environments where honest research is rewarded.

Together, we can build a future where research integrity isn't the exception—it's the standard.

---

*Have thoughts on this topic? We'd love to hear from you. Reach out through our [contact page](/contact) or submit a question to [BadWater](/badwater) for a human response.*
    `,
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8" data-testid="button-back-to-blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <header className="mb-8 not-prose">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="border-t border-border/40 pt-8">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">{children}</ul>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline">{children}</a>
                ),
                hr: () => <hr className="border-border/40 my-8" />,
                em: ({ children }) => (
                  <em className="italic text-muted-foreground">{children}</em>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
