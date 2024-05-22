import Header from "./Header"
import Navbar from "./Navbar"
import FreeDelivery from "../assets/free-delivery.png"
import TrustBadge from "./TrustBadge"


export default function Home() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <main>
        <section class="badges-container">
          <TrustBadge title="Free delivery" img={FreeDelivery}/>
          <TrustBadge title="Safe and reliable" img={FreeDelivery}/>
          <TrustBadge title="Free installation" img={FreeDelivery}/>
          <TrustBadge title="Free guaranteed" img={FreeDelivery}/>
        </section>
      </main>
    </div>
  );
}
