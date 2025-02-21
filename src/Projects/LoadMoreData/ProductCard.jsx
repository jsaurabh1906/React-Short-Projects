import React from "react";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import Tags from "./Tags";

const ProductCard = ({ product }) => {
  return (
    <div className="card w-80 h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
      <div className="card-content p-4 relative z-10">
        {/* title and status */}
        <div className="flex items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-white/90 mb-2">
              {product.title}
            </h2>
            <div>
              <span
                className={`text-xs font-medium px-4 py-1 rounded-full mt-1 inline-block ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-500/20 text-green-300/90"
                    : "bg-red-500/20 text-red-300/90"
                }`}
              >
                {product.availabilityStatus}
              </span>
              <span className="text-xs font-semibold text-white/80 mb-2 ml-2 bg-blue-500 px-4 py-1 rounded-full">
                ₹ {product.price}
              </span>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex justify-center items-center rounded-lg overflow-hidden mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-48 object-cover"
          />
        </div>

        {/* desc and tags*/}
        <div className="mb-4">
          <p className="text-xs font-semibold text-white/80 mb-2">
            {product.description}
          </p>

          <div className="flex flex-wrap -mx-1">
            {product.tags.map((tag) => (
              <Tags tag={tag} key={tag} />
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-between items-center space-x-2">
          <button className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 gap-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border border-white/20">
            <IoMdHeart size={15} className="hover:text-red-500" /> Wishlist
          </button>
          <button className="flex-1 bg-blue-500 text-white rounded-lg px-3 py-2 gap-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-blue-600 flex items-center justify-center">
            <MdOutlineShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
