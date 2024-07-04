// src/components/Blog/BlogList.jsx
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

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
    <div>
      {posts.map(post => (
                <a key={post.id} href={`/blog/${post.id}`} className="mb-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={post.imagen} alt={post.titulo} />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.titulo}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.texto.substring(0, 100)}...</p>
                    </div>
                </a>
            ))}

          
      </div>
  );
};

export default BlogList;
