import VideoHero from '../../public/hero/herocorsos.mp4'; // Importa el video

const Home = () => {
  return (
    
    <div>
    <div className="relative h-screen">
      <video className="w-full h-full object-cover absolute top-0 left-0" autoPlay muted loop title="Video by Alejandro Espeche">
        <source src={VideoHero} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-5xl mb-4">Corsos Color Orán</h1>
          <p className="text-2x font-style: italic">Salta - Argentina</p>
        </div>
      </div>
    </div>
    <div className='m-10 flex items-center justify-center text-center'>
      <div className='bg-[#f97316] p-20 pb-10 '>
        <h2 className=' pb-5 text-white text-2xl md:text-3xl'>Ven al mejor Carnaval del Norte Argentino</h2>
        <button className="border border-slate-300 hover:border-slate-400 ..."> Send email </button>
      </div>

    </div>
    </div>
  );
};

export default Home;