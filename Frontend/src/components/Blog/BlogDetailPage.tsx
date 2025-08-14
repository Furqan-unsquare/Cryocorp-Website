import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useBlogs from '@/hooks/useBlogs';
import { Blog } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getBlogById } = useBlogs();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getBlogById(id)
      .then((data) => setBlog(data))
      .finally(() => setLoading(false));
  }, [id, getBlogById]);

  if (!id) return <Navigate to="/blog" replace />;

  if (loading) {
    return (
      <div className="container mx-auto mt-72 md:mt-80 px-4 py-8">
        <p className="text-center">Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16 mt-52 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  const readingTime = Math.ceil(blog.content.split(' ').length / 200);

const handleShare = async () => {
  const url = window.location.href;
  const shareText = `📖 View our blog: ${blog.title}\n\nRead here:`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: blog.title,
        text: shareText,
        url,
      });
    } else {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      toast({
        title: 'Link copied',
        description: 'Article link has been copied to clipboard.',
      });
    }
  } catch {
    toast({
      title: 'Error',
      description: 'Failed to share or copy the link.',
      variant: 'destructive',
    });
  }
};


  const renderContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
              {paragraph.replace('# ', '')}
            </h1>
          );
        }
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-medium text-gray-900 mb-3 mt-6">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        if (paragraph.startsWith('```') && paragraph.endsWith('```')) {
          const code = paragraph.slice(3, -3);
          return (
            <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
              <code className="text-sm">{code}</code>
            </pre>
          );
        }

        let formattedParagraph = paragraph
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]*)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>');

        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
        );
      });
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-10">
      <div className="mx-auto">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {blog.coverImage && (
          <div className="mb-8">
            <img src={blog.coverImage} alt={blog.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
          </div>
        )}

        <article className="prose prose-lg max-w-none">
          {renderContent(blog.content)}
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
