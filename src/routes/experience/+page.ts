import eyeofthewind from "./images/eyeofthewind.png";
import sage from "./images/sage.png";
import assembly from "./images/assembly.png";
import mclarens from "./images/mclarens.png";
import underbelly from "./images/underbelly.png";
import eusdc from "./images/eusdc.png";
import reactionengines from "./images/reactionengines.png";
import yogscast from "./images/yogscast.png";
import qazaqair from "./images/qazaqair.png";
import wessexwater from "./images/wessexwater.png";

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        experiences: [
            {
                company: "Eye of the Wind",
                companydesc: "Charter Tall Ship",
                image: eyeofthewind,
                position: "Trainee Deckhand",
                dates: "July 2023 - October 2023",
                description:
                    "I worked as a trainee deckhand on a luxury tall ship sailing around the Baltic and North Sea. I was part of a team of 10 crew catering for a maximum of 12 guests.",
                filters: ["Hospitality", "Volunteer"],
            },
            {
                company: "Technology from Sage",
                companydesc: "",
                image: sage,
                position: "Data Analyst Intern",
                dates: "May 2023 - June 2023",
                description:
                    "For Sage, I was collating data about existing library systems adoptions. I was drawing this data from a many sources and creating dynamic tables and graphs that could be used and presented. I also used Python extensively to automate data collection, scraping and clean up.",
                filters: ["Tech"],
            },
            {
                company: "Assembly Festival",
                companydesc: "Edinburgh's Christmas",
                image: assembly,
                position: "Ice Rink Marshal",
                dates: "November 2022 - January 2023",
                description:
                    "As a team, we coordinated hourly sessions with up to 250 skaters. During which we taught basic ice skating lessons, kept a safety watch and ensured the continued quality of the ice. Our most important tasks were to maintain the ice rink and its equipment for quality and cleanliness and to provide first aid in case of accidents. We also made it possible for people to skate with special requirements for example by supporting blind skaters.",
                filters: ["Hospitality"],
            },
            {
                company: "McLaren's on the Corner",
                companydesc: "",
                image: mclarens,
                position: "Front of House",
                dates: "September 2022 - November 2023",
                description:
                    "At McLaren’s I had to be very adaptable and learn quickly as I worked in a multirole position; as a waiter, barista and bar staff. We used radios constantly to coordinate across a large team and over 4 floors. We often hosted events, large and small, each bespoke with different layouts, decor and food.",
                filters: ["Hospitality"],
            },
            {
                company: "Underbelly",
                companydesc: "The Fringe",
                image: underbelly,
                position: "Front of House",
                dates: "August 2022",
                description:
                    "I was part of the front of house team for Underbelly during the Fringe, Edinburgh; the world’s largest arts and media festival. Our team was responsible for 12 shows each day across 2 venues. We were responsible for crowd control, ticketing, seating and general upkeep. We made sure each performance ran safely without interruption or security concerns by keeping watch and communicating with radios.",
                filters: ["Hospitality"],
            },
            {
                company: "EUSDC",
                companydesc: "Edinburgh University Skydiving Club",
                image: eusdc,
                position: "President/Treasurer",
                dates: "August 2019 - August 2022",
                description:
                    "During covid, we had to be very adaptable and prepare for the unexpected. I managed the accounts and budgeting where I had to be organised and keep myself up to date. Then as lockdown lifted, I took the lead of a passionate and successful committee as we grew the club to over 100 members. We organised biweekly courses including transport and every week had varied socials that kept people coming back. As a team, we fostered a fun, engaging and welcoming environment for everyone.",
                filters: ["Volunteer"],
            },
            {
                company: "Reaction Engines",
                companydesc: "",
                image: reactionengines,
                position: "Engineering Intern",
                dates: "August 2016",
                description:
                    "I had an internship working in the engineering department. During that time I used Solidworks to edit components, as well as analyse them for safety concerns. My main focus was to determine if bolts in a tool were to break, would the outer casing explode due to the pressure. I spent a considerable time shadowing engineers from various departments, observing their work and gaining insight into their different tasks. This gave me a better understanding of the engineering field and the challenges that come with it.",
                filters: ["Tech"],
            },
            {
                company: "Yogscast",
                companydesc: "",
                image: yogscast,
                position: "Video Editor Intern",
                dates: "July 2017",
                description:
                    "Video Editing using Adobe Premiere Pro for 2 weeks. Yogscast are a content producing media agency focussing on YouTube. I saw how this organisation took a simple idea and made it a success across a contemporary platform. I also learnt real skills in video and audio editing.",
                filters: ["Tech"],
            },
            {
                company: "QazaqAir Almaty",
                companydesc: "Airline",
                image: qazaqair,
                position: "Engineering Intern",
                dates: "July 2016",
                description:
                    "I had work experience in the engineering department for 2 weeks, covering all aspects of aircraft safety and the protocols associated with maintenance. It was really interesting seeing how a fledgling airline copes with requirements set for much larger organisations.",
                filters: ["Tech"],
            },
            {
                company: "Wessex Water",
                companydesc: "",
                image: wessexwater,
                position: "Software Developer Intern",
                dates: "June 2015",
                description:
                    "In the IT department for 2 weeks sitting and working across various desks in the department getting a real understanding of how theoretical IT translates into commercial reality and seeing all the different aspects of IT in business.",
                filters: ["Tech"],
            },
        ]
    };
};
