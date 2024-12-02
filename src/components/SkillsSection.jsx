import { motion } from "framer-motion"; // For animations
import PropTypes from "prop-types";
import { FaReact, FaNodeJs, FaIcons } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiJavascript, SiPython } from "react-icons/si";
import { DiHtml5, DiCss3, DiJava } from "react-icons/di";

const skillsData = {
    Frontend: [
        { name: "ReactJS", icon: <FaReact className="text-blue-500 text-2xl" />, level: 75 },
        { name: "HTML5", icon: <DiHtml5 className="text-green-500 text-2xl" />, level: 80 },
        { name: "CSS3", icon: <DiCss3 className="text-blue-400 text-2xl" />, level: 85 },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 text-2xl" />, level: 90 },
    ],
    Backend: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, level: 45 },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" />, level: 65 },
    ],
    "Tools & Libraries": [
        { name: "React Icons", icon: <FaIcons className="text-blue-700 text-lg" />, level: 85 },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-500 text-2xl" />, level: 90 },
    ],
    Languages: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-2xl" />, level: 60 },
        { name: "Python", icon: <SiPython className="text-blue-400 text-2xl" />, level: 50 },
        { name: "Java", icon: <DiJava className="text-blue-700 text-2xl" />, level: 50 },
    ],
};

const SkillBar = ({ name, icon, level }) => {
    return (
        <motion.div
            className="flex items-center gap-4 p-2 bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: level * 0.01 }}
        >
            <div className="flex items-center gap-2">
                {icon}
                <span className="text-gray-100 font-medium">{name}</span>
            </div>
            <div className="flex-1 h-3 bg-white rounded-md overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-md"
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1 }}
                ></motion.div>
            </div>
            <span className="text-sm font-medium text-blue-200">{level}%</span>
        </motion.div>
    );
};

SkillBar.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    level: PropTypes.number.isRequired,
};

const SkillsSection = () => {
    return (
        <motion.div
            className="relative p-6 rounded-t-xl rounded-b-xl border-b-4 border-red-600 shadow-2xl m-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            {/* Blurry Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 blur-3xl opacity-60 animate-pulse"></div>

            <h2 className="relative z-10 text-2xl font-bold text-white mb-4 text-center">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Skills
                </motion.div>
            </h2>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skillsData).map(([category, skills], index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white/10 backdrop-blur-lg p-4 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold text-gray-100 mb-3 text-center">
                            {category}
                        </h3>
                        <div className="space-y-3">
                            {skills.map((skill, idx) => (
                                <SkillBar key={idx} {...skill} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

SkillsSection.propTypes = {
    skills: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                icon: PropTypes.element.isRequired,
                level: PropTypes.number.isRequired,
            })
        )
    ).isRequired,
};

SkillsSection.defaultProps = {
    skills: skillsData,
};

export default SkillsSection;
