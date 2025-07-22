"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-600 hover:underline"
      >
        Mi sitio turístico
      </Link>
      <div className="space-x-6 text-gray-800 font-medium flex items-center">
        <Link href="/testimonio" className="hover:text-blue-500">
          Testimonios
        </Link>
        <Link href="/atracciones" className="hover:text-blue-500">
          Atracciones
        </Link>
        <Link href="/contacto" className="hover:text-blue-500">
          Contacto
        </Link>
        <Link href="/reporteComentarios" className="hover:text-blue-500">
          Reportes
        </Link>
        <Link href="/login" className="hover:text-blue-500">
          Salir
        </Link>
      </div>
    </nav>
  );
}
