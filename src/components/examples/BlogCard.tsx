import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        slug="why-honest-research-matters"
        title="Why honest research matters"
        excerpt="Exploring the importance of truthful research in building better futures for everyone."
        date="2025-11-16"
        tags={['Research', 'Ethics']}
        readingTime={5}
      />
    </div>
  );
}
