// src/pages/blog.jsx
import { Outlet } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='container mx-auto px-4 py-8 animate-slideInUp'>
      <Outlet />
    </div>
  );
};

export default Blog;
