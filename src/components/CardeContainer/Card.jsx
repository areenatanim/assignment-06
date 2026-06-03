import { TiTick } from "react-icons/ti";
const Card = ({ information }) => {
    console.log(information.features);
    // const { name, description, price, period, features } = information;

    return (
        <div className="my-8">
            <div className="card hover:-translate-2 w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-3xl font-bold">{information.name}</h2>
                        <p>{information.description}</p>
                        <span className="text-xl">{information.price}/{information.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            information.features.map((feature, index) => <li key={index} className="flex gap-1 items-center"> <TiTick className="text-[#652EF7]" /> {feature}</li>)
                        }
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;