import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import FocusAreaCard from '@/components/FocusAreaCard';
import BlogCard from '@/components/BlogCard';
import { Bot, Sparkles, Shield, Cpu, GraduationCap, MessageSquare } from 'lucide-react';
import heroImage from '@assets/generated_images/Dark_cosmic_nebula_hero_background_4c50d082.png';

export default function Home() {
  const focusAreas = [
    { icon: Bot, title: 'Robotics', description: 'Advanced robotics research and development' },
    { icon: Sparkles, title: 'Artificial Intelligence', description: 'Cutting-edge AI research and engineering' },
    { icon: Shield, title: 'Security Solutions', description: 'Design and security audits' },
    { icon: Cpu, title: 'Technology', description: 'Innovative technology solutions' },
  ];

  // TODO: remove mock functionality - fetch real blog posts
  const recentPosts = [
    {
      slug: 'why-honest-research-matters',
      title: 'Why honest research matters',
      excerpt: 'Exploring the importance of truthful research in building better futures for everyone.',
      date: '2025-11-16',
      tags: ['Research', 'Ethics'],
      readingTime: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              AxeomLabs — Research, Build, Guide.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              We research hard problems. We teach honestly. We help people — from school projects to high-stakes systems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/badwater">
                <Button size="lg" className="text-lg px-8" data-testid="button-hero-badwater">
                  Get help (BadWater)
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm" data-testid="button-hero-contact">
                  Discuss a project
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What we do</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We provide research, development, and guidance across multiple domains with a focus on honesty and long-term relationships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FocusAreaCard {...area} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our values</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AxeomLabs is a research-first studio building tools, knowledge and educational experiences.
                </p>
                <p>
                  We believe honest research and human guidance unlock better futures for everyone — students, makers, and leaders alike.
                </p>
                <ul className="space-y-2 mt-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Total honesty in all our work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Building trust through transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Long-term relationships over quick wins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Human-first approach to technology</span>
                  </li>
                </ul>
              </div>
              <Link href="/about">
                <Button className="mt-6" data-testid="button-learn-more">
                  Learn more about us
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-card-border rounded-md p-6 hover-elevate">
                <GraduationCap className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Educational</h3>
                <p className="text-sm text-muted-foreground">Portfolio building and mentorship programs</p>
              </div>
              <div className="bg-card border border-card-border rounded-md p-6 hover-elevate">
                <MessageSquare className="h-8 w-8 text-secondary mb-3" />
                <h3 className="font-semibold mb-2">Guidance</h3>
                <p className="text-sm text-muted-foreground">One-on-one coaching and advice</p>
              </div>
              <div className="bg-card border border-card-border rounded-md p-6 hover-elevate col-span-2">
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">BadWater Innovation</h3>
                <p className="text-sm text-muted-foreground">Free human help portal. Ask questions, get real answers from real people. No AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Recent insights</h2>
              <p className="text-muted-foreground">Latest from our research and experience</p>
            </div>
            <Link href="/blog">
              <Button variant="outline" data-testid="button-view-all-posts">
                View all posts
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
