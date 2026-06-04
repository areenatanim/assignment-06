import { useState } from "react";
import { TiTick } from "react-icons/ti";
// import { ToastContainer, toast } from 'react-toastify';
const Card = ({ information, setCart, cart, setCartsCount, cartsCount }) => {

    const [selected, setSelected] = useState(false);

    const handelBuyNow = () => {
        setSelected(true);
        // toast("Wow so easy!");

        setCart(cart + 1);
        setCartsCount([...cartsCount, information])

    }


    return (
        <div className="my-8 p-2">
            {/* <ToastContainer /> */}
            <div className="card hover:-translate-3 w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className="badge  badge-xs badge-warning">{information.tagType}</span>
                    </div>
                    <div className="flex flex-col justify-between">
                        <img src={information.icon} className="w-8" alt="" />
                        <h2 className="text-3xl font-bold">{information.name}</h2>
                        <p className="text-xs text-[#627382]">{information.description}</p>
                        <span className="text-xl">{information.price}/{information.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            information.features.map((feature, index) => <li key={index} className="flex gap-1 items-center text-xs text-[#627382]"> <TiTick className="text-[#652EF7]" /> {feature}</li>)
                        }
                    </ul>
                    <div className="mt-6">
                        <button
                            onClick={() => { handelBuyNow() }}
                            disabled={selected ? true : false}
                            className={`${selected ? "btn hover:-translate-3 btn-block rounded-4xl bg-linear-to-r from-[#652EF7] to-[#9216FA] text-white border-0" : "btn btn-outline btn-block rounded-4xl"}`}

                        >{selected === true ? "Added to cart" : "Buy Now"}</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;