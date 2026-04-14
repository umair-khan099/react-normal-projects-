import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import useSingleResturants from "../utils/useSingleResturants";
import useScrollSpy from "../utils/useScrollSpy";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const SingleRestaurant = () => {
  const { resId } = useParams();

  const { collections, loading } = useSingleResturants(resId);

  const { sectionRefs, activeSection, scrollToSection } =
    useScrollSpy(collections);

  const dispatch = useDispatch();
  
  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  if (loading) return <h1 className="text-[#606e03] p-6">Loading...</h1>;

  return (
    <div className="bg-white min-h-screen px-6 py-6">
      <div className="flex gap-8">
        {/* 📍 SIDEBAR */}
        <div className="w-[240px] border-r pr-4 sticky top-4 h-fit">
          {collections.map((c) => (
            <p
              key={c.collection_id}
              onClick={() => scrollToSection(c.collection_id)}
              className={`py-2 px-3 text-sm cursor-pointer border-l-4 transition
                ${
                  activeSection === c.collection_id
                    ? "border-[#606e03] bg-[#f5f7e8] text-[#606e03] font-semibold"
                    : "border-transparent text-[#606e03] hover:bg-[#f5f7e8]"
                }`}
            >
              {c.collection_name} ({c.products.length})
            </p>
          ))}
        </div>

        {/* 🍕 PRODUCTS */}
        <div className="flex-1 space-y-12">
          {collections.map((collection) => (
            <div
              key={collection.collection_id}
              ref={(el) => (sectionRefs.current[collection.collection_id] = el)}
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-[#606e03] mb-4">
                {collection.collection_name} ({collection.products.length})
              </h2>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-6">
                {collection.products.map((product) => (
                  <div
                    key={product.product_id}
                    className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                  >
                    {/* Image */}
                    <img
                      src={product.product_imageUrl}
                      alt=""
                      className="w-full h-[160px] object-cover"
                    />

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <h4 className="text-[#606e03] font-semibold text-sm">
                        {product.product_name}
                      </h4>

                      <p className="text-xs text-gray-500 line-clamp-2">
                        {product.small_description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star size={14} className="text-yellow-500" />
                        {product.rating}
                      </div>

                      {/* Price + Button */}
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-[#606e03]">
                          ₹{product.price}
                        </span>

                        <button
                          onClick={() => handleAddItem(product)}
                          className="flex items-center gap-1 border border-[#606e03] text-[#606e03] px-2 py-1 rounded-md text-sm hover:bg-[#606e03] hover:text-white transition"
                        >
                          <Plus size={14} />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
