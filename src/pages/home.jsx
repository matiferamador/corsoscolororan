import { useRef, useEffect, useState } from 'react';
import VideoHeroWebm from '../../public/hero/herocorsos.webm'; // Importa el video WEBM
import VideoHeroMp4 from '../../public/hero/herocorsos.mp4'; // Importa el video MP4
import BlogList from '../components/blog/BlogList';
import Form from "../components/utils/form"

const Home = () => {
  const videoRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Video is intersecting, should play');
          setShouldPlay(true);
        } else {
          console.log('Video is not intersecting, should pause');
          setShouldPlay(false);
        }
      });
    }, options);
  
    const videoElement = videoRef.current; // Capturar videoRef.current en una variable local
  
    if (videoElement) {
      observer.observe(videoElement);
    }
  
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []); // Asegúrate de que este efecto se ejecute solo una vez, por eso el arreglo de dependencias vacío
  

  return (
    <>
        <div className="relative h-screen flex items-center justify-center pb-40">
            <video
              ref={videoRef}
              className="w-full h-full object-cover absolute top-0 left-0 brightness-50"
              style={{ height: "85vh" }} // Ajusta la altura al 90% del viewport height
              autoPlay={shouldPlay}
              muted
              loop
              title="Video by Alejandro Espeche"
            >
              <source src={VideoHeroWebm} type="video/webm" />
              <source src={VideoHeroMp4} type="video/mp4" />
            </video>
            <div className="absolute ">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl mb-4 font-bold text-gradient">Corsos Color Orán</h1>
                <p className="text-2xl italic">Salta - Argentina</p>
              </div>
            </div>
        </div>


          <div className=" mx-4 flex items-center justify-center text-center ">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-10 py-20 rounded-xl shadow-[0_35px_40px_-15px_rgba(0,0,0,0.5)] ">
              <h2 className=" pb-5 text-white text-3xl md:text-4xl font-medium "> 
                ¡El mejor Carnaval del Norte Argentino!
              </h2>
              <button className="border border-slate-100  hover:shadow-2xl hover:border-slate-100 md:border-slate-500 text-white py-2 px-3 rounded-lg">
                <a href="#">Nuestra Historia</a>
              </button>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 mt-20">
            <BlogList></BlogList>
          </div>
          <div>
            <Form></Form>
          </div>
      
    </>
  );
};

export default Home;

