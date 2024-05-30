import React, { useState } from 'react';
import ProductCard from "../components/ProductCard";
import SofaImg from "../assets/comfy-sofa.jpg";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filter from '../components/Filter';

export const products = [
  { id: "1", img: SofaImg, name: "comfy sofa", price: "500" },
  { id: "2", img: SofaImg, name: "not so comfy sofa", price: "200" },
  { id: "3", img: SofaImg, name: "Chair", price: "300" },
  { id: "4", img: SofaImg, name: "table", price: "400" },
  { id: "5", img: SofaImg, name: "comfy sofa", price: "600" },
  { id: "6", img: SofaImg, name: "comfy sofa", price: "700" },
  { id: "7", img: SofaImg, name: "comfy sofa", price: "500" },
  { id: "8", img: SofaImg, name: "comfy sofa", price: "500" },
];

export default function Products() {
  const [query, setQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.name.toLowerCase()))
  );

  return (
    <div>
      <div className="navbar-products">
        <Navbar />
      </div>
      <h2>Products page</h2>
      <Search setQuery={setQuery} />
      <Filter onFilterChange={handleFilterChange} />
      <div className="product-cards-container">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
