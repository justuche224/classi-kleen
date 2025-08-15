import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <h1 className="text-2xl font-bold">Shop - Classi Kleen</h1>
        </div>
        <div className="py-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="aspect-[3/4] relative flex flex-col" key={index}>
                <div className="relative h-3/4 w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Product 1"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col gap-1 md:gap-2 p-2 md:p-3 h-1/4">
                  <h2 className="text-sm md:text-lg font-bold">Product Name</h2>
                  <p className="text-xs md:text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
