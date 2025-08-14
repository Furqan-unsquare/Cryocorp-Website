import { useState, useEffect } from 'react';
import useBlogs from '@/hooks/useBlogs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Plus, Edit, Trash2, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import BlogForm from './BlogForm';
import { Blog } from '@/types/blog';

const BlogList = () => {
  const { blogs, loading, getBlogs, deleteBlog } = useBlogs();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [expandedBlogIds, setExpandedBlogIds] = useState<Set<string>>(new Set());


  useEffect(() => {
    getBlogs().catch(error => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch blogs',
        variant: 'destructive'
      });
    }); 
  }, [getBlogs]);

  const toggleExpand = (id: string) => {
  setExpandedBlogIds(prev => {
    const newSet = new Set(prev);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    return newSet;
  });
};

// Sort blogs by createdAt in descending order
const sortedBlogs = [...blogs].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
);

const filteredBlogs = sortedBlogs.filter(blog =>
  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
);

const visibleBlogs = filteredBlogs.slice(0, visibleCount);


  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlog(id);
        toast({
          title: 'Success',
          description: 'Blog post deleted successfully',
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: error.message || 'Failed to delete blog',
          variant: 'destructive'
        });
      }
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingBlog(null);
    getBlogs().catch(error => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch blogs',
        variant: 'destructive'
      });
    });
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingBlog(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Add New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>
                {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </DialogTitle>
            </DialogHeader>
            <BlogForm blog={editingBlog} onClose={handleFormClose} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search blogs by title, excerpt, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Blog List */}
      <div className="space-y-4">
        {visibleBlogs.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 mb-4">
                {searchTerm ? 'No blogs found matching your search.' : 'No blog posts yet.'}
              </p>
              {!searchTerm && (
                <Dialog open={showForm} onOpenChange={setShowForm}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setEditingBlog(null)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Blog
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                      <DialogTitle>Create New Blog Post</DialogTitle>
                    </DialogHeader>
                    <BlogForm blog={null} onClose={handleFormClose} />
                  </DialogContent>
                </Dialog>
              )}
            </CardContent>
          </Card>
        ) : (
         visibleBlogs.map((blog) => {
  const isExpanded = expandedBlogIds.has(blog.id);
  return (
    <Card key={blog.id} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle
              onClick={() => toggleExpand(blog.id)}
              className="text-lg cursor-pointer hover:underline"
            >
              {blog.title}
            </CardTitle>
            <CardDescription className="mt-1 flex items-center text-sm text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleEdit(blog)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(blog.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-3">{blog.excerpt}</p>

        <div
          className={`text-gray-800 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="py-2"
          />
        </div>

        <Button
          variant="link"
          className="text-blue-600 p-0 mt-2 text-sm"
          onClick={() => toggleExpand(blog.id)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </Button>

        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
})

        )}
      </div>

      {/* Load More */}
      {visibleCount < filteredBlogs.length && (
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            Load More Posts
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogList;