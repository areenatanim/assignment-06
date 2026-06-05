import { use } from "react";
import PriceCard from "./PriceCard";

const PriceContainer = ({ priceData }) => {
    const prices = use(priceData);
    console.log(prices);

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold my-3.5">Simple, Transparent Pricing</h2>
                <p className="text-xs text-[#627382] my-5 w-2xl text-center">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
            <div className="grid grid-cols-3 max-w-11/12 mx-auto my-8">
                {
                    prices.map((price, index) => <PriceCard key={index}
                        price={price}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceContainer;