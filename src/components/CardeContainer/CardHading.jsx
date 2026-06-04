
const CardHading = ({ active, setActive, cartsCount }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold my-3.5">Premium Digital Tools</h1>
                <p className="text-xs text-[#627382] my-5 w-2xl text-center">
                    Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.
                </p>
                <div className="flex gap-4 ">
                    <button
                        onClick={() => { setActive("product") }}
                        className={`btn rounded-4xl border-0  btn-outline  ${active === "product" ? " text-white bg-linear-to-r from-[#652EF7] to-[#9216FA]" : "bg-[#dcbff4] text-emerald-50"}  `}> Products</button>

                    <button
                        onClick={() => { setActive("cart") }}
                        className={`btn btn-outline rounded-4xl  ${active === "cart" ? " text-white bg-linear-to-r from-[#652EF7] to-[#9216FA]" : "border-[#662EF7] text-[#662EF7]"}`}>
                        Cart({cartsCount.length})</button>
                </div>
            </div>
        </div>
    );
};

export default CardHading;