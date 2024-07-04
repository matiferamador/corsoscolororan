// src/components/Blog/BlogList.jsx
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';


const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "Blog"));
      const postsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className='animate-slideInUp'>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Mira todas las noticias de los Corsos Color Orán
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map(post => {
            const fechaString = new Date(post.fecha.seconds * 1000).toLocaleString();
            return (
                <article key={post.id} className='flex max-w-xl flex-col items-start justify-between'>
                  <div className="flex items-center gap-x-4 text-xs">
                    <p className="text-gray-500">
                      {fechaString}
                    </p>
                    <a
                      href={post.categoria}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.categoria}
                    </a>
                  </div>
                  <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {post.titulo}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.texto.substring(0, 100)}...</p>
                <Link
                      to={`/blog/${post.id}`} 
                      className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      Leer más
                    </Link>
              </div>
        </article>
            );
        })}
        </div>
      </div>
  );
};

export default BlogList;
