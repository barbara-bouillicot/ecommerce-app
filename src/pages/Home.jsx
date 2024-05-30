import './Home.css';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from '../components/ProductCard';
import imgFurniture from "../assets/furniture-img.jpg"
import imgFurniture2 from "../assets/furniture-img-2.jpg"
import imgFurniture3 from "../assets/furniture-img-3.jpg"
import imgFurniture4 from "../assets/furniture-img-4.jpg"
import FreeDelivery from "../assets/trust-badge-delivery.png"
import SafeBadge from "../assets/trust-badge-safe.png"
import GuaranteeBadge from "../assets/trust-badge-guarantee.png"
import InstallationBadge from "../assets/trust-badge-installation.png"
import TrustBadge from "../components/TrustBadge"
import { Link } from "react-router-dom";
import { products } from "../pages/Products";


export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <main>
        <section class="badges-container">
          <TrustBadge title="Free delivery" img={FreeDelivery}/>
          <TrustBadge title="Safe and reliable" img={SafeBadge}/>
          <TrustBadge title="Free installation" img={InstallationBadge}/>
          <TrustBadge title="Guaranteed" img={GuaranteeBadge}/>
        </section>
        <section className='best-sellers-section'>
          <h2>Best Sellers</h2>
          <div className="best-sellers-container">
            {bestSellers.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </section>
        <section>
          <div className='about-us-section'>
            <img src={imgFurniture} alt="" />
            <div className='about-us-center'>
              <h2>Why Choosing Us?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <Link to="/about">
                <button>Read More → </button>
              </Link>
            </div>
            <div className='about-us-rigth'>
              <div className='img-top'>
                <img src={imgFurniture2} alt="" />
                <img src={imgFurniture3} alt="" />
              </div>
              <div className='img-bottom'>
                <img src={imgFurniture4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
