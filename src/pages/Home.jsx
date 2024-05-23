import './Home.css';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import FreeDelivery from "../assets/trust-badge-delivery.png"
import SafeBadge from "../assets/trust-badge-safe.png"
import GuaranteeBadge from "../assets/trust-badge-guarantee.png"
import InstallationBadge from "../assets/trust-badge-installation.png"
import TrustBadge from "../components/TrustBadge"
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <main>
        <section className="about-us-section">
          <h2>Why Choosing Us?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <Link to="/about">
            <button>Read More → </button>
          </Link>
        </section>
        <section class="badges-container">
          <TrustBadge title="Free delivery" img={FreeDelivery}/>
          <TrustBadge title="Safe and reliable" img={SafeBadge}/>
          <TrustBadge title="Free installation" img={InstallationBadge}/>
          <TrustBadge title="Guaranteed" img={GuaranteeBadge}/>
        </section>
      </main>
    </div>
  );
}
