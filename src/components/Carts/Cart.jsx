const Cart = ({ cartsCount, setCartsCount, cart, setCart }) => {
    const handelDelateCart = (cartData) => {
        const filterCart = cartsCount.filter(finalCart => finalCart.name !== cartData.name);
        setCartsCount(filterCart);
        setCart(cart - 1);


    }
    return (
        <div>
            {
                cartsCount.map((cartData, index) => {
                    return (
                        <div key={index}
                            className=" border-2 border-[#652EF7] rounded-2xl max-w-11/12 mx-auto my-3" >

                            <div className=" flex justify-between items-center p-2">
                                <div className="flex gap-4">
                                    <img src={cartData.icon}
                                        className="w-8"
                                    />
                                    <div>
                                        <h2 className="font-bold flex gap-2 items-center">{cartData.name}</h2>
                                        <p>{cartData.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => { handelDelateCart(cartData) }}
                                        className="btn btn-warning">
                                        Delate
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;