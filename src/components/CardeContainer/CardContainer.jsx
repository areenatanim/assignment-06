import { use, useState } from "react";
import Card from "./Card";
import CardHading from "./CardHading";
import Cart from "../Carts/Cart";

const CardContainer = ({ cardData }) => {
    const cardInfo = use(cardData);

    const [active, setActive] = useState("product");
    return (
        <div className="my-8 max-w-11/12 mx-auto">
            <CardHading active={active} setActive={setActive} />

            {active === "product" ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        cardInfo.map((information, index) => <Card key={index} information={information}></Card>)
                    }
                </div> : <Cart></Cart>}


        </div>
    );
};

export default CardContainer;