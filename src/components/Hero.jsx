import { FaEye } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdContactEmergency } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";
import sign from "../assets/signature.png";

const Hero = () => {
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [signLoaded, setSignLoaded] = useState(false);

    // Motion Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const avatarVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    return (
        <motion.div
            className="relative flex min-h-[25rem] flex-col md:flex-row items-center justify-around p-5 gap-5 rounded-xl shadow-2xl overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Blurry Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-600 blur-3xl opacity-70 animate-pulse"></div>

            {/* Mobile Avatar Section */}
            <motion.div
                className="block md:hidden relative z-10 bg-white/20 p-4 rounded-full hover:scale-110 transition-transform duration-500"
                variants={avatarVariants}
            >
                <div className="w-[17rem] h-[17rem] rounded-full overflow-hidden border border-white">
                    {!avatarLoaded && (
                        <div className="absolute inset-0 bg-gray-300 blur-md animate-pulse"></div>
                    )}
                    <img
                        src={avatar}
                        alt="Avatar"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${avatarLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        onLoad={() => setAvatarLoaded(true)}
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="relative z-10 flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg min-h-[17rem] w-[20rem] md:w-auto"
                variants={itemVariants}
            >
                <div className="flex items-start justify-between">
                    <motion.p
                        className="uppercase font-bold text-2xl text-white"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                        variants={itemVariants}
                    >
                        Suman Sasmal
                    </motion.p>
                    <MdContactEmergency className="text-white text-2xl" />
                </div>
                <motion.p
                    className="font-semibold text-white text-lg mt-2"
                    variants={itemVariants}
                >
                    ReactJS Web Developer
                </motion.p>
                <motion.p
                    className="font-medium text-white text-sm mt-3"
                    variants={itemVariants}
                >
                    Crafting Seamless Web Experiences with Code & Creativity
                </motion.p>
                <motion.div
                    className="flex items-center gap-5 justify-around mt-8"
                    variants={itemVariants}
                >
                    <Link
                        to="/resume"
                        className="flex items-center justify-center gap-3 w-[10rem] border-2 border-white shadow-md bg-indigo-700 h-[2.5rem] rounded-lg hover:bg-indigo-900 transition-all duration-300"
                    >
                        <FaEye className="text-white" />
                        <p className="text-sm text-white font-bold">View Resume</p>
                    </Link>
                    <Link
                        to="/contact"
                        className="flex items-center justify-center gap-3 w-[10rem] border-2 border-white shadow-md bg-pink-600 h-[2.5rem] rounded-lg hover:bg-pink-800 transition-all duration-300"
                    >
                        <RiContactsBook3Fill className="text-white" />
                        <p className="text-sm text-white font-bold">Contact Me</p>
                    </Link>
                </motion.div>
                <div className="flex w-full items-center justify-end mt-8">
                    <motion.div
                        className="w-[5rem] bg-white/10 p-3 rounded-lg shadow-md"
                        variants={itemVariants}
                    >
                        <div className="relative w-full h-full">
                            {!signLoaded && (
                                <div className="absolute inset-0 bg-gray-300 blur-md animate-pulse"></div>
                            )}
                            <img
                                src={sign}
                                alt="Signature"
                                className={`w-full h-full object-contain transition-opacity duration-500 ${signLoaded ? "opacity-100" : "opacity-0"
                                    }`}
                                onLoad={() => setSignLoaded(true)}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Desktop Avatar Section */}
            <motion.div
                className="hidden md:block relative z-10 bg-white/20 p-4 rounded-full hover:scale-110 transition-transform duration-500"
                variants={avatarVariants}
            >
                <div className="w-[17rem] h-[17rem] rounded-full overflow-hidden border border-white">
                    {!avatarLoaded && (
                        <div className="absolute inset-0 bg-gray-300 blur-md animate-pulse"></div>
                    )}
                    <img
                        src={avatar}
                        alt="Avatar"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${avatarLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        onLoad={() => setAvatarLoaded(true)}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
