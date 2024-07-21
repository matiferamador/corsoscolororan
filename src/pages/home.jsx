import VideoHero from '../../public/hero/herocorsos.mp4'; // Importa el video
import BlogList from '../components/blog/BlogList';

const Home = () => {
  return (
    
    <div>
    <div className="relative h-screen">
      <video className="w-full h-full object-cover absolute top-0 left-0 brightness-90" autoPlay muted loop title="Video by Alejandro Espeche">
        <source src={VideoHero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4 drop-shadow-2xl ">Corsos Color Orán</h1>
          <p className="text-1xl font-style: italic">Salta - Argentina</p>
        </div>
      </div>
    </div>
    <div className='my-20 mx-4 flex items-center justify-center text-center '>
      <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-10 rounded-lg '>
        <h2 className=' pb-5 text-white text-3xl md:text-4xl'>¡Ven al mejor Carnaval del Norte Argentino!</h2>
        <button className="border border-slate-400 hover:border-slate-200 text-white p-2 rounded-lg">Nuestra Historia</button>
      </div>

    </div>
    <div className='container mx-auto px-4 py-8 my-20'>
      <BlogList></BlogList>
    </div>
    </div>
  );
};

export default Home;