// src/components/Blog/BlogDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "Blog", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <>
         <img className="object-cover w-full " src={post.imagen} alt={post.titulo} />
          <h2 className="text-2xl font-bold">{post.titulo}</h2>
          <p className="text-gray-700">{post.texto}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
