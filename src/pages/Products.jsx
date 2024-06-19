import React, { useState } from 'react';
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filter from '../components/Filter';
import products from '../data'


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
    (selectedCategories.length === 0 || selectedCategories.some(category => product.name.toLowerCase().includes(category)))
  );

  return (
    <div>
      <div className="navbar-products">
        <Navbar />
      </div>
      <div className='search-container'>
        <Search setQuery={setQuery} />
        <Filter onFilterChange={handleFilterChange} selectedCategories={selectedCategories} />
      </div>
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
