import React, { useEffect, useState } from "react";
import { ProCard } from "../components/proCard.jsx";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products/pro");

        if (!response.ok) {
          console.log(" response is not ok ");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProCard key={product._id} product={product} />
      ))}
    </div>

  );
};
