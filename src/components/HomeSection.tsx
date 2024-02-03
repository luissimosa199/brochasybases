import React from "react";
import RightArrowIcon from "./icons/RightArrowIcon";
import HomeProductList from "./HomeProductList";

const HomeSection = () => {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center bg-[url('/assets/brochas-0002.jpg')]">
          <div className="bg-gray-900 bg-opacity-60 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                Las Mejores Brochas de Maquillaje en España
              </h2>
              <p className="mt-2 text-gray-200 font-semibold">
                Potencia tu estilo con las mejores brochas de maquillaje en
                España. Descubre kits profesionales y marcas líderes para un
                maquillaje impecable.
              </p>
              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Ver Ranking</span>
                <RightArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-[url('/assets/bases-0001.jpg')] ">
            <div className="bg-gray-900 bg-opacity-60 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Las Mejores Bases del 2024
                </h2>
                <p className="mt-2 text-gray-200 font-semibold">
                  Explora nuestra selección de Las Mejores Bases del 2024. Desde
                  maquillaje artístico hasta maquillaje de noche, encuentra la
                  base perfecta para cada ocasión. Explora la calidad de marcas
                  profesionales y logra un maquillaje impecable.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>ir al top</span>
                  <RightArrowIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-[url('/assets/esponjas-0001.jpg')]">
            <div className="bg-gray-900 bg-opacity-60 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  ¿Cómo elegir correctamente la base de maquillaje?
                </h2>
                <p className="mt-2 text-gray-200 font-semibold">
                  Descubre los secretos para elegir la base de maquillaje
                  perfecta con nuestra guía. Desde maquillaje fácil hasta
                  maquillaje artístico, aprende a seleccionar la base ideal para
                  cada ocasión.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>mira la guía</span>
                  <RightArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <HomeProductList
          title={"Nuevas Brochas"}
          productTipe="brochas"
        />
        <HomeProductList
          title={"Nuevas Bases"}
          productTipe="bases"
        />
      </div>
    </main>
  );
};

export default HomeSection;
