import { AiFillApi } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { PiFileCssLight } from "react-icons/pi";
import { RiNodejsLine } from "react-icons/ri";
import { TbFileTypeJsx } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const About = () => {
    // Framer Motion Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animation between children
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="relative flex rounded-t-xl rounded-b-xl border-b-4 border-red-600 shadow-2xl m-2 min-h-[30rem] gap-5 items-start flex-col p-3 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
        >
            {/* Blurry Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-600 blur-3xl opacity-70 animate-pulse"></div>

            {/* Content Section */}
            <motion.div
                className="relative z-10 w-full flex flex-col gap-2 items-start p-3 bg-white/10 backdrop-blur-md rounded-lg"
                variants={sectionVariants}
            >
                <p className="text-black font-bold">SKILL & PASSION:</p>
                <hr className="w-full" />
                <motion.h6
                    className="text-gray-900 ml-5 mr-5 italic font-mono bg-blue-900/30 rounded-lg p-2"
                    variants={sectionVariants}
                >
                    <Typewriter
                        words={[
                            "I am a passionate ReactJS web developer with a knack for creating intuitive, user-friendly web applications. I specialize in building responsive and visually appealing interfaces using React and TailwindCSS, while leveraging APIs to deliver seamless functionality.",
                            "With a beginner's touch in Next.js and a solid grasp of backend technologies like Node.js and Firebase, I enjoy crafting full-stack solutions that merge design with performance.",
                            "My curiosity drives me to continuously learn and refine my skills, exploring languages like Python and Java to expand my development horizons.",
                            "Above all, I thrive on bringing ideas to life through clean, efficient code and creative problem-solving.",
                        ]}
                        loop={0}
                        typeSpeed={100}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                </motion.h6>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
                className="relative z-10 w-full flex flex-col gap-2 items-start p-3 bg-white/10 backdrop-blur-md rounded-lg"
                variants={sectionVariants}
            >
                <p className="text-black font-bold">TECHNOLOGIES:</p>
                <hr className="w-full" />
                <motion.div
                    className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3"
                    variants={cardContainerVariants}
                >
                    {[
                        {
                            icon: <FaReact className="text-zinc-900 w-full text-xl" />,
                            title: "Using ReactJS",
                            description:
                                "Highly skilled in building dynamic, component-based user interfaces with ReactJS. I excel at creating reusable components, managing state with hooks, and optimizing performance for seamless, interactive web applications.",
                        },
                        {
                            icon: <AiFillApi className="text-zinc-900 w-full text-xl" />,
                            title: "API Handling",
                            description:
                                "Proficient in integrating and managing APIs to fetch, post, and manipulate data seamlessly. I ensure efficient communication between the frontend and backend, leveraging modern techniques like async/await and error handling for a smooth user experience.",
                        },
                        {
                            icon: <PiFileCssLight className="text-zinc-900 w-full text-xl" />,
                            title: "Using TailwindCSS",
                            description:
                                "Skilled in utilizing TailwindCSS to craft responsive, aesthetically pleasing, and highly customizable user interfaces. I excel at creating clean designs with minimal CSS overhead, enhancing both performance and maintainability.",
                        },
                        {
                            icon: <ImDatabase className="text-zinc-900 w-full text-xl" />,
                            title: "Using Firebase",
                            description:
                                "Capable of implementing Firebase for real-time databases, authentication, and hosting. I leverage its powerful tools to quickly deploy full-stack applications with secure, scalable, and reliable infrastructure.",
                        },
                        {
                            icon: <RiNodejsLine className="text-zinc-900 w-full text-xl" />,
                            title: "Using Node.JS",
                            description:
                                "Experienced in building robust backend services with Node.js, enabling efficient data processing and server-side logic. I can create RESTful APIs, handle middleware, and manage scalable server environments.",
                        },
                        {
                            icon: <TbFileTypeJsx className="text-zinc-900 w-full text-xl" />,
                            title: "Using JSX",
                            description:
                                "Experienced in using JSX (JavaScript XML) to seamlessly combine JavaScript and HTML-like syntax within React components. I leverage JSX to write clean, readable, and declarative code that enhances the structure and maintainability of web applications.",
                        },
                    ].map(({ icon, title, description }, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col bg-violet-400/40 p-4 border border-indigo-300 shadow-lg rounded-lg"
                            variants={cardVariants}
                        >
                            {icon}
                            <h2 className="text-black text-lg font-medium w-full text-center mt-2">
                                {title}
                            </h2>
                            <p className="text-gray-900 mt-3 font-mono italic">{description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Personal Hobby Section */}
            <motion.div
                className="relative z-10 w-full flex flex-col gap-2 items-start p-3 bg-white/10 backdrop-blur-md rounded-lg"
                variants={sectionVariants}
            >
                <p className="text-gray-800 font-bold">PERSONAL HOBBY:</p>
                <hr className="w-full" />
                <motion.h6
                    className="text-black ml-5 mr-5 italic font-mono bg-indigo-300/30 rounded-lg p-2"
                    variants={sectionVariants}
                >
                    <Typewriter
                        words={[
                            "Outside of coding, I'm a passionate Tabla player. I love creating rhythmic patterns and exploring the deep cultural heritage of Indian classical music.",
                            "Whether it's practicing traditional compositions or experimenting with contemporary beats, I find immense joy and inspiration in playing the Tabla.",
                            "I believe that creativity in coding, like music, comes from rhythm, harmony, and a constant exploration of new possibilities!",
                        ]}
                        loop={0}
                        typeSpeed={100}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                </motion.h6>
            </motion.div>
        </motion.div>
    );
};

export default About;
