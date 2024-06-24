import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const postFiles = [
        '/posts/post-1.md',
      ];
      const postPromises = postFiles.map(file => fetch(file).then(res => res.text()));
      const postContents = await Promise.all(postPromises);
      setPosts(postContents);
    };
    loadPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl mb-4">Blog</h2>
      {posts.map((post, index) => (
        <div key={index} className="mb-6">
          <ReactMarkdown>{post}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Blog;

