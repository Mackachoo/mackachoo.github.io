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
                desc: "",
                link: "",
                colour: "#2c7eb4",
                open: true
            }, {
                title: "WikiSearch",
                logo: wikisearch,
                snippet: "A Search engine for Wikipedia with AI, built using React and Python as the TTDS Project",
                desc: "",
                link: "",
                colour: "#99903e",
                open: false
            }, {
                title: "Simulating 2D Magnetic Materials for Reservoir Computing",
                logo: masters,
                snippet: "",
                desc: "",
                link: "",
                colour: "#8d1616",
                open: false
            }, {
                title: "Genetic Algorithms",
                logo: genetic,
                snippet: "",
                desc: "",
                link: "",
                colour: "#277e12",
                open: false
            }, {
                title: "Dynamic Simulation of Bacteria for powering Micro Machines",
                logo: dissertation,
                snippet: "",
                desc: "",
                link: "",
                colour: "#332ab1",
                open: false
            }, {
                title: "A New Adrift",
                logo: newadrift,
                snippet: "",
                desc: "",
                link: "",
                colour: "#0ac4b4",
                open: false
            }, {
                title: "Grover's Algorithm Simulation",
                logo: grovers,
                snippet: "",
                desc: "",
                link: "",
                colour: "#6d15a0",
                open: false
            }, {
                title: "Medical Computing Hackathons",
                logo: medical,
                snippet: "",
                desc: "",
                link: "",
                colour: "#b825bd",
                open: false
            },

        ]
    };
}) satisfies PageLoad;