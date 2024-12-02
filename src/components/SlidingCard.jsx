import { useState } from "react";
import PropTypes from "prop-types";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const SlidingCard = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
    };

    const toggleExpand = (index) => {
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };

    return (
        <div className="relative w-full max-w-lg overflow-hidden">
            {/* Blurry Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 blur-3xl opacity-60 animate-pulse"></div>

            {/* Sliding Container */}
            <div className="relative z-10 flex items-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="absolute left-0 z-20 bg-blue-500 text-white font-extrabold p-3 rounded-full shadow-md hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {"<"}
                </button>

                {/* Cards */}
                <div
                    className="flex w-full max-w-[20.5rem] md:max-w-lg transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${data.length * 100}%`,
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 px-4"
                            style={{ width: "100%" }}
                        >
                            <div className="bg-white/10 backdrop-blur-md border border-gray-300 shadow-lg rounded-lg p-4">
                                {/* Card Content */}
                                <h3 className="text-lg font-bold text-gray-100 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-bold text-gray-50 mt-2">
                                    {item.description}
                                </p>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black text-sm bg-orange-100 w-[6rem] text-center p-2 rounded-lg mt-3 block hover:bg-orange-50 font-bold"
                                >
                                    Visit Link
                                </a>

                                {/* Expand/Collapse Button */}
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="mt-4 px-4 py-2 text-sm bg-violet-600 text-white rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
                                >
                                    {expandedCardIndex === index ? (
                                        <>
                                            Collapse <BiSolidUpArrow />
                                        </>
                                    ) : (
                                        <>
                                            Expand <BiSolidDownArrow />
                                        </>
                                    )}
                                </button>

                                {/* Expandable Section */}
                                {expandedCardIndex === index && (
                                    <div className="mt-4">
                                        <h4 className="text-md font-semibold text-gray-100 mb-2">
                                            Screenshots
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {item.screenshots.map((screenshot, idx) => (
                                                <img
                                                    key={idx}
                                                    src={screenshot}
                                                    alt={`Screenshot ${idx + 1}`}
                                                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= data.length - 1}
                    className="absolute right-0 z-20 bg-blue-500 p-3 rounded-full text-white font-extrabold shadow-md hover:bg-violet-700 transition disabled:opacity-50"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

SlidingCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default SlidingCard;
