
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Blog } from '@/types/blog';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const readingTime = Math.ceil(blog.content.split(' ').length / 100); // Approximate reading time

  return (
    <Card className="hover:shadow-lg transition-all duration-200 h-full flex flex-col rounded-lg">
      {blog.coverImage && (
        
        <Link to={`/blog/${blog.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-200 rounded-t-lg"
          />
        </div></Link>
      )} 
      
      <CardHeader className="flex-1">
        <Link to={`/blog/${blog.id}`}>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-3 w-3 mr-1" />
          {new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        
        <CardTitle className="line-clamp-3 mb-1 pb-1 leading-tight hover:text-black transition-colors">
            {blog.title}
        </CardTitle>
        
        <CardDescription className="line-clamp-3">
          {blog.excerpt}
        </CardDescription>
        </Link>
      </CardHeader>
      
      <CardContent>
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {blog.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {blog.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{blog.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogCard;
