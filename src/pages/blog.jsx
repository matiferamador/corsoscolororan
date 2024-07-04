import { Outlet } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-slideInUp">
      <h1 className="text-2xl md:text-3xl mb-4">Blog</h1>
      <Outlet />
    </div>
  );
};

export default Blog;
