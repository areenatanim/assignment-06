const GetStart = ({ start }) => {

    return (
        <div className="my-9 space-y-5 max-w-11/12 mx-auto">


            <div className="card p-4 bg-base-100 card-xs shadow-sm">
                <div className="card-body ">
                    <div className=" flex justify-end">
                        <button className="btn btn-circle bg-linear-to-r from-[#652EF7] to-[#9216FA] text-white ">
                            {start.id}
                        </button>
                    </div>

                    <div className=" space-y-2.5 flex flex-col justify-center items-center">
                        <img src={start.img} className="w-17" alt="" />
                        <h2 className="card-title">{start.name}</h2>
                        <p className="text-[#627382] text-center">
                            {start.description}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default GetStart;