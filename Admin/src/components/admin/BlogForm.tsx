import { useState, useEffect } from 'react';
import useBlogs from '@/hooks/useBlogs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Blog } from '@/types/blog';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogFormProps {
  blog: Blog | null;
  onClose: () => void;
}

const BlogForm = ({ blog, onClose }: BlogFormProps) => {
  const { createBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');
  const [excerpt, setExcerpt] = useState(blog?.excerpt || '');
  const [tags, setTags] = useState(blog?.tags.join(', ') || '');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState(blog?.coverImage || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Quill toolbar settings with color options
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }], // <-- text & background color pickers
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'align',
    'link', 'image'
  ];

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setExcerpt(blog.excerpt);
      setTags(blog.tags.join(', '));
      setCoverImagePreview(blog.coverImage || '');
    }
  }, [blog]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Error',
          description: 'Please upload a valid image file',
          variant: 'destructive'
        });
        return;
      }
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !excerpt) {
      toast({
        title: 'Error',
        description: 'Title, content, and excerpt are required',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const blogData = {
        title,
        content,
        excerpt,
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        coverImage: coverImagePreview || ''
      };

      if (blog) {
        await updateBlog({ id: blog.id, ...blogData });
        toast({
          title: 'Success',
          description: 'Blog updated successfully'
        });
      } else {
        await createBlog(blogData);
        toast({
          title: 'Success',
          description: 'Blog created successfully'
        });
      }
      onClose();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to save blog',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          required
        />
      </div>

      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setExcerpt(e.target.value)}
          placeholder="Enter a short excerpt"
          required
        />
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <div className="mt-2 bg-white text-black rounded border border-gray-300">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            className="min-h-[200px]"
            modules={quillModules}
            formats={quillFormats}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          value={tags}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
          placeholder="e.g., tech, coding, tutorial"
        />
      </div>

      <div>
        <Label htmlFor="coverImage">Cover Image</Label>
        <Input
          id="coverImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {coverImagePreview && (
          <img
            src={coverImagePreview}
            alt="Cover Preview"
            className="mt-2 w-48 h-48 object-cover rounded"
          />
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : blog ? 'Update Blog' : 'Create Blog'}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
