const Info = () => {
    return (
      <div className="container mx-auto px-4 py-8 animate-slideInUp">
        <div>
        <h2 className="text-2xl md:text-3xl mb-4">Información</h2>

        </div>
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <div className="border-b">
                <button
                    onClick={toggleAccordion}
                    className="w-full flex justify-between items-center p-4 text-left text-gray-700 hover:bg-gray-200 focus:outline-none"
                >
                    <span>Sección 1</span>
                    <svg
                        className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div className="accordion-content px-4 py-2">
                        Contenido de la sección 1
                    </div>
                )}
            </div>
        </div>

      </div>
    );
  };
  export default Info;