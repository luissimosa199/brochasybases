import React from "react";
import ProductCard from "./ProductCard";

const OldMain = () => {
  return (
    <main className="mx-4 text-lg p-4 xl:mx-52 2xl:mx-64">
      <h1 className="font-semibold text-6xl mb-4">
        ¿Buscas las Mejores Brochas de Maquillaje en España?
      </h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:gap-4">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="my-8 grid-rows-2 md:grid-rows-1 col-span-1">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              ¿Te has sentido abrumada por la cantidad de opciones y no sabes
              cuál elegir?
            </h2>
            <p>
              Entendemos esa sensación, por eso te presentamos las mejores
              brochas de maquillaje en España: calidad profesional, buenas y
              baratas. Simplificamos tu elección para que disfrutes de un
              maquillaje excepcional sin complicaciones ni gastos excesivos.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Los mejores Sets de Brochas calidad profesional
            </h2>
            <p>
              Logra un maquillaje natural y profesional con brochas
              seleccionadas por especialistas. Desde resaltar tus pestañas hasta
              perfeccionar la aplicación de bases, hemos evaluado y elegido
              cuidadosamente cada brocha para asegurarnos de que encuentres la
              mejor para ti.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Desde las más básicas hasta las más profesionales
            </h2>
            <p>
              Descubre opciones que se adaptan a todas las necesidades: ya sea
              que busques brochas buenas, sets completos, opciones asequibles o
              las mejores marcas, nuestra selección tiene lo que necesitas para
              realzar tu belleza natural.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OldMain;
