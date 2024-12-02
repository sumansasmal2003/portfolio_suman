import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const Resume = () => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Colors for aesthetics
        const primaryColor = "#000"; // Black for headings and lines
        const secondaryColor = "#333333"; // Dark gray for text

        // Styling utility for section titles
        const sectionTitle = (title, yPosition) => {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            doc.setTextColor(primaryColor);
            doc.text(title, marginLeft, yPosition);
            doc.setDrawColor(primaryColor);
            doc.setLineWidth(0.5);
            doc.line(marginLeft, yPosition + 2, 195, yPosition + 2);
            doc.setTextColor(secondaryColor);
        };

        const marginLeft = 15;
        const lineSpacing = 8;

        // Header Section (Personal Info)
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(primaryColor);
        doc.text("Suman Sasmal", 105, 20, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(secondaryColor);
        const phoneText = "Phone: +91 9933012328";
        doc.text(phoneText, 105, 30, { align: "center" });
        doc.text("Email: sasmalsuman04@gmail.com", 105, 37, { align: "center" });
        doc.text("GitHub: github.com/sumansasmal2003", 105, 44, { align: "center" });

        // Clickable Phone and GitHub Links
        const phoneWidth = doc.getTextWidth(phoneText) / 2;
        doc.link(105 - phoneWidth, 25, phoneWidth * 2, 10, { url: "tel:+919933012328" }); // Adjust height (10) if necessary

        const githubWidth = doc.getTextWidth("GitHub: github.com/sumansasmal2003") / 2;
        doc.link(105 - githubWidth, 40, githubWidth * 2, 8, { url: "https://github.com/sumansasmal2003" });

        // Line Separator
        doc.setDrawColor(primaryColor);
        doc.setLineWidth(1);
        doc.line(marginLeft, 50, 195, 50);

        // Education Section
        sectionTitle("EDUCATION", 60);
        const educationDetails = [
            "Madhyamik - Kulya Abinash Chandra Memorial High School (2018-19)",
            "Diploma - Contai Polytechnic (2019-22)",
            "B.Tech - College of Engineering & Management, Kolaghat (2022 - Ongoing)"
        ];
        educationDetails.forEach((edu, index) => doc.text(edu, marginLeft, 70 + index * lineSpacing));

        // Skills Section
        sectionTitle("TECHNICAL & OTHER SKILLS", 100);
        const skills = [
            "Frontend: ReactJS, TailwindCSS, HTML, CSS, JavaScript",
            "Backend: Node.js, Firebase",
            "Programming Languages: Java, Python",
            "Tools: VSCode, Android Studio, Pycharm, Microsoft Office",
            "Languages: Bengali (Fluent), English (Intermediate), Hindi (Intermediate)",
            "Soft Skills: Problem-solving, Communication, Team Collaboration"
        ];
        skills.forEach((skill, index) => doc.text(skill, marginLeft, 110 + index * lineSpacing));

        // Projects Section
        sectionTitle("PROJECTS", 160);
        const projects = [
            {
                title: "Cartttttttoon - Cartoon Viewing Platform",
                description: "A web application to explore various cartoons built using ReactJS and Firebase.",
                url: "https://cartttttttoon.netlify.app"
            },
            {
                title: "Weather PRO - Weather App",
                description: "Provides real-time weather updates using the OpenWeather API and ReactJS.",
                url: "https://placeather.netlify.app"
            },
            {
                title: "Educason - Topic Discussion Platform",
                description: "A platform for topic discussions and learning, built with ReactJS and Firebase.",
                url: "https://educason.netlify.app"
            },
            {
                title: "Medicine Catalogue - Medicine Search Tool",
                description: "A web tool to search and explore medicines using HTML, CSS, and JavaScript.",
                url: "https://medicinecatalog.netlify.app"
            },
            {
                title: "SUCSS - Club Website",
                description: "Official club website showcasing activities, built with ReactJS and TailwindCSS. It was built by using ChatGPT",
                url: "https://sucss.netlify.app"
            },
            {
                title: 'Portfolio - a portfolio of my own',
                description: "a fully responsive portfolio website made by ReactJS, taiwindcss, and JSX.",
                url: "https://portfoliossofficial.netlify.app"
            }
        ];

        projects.forEach((project, index) => {
            const yPosition = 170 + index * (lineSpacing * 2);
            doc.text(`${project.title}`, marginLeft, yPosition);
            doc.setFontSize(11);
            doc.setFont("helvetica", "normal");
            doc.text(`${project.description}`, marginLeft + 5, yPosition + 6, { maxWidth: 170 });
            const textWidth = doc.getTextWidth(project.title);
            doc.link(marginLeft, yPosition - 3, textWidth, 8, { url: project.url });
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
        });

        // Career Objective Section
        sectionTitle("CAREER OBJECTIVE", 270);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(12);
        doc.text(
            "Dynamic software developer eager to leverage skills in ReactJS and Firebase to build impactful web applications.",
            marginLeft,
            280,
            { maxWidth: 180 }
        );

        // Footer with Page Number
        doc.setFontSize(10);
        doc.setTextColor(primaryColor);
        doc.text("Page 1", 105, 300, { align: "center" });

        // Save the PDF
        doc.save("Resume_Suman_Sasmal.pdf");
    };


    return (
        <div className="flex flex-col w-full items-center justify-center bg-gradient-to-tr from-blue-800 via-indigo-500 to-violet-800 p-4 min-h-screen">
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <h1 className="text-2xl text-center text-white font-bold">Suman Sasmal</h1>
                <div className="flex items-center justify-center gap-1 mt-3">
                    <a
                        href='tel:9933012328'
                        className="text-blue-100 font-bold text-xs"
                    >
                        +91 9933012328
                    </a>
                    <hr className="border-2 w-3 border-white" />
                    <a href="mailto:sasmalsuman04@gmail.com" className="text-blue-100 font-bold text-xs">sasmalsuman04@gmail.com</a>
                    <hr className="border-2 w-3 border-white" />
                    <Link to='https://github.com/sumansasmal2003' className="text-blue-100 font-bold text-xs">GitHub</Link>
                </div>

                {/* Education Section */}
                <div className="flex flex-col mt-3">
                    <p className="text-white font-medium mb-1">EDUCATION:</p>
                    <hr className="border-2" />
                    <div className="mt-3 overflow-x-auto">
                        <div className="min-w-[500px] flex justify-between">
                            <div className="flex items-center justify-center gap-[4rem]">
                                <p className="text-sm md:text-lg font-bold italic text-gray-50">Degree</p>
                                <p className="text-sm md:text-lg font-bold italic text-gray-50 w-[7rem] md:w-full">Institution</p>
                            </div>
                            <p className="text-sm md:text-lg font-bold italic text-gray-50 w-[13rem]">Year</p>
                        </div>
                        <div className="min-w-[500px] flex justify-between mt-1">
                            <div className="flex items-center justify-center gap-[2rem]">
                                <p className="text-sm md:text-lg font-mono italic text-gray-50">Madhyamik</p>
                                <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[11rem] md:w-full">Kulya Abinash Chandra Memorial High School</p>
                            </div>
                            <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[13rem]">2018-19</p>
                        </div>
                        <div className="min-w-[500px] flex justify-between mt-1">
                            <div className="flex items-center justify-center gap-[3rem]">
                                <p className="text-sm md:text-lg font-mono italic text-gray-50">Diploma</p>
                                <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[11rem] md:w-full">Contai Polytechnic</p>
                            </div>
                            <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[13rem]">2019-22</p>
                        </div>
                        <div className="min-w-[500px] flex justify-between mt-1 mb-2">
                            <div className="flex items-center justify-center gap-[3.4rem]">
                                <p className="text-sm md:text-lg font-mono italic text-gray-50">B.Tech</p>
                                <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[11rem] md:w-full">College of Engineering & Management, Kolaghat</p>
                            </div>
                            <p className="text-sm md:text-lg font-mono italic text-gray-50 w-[13rem]">2022-Ongoing</p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="flex flex-col mt-4">
                    <p className="text-white font-medium mb-1">TECHNICAL & OTHER SKILLS:</p>
                    <hr className="border-2" />
                    <div className="flex flex-col mt-3 gap-2">
                        <p className="text-white"><span className="font-bold">Programming Languages: </span>ReactJS, Tailwindcss(Advanced level), HTML(Intermediate level), CSS, Javascript(Intermediate level), JSX(Intermediate Level), Java(Beginner level), Python(Intermediate level)</p>
                        <p className="text-white"><span className="font-bold">Software/Tools: </span>VsCode, Microsoft Office, Notepad, Android Studio, compatible with Linux, Windows, and Mac</p>
                        <p className="text-white"><span className="font-bold">Languages: </span>Bengali(fluent), English(Intermediate), Hindi(Intermediate)</p>
                        <p className="text-white"><span className="font-bold">Soft Skills: </span>Strong problem-solving ability, Effective communication, Team collaboration</p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="flex flex-col mt-4">
                    <p className="text-white font-medium mb-1">PROJECTS:</p>
                    <hr className="border-2" />
                    <div className="flex flex-col mt-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-bold">Project Name: <span className="text-indigo-600">Cartttttttoon</span></p>
                            <p className="text-sm font-medium text-gray-800">A responsive cartoon viewing platform that acts like youtube but in a small scale here 100+ different cartoon videos are available to watch.</p>
                            <p className="text-xs font-bold text-black"><strong className="text-blue-700">Technologies Used: </strong> ReactJS, TailwindCSS, firebase realtime database, firebase storage</p>
                            <a
                                href="https://cartttttttoon.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-bold">Project Name: <span className="text-indigo-600">Weather PRO</span></p>
                            <p className="text-sm font-semibold text-gray-800">A responsive weather showing platform that will fetch your current location automatically and also will show the weather for the searched locations.</p>
                            <p className="text-xs font-bold text-black"><strong className="text-blue-700">Technologies Used: </strong> ReactJS, tailwindcss, OpenWeather API</p>
                            <a
                                href="https://placeather.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-bold">Project Name: <span className="text-indigo-600">Educason</span></p>
                            <p className="text-sm font-medium text-gray-800">A responsive topic discussing platform where user can read and understand a variety of topic of different subjects.</p>
                            <p className="text-xs font-bold text-black"><strong className="text-blue-700">Technologies Used: </strong>ReactJS, tailwindcss, Firebase realtime database, firebase storage </p>
                            <a
                                href="https://educason.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-bold">Project Name: <span className="text-indigo-600">Medicine Catalogue</span></p>
                            <p className="text-sm font-medium text-gray-800">A responsive medicine website where user can search their symptoms and based on that suggestive medicines will come absolutely no AI is being used just matching the keywords.</p>
                            <p className="text-xs font-bold text-black"><strong className="text-blue-700">Technologies Used: </strong>HTML, CSS, & Javascript</p>
                            <a
                                href="https://medicinecatalog.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="font-bold">Project Name: <span className="text-indigo-600">SUCSS - a club website</span></p>
                            <p className="text-sm font-medium text-gray-800">A responsive club website that has a lot of features. it has been made by using chatGPT fully not by me. it is a superbly professional club website.</p>
                            <p className="text-xs font-bold text-black"><strong className="text-blue-700">Technologies Used: </strong>ReactJS, typescript, tailwindcss, nodemailer, firebase realtime database, firebase auth, firebase storage and also many other technologies.</p>
                            <a
                                href="https://sucss.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <p className="text-white font-medium mb-1">CARRIER OBJECTIVE:</p>
                    <hr className="border-2" />
                    <div className="flex flex-col mt-3 gap-2">
                        <p className="text-white italic font-mono">&apos;Aspiring software developer with a strong foundation in ReactJS, JavaScript, and web technologies, eager to contribute to impactful projects and grow in a dynamic environment.&apos;</p>
                    </div>
                </div>
            </div>
            <button
                onClick={handleDownloadPDF}
                className="mt-4 mb-4 px-4 py-2 bg-white text-indigo-600 font-bold rounded shadow hover:bg-indigo-100"
            >
                Download Resume
            </button>
        </div>
    );
};

export default Resume;
