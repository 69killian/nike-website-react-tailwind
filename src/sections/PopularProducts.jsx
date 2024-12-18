import React from "react"
import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-montserrat font-bold">Our <span className="text-[#266131]">Popular</span> Products</h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a word of comfort, design, and value</p>
        </div>
        <div className="mt-16 extra-small:ml-[0px] sm:ml-[-40px] lg:ml-[-40px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product, index) => (
                    <PopularProductCard key={product.name} {...product}/>
                ))}
        </div>
    </section>

  )
}

export default PopularProducts