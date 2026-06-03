import BannerImg from "../../../image/banner.png"
import GroupImg from "../../../image/Group 5 (1).png"
import PlayImg from "../../../image/Play.png"

const Banner = () => {
    return (
        <div className="my-12 ">
            <div className="hero gap-9 min-h-screen w-11/12 mx-auto">
                <div className="hero-content  flex-col lg:flex-row-reverse items-center">
                    <img
                        src={BannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="">
                        <div className="flex  gap-2 items-center bg-[#E1E7FF] rounded-4xl w-[230px] my-2.5 p-1">
                            <img className="w-16px h-[16px]" src={GroupImg} alt="" />
                            <p className=" text-xs text-[#7624F8]">

                                New: AI-Powered Tools Available
                            </p>
                        </div>
                        <h1 className="text-5xl font-bold w-[500px] mr-41">
                            Supercharge Your Digital Workflow
                        </h1>
                        <p className="py-6 text-xs text-[#627382] w-[500px]">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products

                        </p>
                        <div className="flex gap-4 ">
                            <button className="btn btn-primary rounded-4xl text-white bg-linear-to-r from-[#652EF7] to-[#9216FA] border-0">Explore Products</button>

                            <button className="btn btn-outline rounded-4xl border-[#662EF7] text-[#662EF7]">
                                <img src={PlayImg} alt="" />
                                Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;