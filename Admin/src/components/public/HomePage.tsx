import { useState, useEffect } from 'react';
import useBlogs  from '@/hooks/useBlogs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import BlogCard from './BlogCard';
import { Blog } from '@/types/blog';

const HomePage = () => {
  const {blogs, loading, getBlogs } = useBlogs();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    getBlogs().catch(error => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch blogs',
        variant: 'destructive'
      });
    });
  }, [getBlogs]);

const filteredBlogs = blogs.filter((blog: Blog) =>
  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-teal-600">BlogSpace</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover insights, tutorials, and stories from our community of writers.
            Stay updated with the latest trends and technologies.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-4">
            {searchTerm ? 'No articles found matching your search.' : 'No published articles yet.'}
          </p>
          {searchTerm && (
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Clear Search
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {visibleBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredBlogs.length && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount(prev => prev + 6)}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;