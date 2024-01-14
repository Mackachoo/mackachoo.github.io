import type { PageLoad } from './$types';
import logaroo from "$lib/portfolio/logaroo.png";
import wikisearch from "$lib/portfolio/wikisearch.png";
import newadrift from "$lib/portfolio/newadrift.png";
import masters from "$lib/portfolio/masters.png";
import dissertation from "$lib/portfolio/dissertation.png";
import grovers from "$lib/portfolio/grovers.png";
import genetic from "$lib/portfolio/genetic.svg";
import medical from "$lib/portfolio/medical.svg";

type Project = {
    title: string;
    logo: string;
    snippet: string;
    desc: string;
    link: string;
    colour: string;
    open: boolean;
};

export const load = (async () => {
    return {
        projects: [
            {
                title: "Logaroo",
                logo: logaroo,
                snippet:
                    "A Flutter and Firebase app for tracking Skydiving jumps and manifesting.",
                desc: "I designed and programmed a Logbook App for Sports and Activities, built using Flutter. It offers a reactive logbook experience across Android, iOS, and web platforms. The backend was implemented with Firebase, providing user authentication and a NoSQL database for efficient data management.",
                link: "http://logbook2electricboogaloo.web.app/#/",
                colour: "#00696f",
                open: false
            }, {
                title: "WikiSearch",
                logo: wikisearch,
                snippet: "A Search engine for Wikipedia with AI features, built using React and Python as the TTDS Project",
                desc: "I was the primary programmer for our Text Technologies for Data Science group project which focused on developing an inverse positional index for IR and TF-IDF searches on all of English Wikipedia [~100GB]. We utilized word embedding vector search and the GPT-3 API, the Python backend was optimized using C++ libraries, achieving a remarkable 100-fold acceleration and seamlessly connected to a React frontend with Django.",
                link: "http://github.com/Mackachoo/TTDS-G35-CW3",
                colour: "#99903e",
                open: false
            }, {
                title: "Simulating 2D Magnetic Materials for Reservoir Computing",
                logo: masters,
                snippet: "Investigating CrBr3 and CrI3 for reservoir computing using an atomistic simulator",
                desc: "In my master's project, I explored the potential of CrBr3 and CrI3 as 2D magnetic materials for reservoir computing, utilizing an atomistic simulator to analyze their behavior in this physics-based AI training accelerator.",
                link: "",
                colour: "#6e6a62",
                open: false
            }, {
                title: "Genetic Algorithms",
                logo: genetic,
                snippet: "A partnered project to investigate the strengths and weaknesses of different Natural Computing techniques",
                desc: "In the Natural Computing partnered project, I programmed various genetic algorithms and a neural network for pattern matching, conducting a comprehensive study to evaluate their strengths and weaknesses.",
                link: "http://github.com/Mackachoo/Natural-Computing",
                colour: "#277e12",
                open: false
            }, {
                title: "Dynamic Simulation of Bacteria for powering Micro Machines",
                logo: dissertation,
                snippet: "Research into the potential use of bacteria for powering micro machines, using simulations of bacterial concentrations",
                desc: "For my honors project, I employed a smooth particle hydrodynamic simulator to investigate the propulsion of bacteria for potential use in micro machines. Programs were created to analyze and visualize bacteria concentrations, highlighting their potential applications.",
                link: "",
                colour: "#332ab1",
                open: false
            }, {
                title: "A New Adrift",
                logo: newadrift,
                snippet: "A Unity game demo featuring a customizable ship builder, an island generator and advanced movement system",
                desc: "I developed a sandbox Unity game demo featuring fully customizable ship frames and an island generator. I employed coordinate systems, marching cubes, and waveform collapse  algorithms to create them immersive and interactive gaming experience.",
                link: "http://danbuxton.notion.site/Showcase-a1a03a77802544a18336c974b74fc065?pvs=4",
                colour: "#0ac4b4",
                open: false
            }, {
                title: "Grover's Algorithm Simulation",
                logo: grovers,
                snippet: "A simulation of Grover's Algorithm, showcasing its time complexity and confirming its quadratic speedup compared to classical alternatives",
                desc: "In our Quantum Computing group project, I crafted a simulation of Grover's Algorithm, showcasing its time complexity and providing a quadratic speedup compared to classical alternatives through the use of qubits and quantum logic gates.",
                link: "http://github.com/Mackachoo/Quantum-Computing-Project",
                colour: "#6d15a0",
                open: false
            }, {
                title: "Medical Computing Hackathons",
                logo: medical,
                snippet: "Two Hackathon projects involving medical data visualization and blockchain-based medical data storage",
                desc: "At OxfordHack and Hex Hackathon in Eindhoven, I developed a two projects for medical informatics. One project involved a website visualizing disease distribution generated dynamically on a map using a medical databases. The second project utilized Solidity and the Ethereum blockchain for secure medical information storage, transmission and sharing.",
                link: "",
                colour: "#b825bd",
                open: false
            },

        ]
    };
}) satisfies PageLoad;