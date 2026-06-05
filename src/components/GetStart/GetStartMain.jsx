import { use } from "react";
import GetStart from "./GetStart";

const GetStartMain = ({ gateStartData }) => {
    const data = use(gateStartData);
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold my-3.5">Get Started in 3 Steps</h2>
                <p className="text-xs text-[#627382] my-5 w-2xl text-center">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
            <div className="grid grid-cols-3 max-w-11/12 mx-auto">
                {
                    data.map((start, index) => <GetStart key={index} start={start}></GetStart>)
                }
            </div>
        </div>
    );
};

export default GetStartMain;