import SlidingCard from "./SlidingCard";

import cartoon1 from "../assets/Cartttttttoon 1.png";
import cartoon2 from "../assets/Cartttttttoon 2.png";
import cartoon3 from "../assets/Cartttttttoon 3.png";
import cartoon4 from "../assets/Cartttttttoon 4.png";
import cartoon5 from "../assets/Cartttttttoon 5.png";

import bus1 from "../assets/bus1.png";
import bus2 from "../assets/bus2.png";
import bus3 from "../assets/bus3.png";
import bus4 from "../assets/bus4.png";
import bus5 from "../assets/bus5.png";

import finder1 from "../assets/finder_2 (1).png";
import finder2 from "../assets/finder_2 (2).png";

const Projects = () => {
    const cardData = [
        {
            title: "Cartttttttoon",
            description:
                "A simple cartoon viewing website that contains 100+ different cartoon videos, it has been done using ReactJS.",
            url: "https://cartttttttoon.netlify.app",
            screenshots: [cartoon1, cartoon2, cartoon3, cartoon4, cartoon5],
        },
        {
            title: "BusGari",
            description:
                "A simple bus searching platform that will show the buses available based on the place and time provided, it has been done using ReactJS.",
            url: "https://busgari.netlify.app",
            screenshots: [bus1, bus2, bus3, bus4, bus5],
        },
        {
            title: "Bus Finder",
            description:
                "A simple model that provides buses from a specific location to a specific location based on time. It has been done by using HTML, CSS, and JavaScript.",
            url: "https://bustimeashari.netlify.app",
            screenshots: [finder1, finder2],
        },
    ];

    return (
        <div className="relative flex flex-col rounded-t-xl rounded-b-xl border-b-4 border-red-600 items-center justify-center gap-4 p-4 overflow-hidden shadow-2xl m-2">
            {/* Blurry Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-600 blur-3xl opacity-70 animate-pulse"></div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full gap-3 bg-white/10 backdrop-blur-md p-5 rounded-lg">
                <p className="text-center w-full mt-3 text-white text-xl font-bold">
                    Projects
                </p>
                <div className="flex flex-col items-center justify-center w-full gap-1">
                    <hr className="w-full md:w-1/2 border-white" />
                    <hr className="w-full md:w-1/2 border-white" />
                </div>
            </div>

            {/* Sliding Cards Section */}
            <div className="relative flex items-center justify-center z-10 w-full">
                <SlidingCard data={cardData} />
            </div>
        </div>
    );
};

export default Projects;
