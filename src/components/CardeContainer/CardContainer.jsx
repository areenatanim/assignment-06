import { use, useState } from "react";
import Card from "./Card";
import CardHading from "./CardHading";
import Cart from "../Carts/Cart";

const CardContainer = ({ cardData, setCart, cart }) => {
    const cardInfo = use(cardData);

    const [active, setActive] = useState("product");
    const [cartsCount, setCartsCount] = useState([]);
    return (
        <div className="my-8 max-w-11/12 mx-auto">
            <CardHading
                active={active}
                setActive={setActive}
                cartsCount={cartsCount}
            />

            {active === "product" ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        cardInfo.map((information, index) =>
                            <Card
                                key={index}
                                information={information}
                                // bought={bought}
                                // setBought={setBought}
                                setCartsCount={setCartsCount}
                                cartsCount={cartsCount}
                                setCart={setCart}
                                cart={cart}
                            ></Card>)
                    }
                </div> :
                <Cart
                    cart={cart}
                    setCart={setCart}
                    cartsCount={cartsCount}
                    setCartsCount={setCartsCount}
                ></Cart>}


        </div>
    );
};

export default CardContainer;