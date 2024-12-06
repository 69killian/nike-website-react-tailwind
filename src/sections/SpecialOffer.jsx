import React from "react"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="about-us" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} alt="" width={773} height={687} className="object-contain w-full"/>
        </div> 
        <div className="flex flex-1 flex-col">
        <h2 className="font-montserrat text-4xl capitalize font-bold lg:max-w-lg"><span className="text-[#266131]">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with uunbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us appart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
            Navigate a realm of possibilities designed to fulfil your unique desires, surpassing the loftiest expectations. Your journey with us is nothing sort of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now"/>
        <Button label="Learn more" backgroundColor={"bg-white"} borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
        </div>
    </section>
  )
}

export default SpecialOffer