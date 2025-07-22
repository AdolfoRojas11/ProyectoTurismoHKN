import TestimonioComponent from "@/components/TestimoniosConponents";
import React from "react";

const TestimonioPage: React.FC = () => {
  const vectorTestimonios = [
    {
      nombre: "Jose Rojas Jimenez",
      comentario: "Muy bueno el servicio, regresaré",
      imagen: "/imagenes/Testimonio.jpg",
    },
    {
      nombre: "Johan Salas Carvajal",
      comentario: "No me lograron contactar",
      imagen: "/imagenes/Testimonio1.jpg",
    },
    {
      nombre: "Willian Lopez Herrera",
      comentario: "Bastante atractivas las vaciones organizadas",
      imagen: "/imagenes/Testimonio2.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-4">Testimonios</h1>
      {vectorTestimonios.map((persona, index) => (
        <TestimonioComponent
          key={index}
          nombre={persona.nombre}
          comentario={persona.comentario}
          imagen={persona.imagen}
        />
      ))}
    </div>
  );
};

export default TestimonioPage;
