import { use } from "react";
import Card from "./Card";

const CardContainer = ({ cardData }) => {
    const cardInfo = use(cardData);

    return (
        <div className="my-8 max-w-11/12 mx-auto">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold my-3.5">Premium Digital Tools</h1>
                <p className="text-xs text-[#627382] my-5 w-2xl text-center">
                    Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.
                </p>
                <div className="flex gap-4 ">
                    <button className="btn btn-primary rounded-4xl text-white bg-linear-to-r from-[#652EF7] to-[#9216FA] border-0"> Products</button>

                    <button className="btn btn-outline rounded-4xl border-[#662EF7] text-[#662EF7]">
                        Cart (2)</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cardInfo.map((information, index) => <Card key={index} information={information}></Card>)
                }
            </div>

        </div>
    );
};

export default CardContainer;