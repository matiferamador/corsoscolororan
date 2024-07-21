import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Blog"));
        const postsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setPosts(postsData);
  
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Nuestro Blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-500">
          Mira todas las noticias de los Corsos
        </p>
      </div>
      <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map(post => {
          const fechaString = new Date(post.fecha.seconds * 1000).toLocaleString();

          return (
            <article key={post.id} className=' drop-shadow-xl flex max-w-xl flex-col items-start justify-between bg-white p-5 rounded-xl'>
              <div className="flex items-center gap-x-4 text-xs">
                <p className="text-gray-500">
                  {fechaString}
                </p>
                <a
                  href={post.categoria}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:text-white hover:bg-[#6d28d9]"
                >
                  {post.categoria}
                </a>
              </div>
              <div className="group relative">
                <Link to={`/blog/${post.id}`}>
                  <h3 className="mt-3 text-lg font-bold leading-6 text-gray-600 hover:text-[#6d28d9]">
                    {post.titulo}
                  </h3>
                </Link>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#6d28d9]">{post.texto.substring(0, 100)}...</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
