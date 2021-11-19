import React from "react";

const BestSeller = () => {
  return (
    <section className="px-3  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 mt-10 mySwiper">
      <div className="flex flex-row justify-between items-center ">
        <div>
          <h2 className="heading-3">
            <span className="text-green-pantone">Best</span>{" "}
            <span className="text-kombu-green">Sellers</span>
          </h2>
        </div>
        <div className="flex justify-between items-center gap-8"></div>
      </div>
    </section>
  );
};

export default BestSeller;
