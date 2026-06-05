import { TiTick } from "react-icons/ti";
const PriceCard = ({ price }) => {
    console.log(price);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                    <div className="flex space-y-3 flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">{price.offer_name}</h2>
                            <p className="text-xs text-[#627382]">{price.description}</p>
                        </div>
                        <span className="text-xl flex  items-center">${price.price}/ <p className="text-xs text-[#627382]">{price.billing}</p></span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            // information.features.map((feature, index) => <li key={index} className="flex gap-1 items-center text-xs text-[#627382]"> <TiTick className="text-[#652EF7]" /> {feature}</li>)
                            price.features.map((feature, index) => <li key={index} className="flex gap-1 items-center text-xs text-[#627382]"> <TiTick className="text-[#652EF7]" /> {feature}</li>)

                        }
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block hover:-translate-3  rounded-4xl bg-linear-to-r from-[#652EF7] to-[#9216FA] text-white border-0">{price.button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;