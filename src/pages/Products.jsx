import ProductCard from "../components/ProductCard";
import SofaImg from "../assets/comfy-sofa.jpg";
import Navbar from "../components/Navbar";


export default function Products(){

  return(
    <div>
      <div className="navbar-products">
        <Navbar />
      </div>
      <h2>Products page</h2>
      <div  className="product-cards-container">
        <ProductCard id = "1" img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard id = "2" img={SofaImg} name="not so comfy sofa" price="500" />
        <ProductCard id = "3" img={SofaImg} name="comfy sofa" price="500" />
        <ProductCard id = "4" img={SofaImg} name="comfy sofa" price="500" />
        <ProductCard id = "5" img={SofaImg} name="comfy sofa" price="500" />
        <ProductCard id = "6" img={SofaImg} name="comfy sofa" price="500" />
        <ProductCard id = "7" img={SofaImg} name="comfy sofa" price="500" />
        <ProductCard id = "8" img={SofaImg} name="comfy sofa" price="500" />
      </div>
    </div>
  )
}
