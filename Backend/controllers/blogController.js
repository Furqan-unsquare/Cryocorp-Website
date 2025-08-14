const Blog = require('../models/Blog');

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    console.log('Incoming Blog Data:', req.body);

    const { title, content, excerpt, tags, coverImage } = req.body;

    if (!title || !content || !excerpt) {
      return res.status(400).json({ message: 'Title, content, and excerpt are required' });
    }

    if (!req.admin || !req.admin._id) {
      return res.status(401).json({ message: 'Unauthorized: Admin not found' });
    }

    const blog = new Blog({
      title,
      content,
      excerpt,
      tags: tags || [],
      coverImage: coverImage || '',
      author: req.admin._id
    });

    await blog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    console.error('❌ Error creating blog:', error);
    res.status(500).json({ message: error.message || 'Something went wrong!' });
  }
};


// Get All Blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs.map(blog => ({
      id: blog._id,
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      tags: blog.tags,
      coverImage: blog.coverImage,
      author: blog.author,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt
    })));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: error.message || 'Something went wrong!' });
  }
};

// Get Single Blog
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name email');
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({
      id: blog._id,
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      tags: blog.tags,
      coverImage: blog.coverImage,
      author: blog.author,
      createdAt: blog.createdAt,
      updatedAt: blog.updatedAt
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: error.message || 'Something went wrong!' });
  }
};

// Update Blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, excerpt, tags, coverImage } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (!req.admin || blog.author.toString() !== req.admin._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to update this blog' });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.excerpt = excerpt || blog.excerpt;
    blog.tags = tags || blog.tags;
    blog.coverImage = coverImage !== undefined ? coverImage : blog.coverImage;

    await blog.save();

    res.json({
      message: 'Blog updated successfully',
      blog: {
        id: blog._id,
        title: blog.title,
        content: blog.content,
        excerpt: blog.excerpt,
        tags: blog.tags,
        coverImage: blog.coverImage,
        author: {
          id: req.admin._id,
          name: req.admin.name,
          email: req.admin.email
        },
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt
      }
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: error.message || 'Something went wrong!' });
  }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    if (!req.admin || blog.author.toString() !== req.admin._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized to delete this blog' });
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: error.message || 'Something went wrong!' });
  }
};