import logaroo from "$lib/portfolio/logaroo.png";
import wikisearch from "$lib/portfolio/wikisearch.png";
import newadrift from "$lib/portfolio/newadrift.png";
import masters from "$lib/portfolio/masters.png";
import dissertation from "$lib/portfolio/dissertation.png";
import grovers from "$lib/portfolio/grovers.png";
import genetic from "$lib/portfolio/genetic.svg";
import medical from "$lib/portfolio/medical.svg";

export let projects: Record<string, Record<string, any>> = {
    logaroo: {
        title: "Logaroo",
        icon: logaroo,
        snippet:
            "A Flutter and Firebase app for tracking Skydiving jumps and manifesting.",
        component: ""
    }, wikisearch: {
        title: "WikiSearch",
        icon: wikisearch,
        snippet: "A Search engine for Wikipedia with AI, built using React and Python as the TTDS Project"
    }, masters: {
        title: "Simulating 2D Magnetic Materials for Reservoir Computing",
        icon: masters,
        snippet: ""
    }, genetic: {
        title: "Genetic Algorithms",
        icon: genetic,
        snippet: ""
    }, dissertation: {
        title: "Dynamic Simulation of Bacteria for powering Micro Machines",
        icon: dissertation,
        snippet: ""
    }, newadrift: {
        title: "A New Adrift",
        icon: newadrift,
        snippet: ""
    }, grovers: {
        title: "Grover's Algorithm Simulation",
        icon: grovers,
        snippet: ""
    }, hackathons: {
        title: "Medical Computing Hackathons",
        icon: medical,
        snippet: ""
    },

}