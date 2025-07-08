import React from "react";
import bmwImage from "../assets/i8.jpg"; // Ganti dengan path gambar kamu

export default function Car() {
  return (
    <section className="flex flex-col py-5 lg:flex-row items-center min-h-[50vh] md:min-h-[90vh]">

      {/* Kanan: Gambar */}
      <div className="w-full lg:w-1/2 px-5">
      <img
        src={bmwImage}
        alt="BMW i8 Cheers"
        className="w-full object-cover rounded-2xl shadow-lg"
      />
      </div>

      {/* Kiri: Teks */}
      <div className="w-full lg:w-1/2 px-8 lg:px-20 py-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet the BMW i8 Hybrid
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          The BMW i8 Hybrid is a perfect blend of performance and sustainability.
          With its futuristic design, advanced plug-in hybrid system, and
          eco-conscious engineering, the i8 redefines what a sports car can be.
          Experience thrilling acceleration, precision handling, and pure driving
          joy—while leaving a smaller footprint.
        </p>
      </div>

    </section>
  );
}
