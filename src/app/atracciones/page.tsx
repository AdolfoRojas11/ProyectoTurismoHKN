"use client";
import React, { useState, useEffect } from "react";

const imagenes = [
  {
    src: "/atracciones/arenal.jpg",
    titulo: "Volcán Arenal",
    descripcion: "Una maravilla natural con aguas termales y senderos.",
  },
  {
    src: "/atracciones/manuel-antonio.jpg",
    titulo: "Manuel Antonio",
    descripcion: "Parque nacional con playas paradisíacas y mucha fauna.",
  },
  {
    src: "/atracciones/monteverde.jpg",
    titulo: "Monteverde",
    descripcion: "Bosque nuboso con biodiversidad impresionante.",
  },
];

export default function AtraccionesPage() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  useEffect(() => {
    const intervalo = setInterval(siguiente, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Atracciones Turísticas
      </h1>

      <div className="relative w-full max-w-3xl">
        <img
          src={imagenes[indice].src}
          alt={imagenes[indice].titulo}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-white p-4 rounded-b-lg">
          <h2 className="text-xl font-bold">{imagenes[indice].titulo}</h2>
          <p className="text-sm">{imagenes[indice].descripcion}</p>
        </div>

        <button
          onClick={anterior}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={siguiente}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          ▶
        </button>
      </div>

      <div className="flex mt-4 space-x-2">
        {imagenes.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === indice ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
