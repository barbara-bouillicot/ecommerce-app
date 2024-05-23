import ProductCard from "../components/ProductCard"
import SofaImg from "../assets/comfy-sofa.jpg"

export default function Products(){
  return(
    <div>
      <h2>Products page</h2>
      <div  className="product-cards-container">
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
        <ProductCard img={SofaImg} name="comfy sofa" price="500"/>
      </div>
    </div>
  )
}
