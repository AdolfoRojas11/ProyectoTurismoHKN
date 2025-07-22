"use client";
import React, { useState } from "react";

const ContactoPage: React.FC = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formulario);
    alert("¡Gracias por contactarnos!");
    setFormulario({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contactanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="text"
            name="asunto"
            value={formulario.asunto}
            onChange={handleChange}
            placeholder="Asunto"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            placeholder="Tu mensaje..."
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactoPage;
