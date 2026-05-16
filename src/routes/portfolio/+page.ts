import type { PageLoad } from './$types';
import skiwi from "$lib/portfolio/skiwi.png";
import tldr from "$lib/portfolio/tldr.png";
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
                title: "Skiwi",
                logo: skiwi,
                snippet:
                    "Founder and lead developer of a Flutter/Firebase app for skiing with offline maps, group tracking, and 3,000+ resort discovery.",
                desc: "As founder and lead developer, I built Skiwi's mobile and web experience while driving business strategy and marketing. The app features offline piste maps, real-time group [...]",
                link: "http://skiwi.co.uk",
                colour: "#A5D4EC",
                open: false
            }, {
                title: "TLDRNews App",
                logo: tldr,
                snippet:
                    "A cross-platform video player for the TLDR News network built with Flutter, Firebase, and the YouTube Data API.",
                desc: "I built a cross-platform video player supporting web, Android, and iOS. Features include channel browsing for all TLDR News channels with full back-catalogues, in-app YouTube playback, email and Google sign-in authentication, and an admin console for managing channels and users. The app utilizes Firebase Remote Config for live API key rotation without shipping new builds, and supports light and dark themes with custom typography.",
                link: "https://tldr-news-229ac.web.app/",
                colour: "#FF6B35",
                open: false
            }, {
                title: "Logaroo",
                logo: logaroo,
                snippet:
                    "A Flutter and Firebase app for tracking Skydiving jumps and manifesting.",
                desc: "I designed and programmed a Logbook App for Sports and Activities, built using Flutter. It offers a reactive logbook experience across Android, iOS, and web platforms. The b[...]",
                link: "http://logbook2electricboogaloo.web.app/#/",
                colour: "#00696f",
                open: false
            }, {
                title: "WikiSearch",
                logo: wikisearch,
                snippet: "A Search engine for Wikipedia with AI features, built using React and Python as the TTDS Project",
                desc: "I was the primary programmer for our Text Technologies for Data Science group project which focused on developing an inverse positional index for IR and TF-IDF searches on a[...]",
                link: "http://github.com/Mackachoo/TTDS-G35-CW3",
                colour: "#99903e",
                open: false
            }, {
                title: "Simulating 2D Magnetic Materials for Reservoir Computing",
                logo: masters,
                snippet: "Investigating CrBr3 and CrI3 for reservoir computing using an atomistic simulator",
                desc: "In my master's project, I explored the potential of CrBr3 and CrI3 as 2D magnetic materials for reservoir computing, utilizing an atomistic simulator to analyze their behavi[...]",
                link: "",
                colour: "#6e6a62",
                open: false
            }, {
                title: "Genetic Algorithms",
                logo: genetic,
                snippet: "A partnered project to investigate the strengths and weaknesses of different Natural Computing techniques",
                desc: "In the Natural Computing partnered project, I programmed various genetic algorithms and a neural network for pattern matching, conducting a comprehensive study to evaluate t[...]",
                link: "http://github.com/Mackachoo/Natural-Computing",
                colour: "#277e12",
                open: false
            }, {
                title: "Dynamic Simulation of Bacteria for powering Micro Machines",
                logo: dissertation,
                snippet: "Research into the potential use of bacteria for powering micro machines, using simulations of bacterial concentrations",
                desc: "For my honors project, I employed a smooth particle hydrodynamic simulator to investigate the propulsion of bacteria for potential use in micro machines. Programs were creat[...]",
                link: "",
                colour: "#332ab1",
                open: false
            }, {
                title: "A New Adrift",
                logo: newadrift,
                snippet: "A Unity game demo featuring a customizable ship builder, an island generator and advanced movement system",
                desc: "I developed a sandbox Unity game demo featuring fully customizable ship frames and an island generator. I employed coordinate systems, marching cubes, and waveform collapse [...]",
                link: "http://danbuxton.notion.site/Showcase-a1a03a77802544a18336c974b74fc065?pvs=4",
                colour: "#0ac4b4",
                open: false
            }, {
                title: "Grover's Algorithm Simulation",
                logo: grovers,
                snippet: "A simulation of Grover's Algorithm, showcasing its time complexity and confirming its quadratic speedup compared to classical alternatives",
                desc: "In our Quantum Computing group project, I crafted a simulation of Grover's Algorithm, showcasing its time complexity and providing a quadratic speedup compared to classical [...]",
                link: "http://github.com/Mackachoo/Quantum-Computing-Project",
                colour: "#6d15a0",
                open: false
            }, {
                title: "Medical Computing Hackathons",
                logo: medical,
                snippet: "Two Hackathon projects involving medical data visualization and blockchain-based medical data storage",
                desc: "At OxfordHack and Hex Hackathon in Eindhoven, I developed a two projects for medical informatics. One project involved a website visualizing disease distribution generated d[...]",
                link: "",
                colour: "#b825bd",
                open: false
            },

        ]
    };
}) satisfies PageLoad;
