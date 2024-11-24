import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  datePublished: { type: Date, default: Date.now },
  tags: [String], // Tags to categorize blogs (e.g., ["JavaScript", "Node.js"])
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
