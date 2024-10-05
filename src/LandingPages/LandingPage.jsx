import React from "react";

const LandingPage = () => {
  return (
    <div className="container min-h-screen bg-[url('/images/Image.png')] bg-center bg-cover px-28 py-5 relative">
      <nav className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-40 cursor-pointer"
        />
        <ul className="flex-1 text-center">
          <li className="list-none inline-block px-5">
            <a href="#" className="no-underline text-white px-2">
              Home
            </a>
          </li>
          <li className="list-none inline-block px-5">
            <a href="#" className="no-underline text-white px-2">
              About
            </a>
          </li>
          <li className="list-none inline-block px-5">
            <a href="#" className="no-underline text-white px-2">
              Features
            </a>
          </li>
          <li className="list-none inline-block px-5">
            <a href="#" className="no-underline text-white px-2">
              Contact
            </a>
          </li>
        </ul>
        <img src="/images/cart.png" alt="Cart" className="w-8 cursor-pointer" />
      </nav>

      {/* Left side text */}
      <div className="text-white mt-48 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal">
          Groceries <br /> delivery in{" "}
          <span className="font-light">15 mins</span>
        </h1>
        <p>
          Grocify offers a wide range of products, including fresh products,
          meats, dairy, baked goods, and non-perishable items.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="bg-yellow-400 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-400 hover:text-white duration-300 hover:border border border-transparent"
          >
            Order Now
          </a>
          <a href="#" className="text-yellow-400 hover:underline">
            Download Now{" "}
            <span className="text-lg inline-block rotate-90">&#10148;</span>
          </a>
        </div>
      </div>

      {/* Right side image */}
      <img
        src="/images/grocery-image.png"
        className="w-full xl:w-1/2 xl:absolute bottom-0 right-20"
        alt="Grocery Delivery"
      />
    </div>
  );
};

export default LandingPage;
