import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';

export default function Blog() {
  // TODO: remove mock functionality - fetch blog posts from markdown files
  const posts = [
    {
      slug: 'why-honest-research-matters',
      title: 'Why honest research matters',
      excerpt: 'In an age of rapid information spread and AI-generated content, the importance of honest, human-driven research has never been more critical. This article explores why truthful research builds better futures.',
      date: '2025-11-16',
      tags: ['Research', 'Ethics', 'Philosophy'],
      readingTime: 5,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights from our research, experiences, and the frontiers of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
