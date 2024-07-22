import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  // Ajusta la cantidad de posts por página según la ruta actual
  const postsPerPage = location.pathname === '/' ? 4 : 6;

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

  // Calcula las entradas que se mostrarán en la página actual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Cambia de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Nuestro Blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-500">
          Mira todas las noticias de los Corsos
        </p>
      </div>
      <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
        {currentPosts.map(post => {
          const fechaString = new Date(post.fecha.seconds * 1000).toLocaleString();

          return (
            <article key={post.id} className='drop-shadow-xl flex max-w-xl flex-col items-start justify-between bg-white p-5 rounded-xl'>
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
                  <h3 className="mt-3 text-lg font-bold leading-6 text-[#6d28d9] hover:text-gray-600">
                    {post.titulo}
                  </h3>
                </Link>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.texto.substring(0, 100)}...</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center border-t border-gray-200 mt-20 px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Anterior
          </button>
          <button
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Siguiente
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === index + 1
                    ? 'bg-[#6d28d9] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d28d9]'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Siguiente</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
