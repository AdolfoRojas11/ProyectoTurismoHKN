"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/imagenes/imagen_fondo.png')" }}
    >
      {/* Capa con degradado suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen px-4">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-md">
          Bienvenido a CR Turismo
        </h1>
        <p className="text-xl mb-8 drop-shadow-md max-w-xl">
          Explorá las maravillas de Costa Rica. Desde playas hasta volcanes,
          tenemos el destino perfecto para vos.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/testimonio"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition"
          >
            Ver testimonios
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition"
          >
            Contacto
          </Link>
        </div>
      </div>

      <section className="bg-white text-center py-12 px-4 relative z-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          ¿Listo para tu próxima aventura?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Reservá con nosotros y viví una experiencia inolvidable en Costa Rica.
          Descubrí playas, montañas, volcanes y la calidez de su gente.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Contáctanos
        </Link>
      </section>
    </main>
  );
}
