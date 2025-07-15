import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const productList = [
    {
      name: "BMW X4 M SERIES",
      cars: [
        { type: "X4 M Competition", price: "-" },
      ],
    },
    {
      name: "BMW XM SERIES",
      cars: [
        { type: "XM 50e", price: "3.726.000.000" },
        { type: "XM 609", price: "6.472.000.000" },
        { type: "XM Label Red", price: "7.966.000.000" },
      ],
    },
    {
      name: "BMW 2 SERIES",
      cars: [
        { type: "218i Gran Coupe Sport", price: "935.000.000" },
        { type: "220i Coupé M Sport", price: "1.423.000.000" },
      ],
    },
    {
      name: "BMW 3 SERIES",
      cars: [
        { type: "320i Sport", price: "1.020.000.000" },
        { type: "330i M Sport", price: "1.225.000.000" },
        { type: "330e M Sport", price: "1.250.000.000" },
      ],
    },
    {
      name: "BMW 4 SERIES",
      cars: [
        { type: "430i Coupé M Sport Pro", price: "2.674.000.000" },
        { type: "430i Convertible M Sport", price: "2.150.000.000" },
      ],
    },
    {
      name: "BMW 5 SERIES",
      cars: [
        { type: "520i M Sport", price: "1.425.000.000" },
        { type: "530i Opulence", price: "1.735.000.000" },
      ],
    },
    {
      name: "BMW 7 SERIES",
      cars: [
        { type: "735i M Sport", price: "2.207.000.000" },
        { type: "740i M Sport", price: "2.950.000.000" },
      ],
    },
    {
      name: "BMW 8 SERIES",
      cars: [
        { type: "840i Gran Coupé M Sport", price: "2.999.000.000" },
      ],
    },
    {
      name: "BMW X SERIES",
      cars: [
        { type: "X1 sDrive18i xLine", price: "977.000.000" },
        { type: "X3 sDrive20i", price: "1.210.000.000" },
        { type: "X5 xDrive40i xLine", price: "2.230.000.000" },
      ],
    },
    {
      name: "BMW Z SERIES",
      cars: [
        { type: "Z4 sDrive30i M Sport", price: "1.765.000.000" },
      ],
    },
  ];
  
export default function Product() {
    useEffect(() => {
        AOS.init({
            duration: 600,   // durasi animasi
            easing: "ease-out-cubic",
            once: true,      // hanya sekali animasi
        });
        }, []);

   return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        BMW Pricelist
      </h1>

      <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
        {productList.map((series, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // delay bertahap antar card
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-center px-6 py-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase">
                {series.name}
              </h2>
            </div>

            {/* Table */}
            <div className="p-6">
              <div className="grid grid-cols-2 border border-gray-500/30 text-gray-700 font-medium text-sm md:text-base">
                <div className="border-r border-gray-500/30 p-3 font-semibold">TYPE</div>
                <div className="p-3 font-semibold">ON THE ROAD</div>
              </div>

              {series.cars.map((car, carIndex) => (
                <div
                  key={carIndex}
                  className="grid grid-cols-2 border-b border-x border-gray-500/30 text-gray-800 text-sm md:text-base"
                >
                  <div className="border-r border-gray-500/30 p-3">{car.type}</div>
                  <div className="p-3">{car.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
