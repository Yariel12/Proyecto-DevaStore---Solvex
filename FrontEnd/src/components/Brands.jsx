import React from "react";

function Brands() {
  const brandLogos = [
    "https://brandlogos.net/wp-content/uploads/2014/08/samsung-logo-preview.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqj1mxXLQB8CoHc7B9h6YUOqffC4v3qf4wtA&s",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png",
    "https://yt3.googleusercontent.com/s5hlNKKDDQWjFGzYNnh8UeOW2j2w6id-cZGx7GdAA3d5Fu7zEi7ZMXEyslysuQUKigXNxtAB=s900-c-k-c0x00ffffff-no-rj",
  ];

  return (
    <section className="py-12 ">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="mb-12 text-3xl font-extrabold leading-tight text-gray-800 md:text-4xl">
          Marcas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 gap-6 pb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5w">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white   flex items-center justify-center p-4 aspect-[3/2] "
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="object-contain w-full h-full max-h-25"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
