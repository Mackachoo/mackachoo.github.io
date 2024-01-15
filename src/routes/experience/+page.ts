import type { PageLoad } from './$types';
import eyeofthewind from "$lib/experience/eyeofthewind.png";
import sage from "$lib/experience/sage.png";
import spaceworks from "$lib/experience/spaceworks.png";
import assembly from "$lib/experience/assembly.png";
import mclarens from "$lib/experience/mclarens.png";
import underbelly from "$lib/experience/underbelly.png";
import eusdc from "$lib/experience/eusdc.png";
import reactionengines from "$lib/experience/reactionengines.png";
import yogscast from "$lib/experience/yogscast.png";
import qazaqair from "$lib/experience/qazaqair.png";
import wessexwater from "$lib/experience/wessexwater.png";
import bradfield from "$lib/experience/bradfield.png";

export const load: PageLoad = ({ params }) => {
    return {
        experiences: [
            {
                company: "Eye of the Wind",
                companydesc: "Charter Tall Ship",
                image: eyeofthewind,
                position: "Volunteer Deckhand",
                dates: "July 2023 - October 2023",
                description:
                    "I worked as a volunteer deckhand on a 40m square rigged tall ship sailing around the Baltic and North Sea. I was part of a team of 10 crew working in confined environments, under pressure and having to rapidly react to changing conditions when necessary.",
                filters: ["Hospitality", "Volunteer"],
            },
            {
                company: "Technology from Sage",
                image: sage,
                position: "Data Analyst Intern",
                dates: "May 2023 - June 2023",
                description:
                    "I was collating data about existing library systems adoptions. I was drawing this data from many sources and creating dynamic tables and graphs to be used in presentations. I also used Python extensively to automate data collection, scraping and clean up.",
                filters: ["Tech", "Internship"],
            },
            {
                company: "Spaceworks",
                image: spaceworks,
                position: "Web Designer",
                dates: "February 2023 - April 2023",
                description:
                    "I built three websites; Spaceworks, Greenworks and Decourcy House. These were built using Squarespace with custom CSS as deployment speed and being editable by the clients was key. I also set up email services for their domains as well as other IT services such as SEO.",
                filters: ["Tech", "Full-Time"],
            },
            {
                company: "Assembly Festival",
                companydesc: "Edinburgh's Christmas",
                image: assembly,
                position: "Ice Rink Marshal",
                dates: "November 2022 - January 2023",
                description:
                    "As a team, we coordinated hourly sessions with up to 250 skaters. During which we taught basic ice skating lessons, kept a safety watch and ensured the continued quality of the ice. Our most important tasks were to maintain the ice rink and its equipment for quality and cleanliness and to provide first aid in case of accidents. We also made it possible for people to skate with special requirements for example by supporting blind skaters.",
                filters: ["Hospitality", "Full-Time"],
            },
            {
                company: "McLaren's on the Corner",
                companydesc: "Restaurant",
                image: mclarens,
                position: "Front of House",
                dates: "September 2022 - November 2023",
                description:
                    "At McLaren’s I had to be very adaptable and learn quickly as I worked in a multirole position; as a waiter, barista and bar staff. We used radios constantly to coordinate across a large team and over 4 floors. We often hosted events, large and small, each bespoke with different layouts, decor and food.",
                filters: ["Hospitality", "Full-Time"],
            },
            {
                company: "Underbelly",
                companydesc: "The Fringe",
                image: underbelly,
                position: "Front of House",
                dates: "August 2022",
                description:
                    "I was part of the front of house team for Underbelly during the Fringe in Edinburgh; the world’s largest arts and media festival. Our team was responsible for 12 shows each day across 2 venues. We were responsible for crowd control, ticketing, seating and general upkeep. We made sure each performance ran safely without interruption or security concerns.",
                filters: ["Hospitality", "Full-Time"],
            },
            {
                company: "Edinburgh University Skydiving Club",
                image: eusdc,
                position: "President/Treasurer",
                dates: "August 2020 - August 2022",
                description:
                    "In my first year in the role of Treasurer during covid, we had to be very adaptable and prepare for the unexpected. I managed the accounts and budgeting where I had to be organised and keep myself up to date. Then as lockdown lifted I took the role of, I took the lead of a passionate and successful committee as we grew the club to over 100 members. We organised biweekly courses including all the transport and every week had varied socials that kept people coming back. As a team, we fostered a fun, engaging and welcoming environment for everyone.",
                filters: ["Volunteer"],
            },
            {
                company: "Reaction Engines",
                image: reactionengines,
                position: "Engineering Intern",
                dates: "August 2016",
                description:
                    "During my internship working in the engineering department, I used Solidworks to edit components as well as analyse them for safety concerns. My main focus was to determine if bolts in a tool were to break, would the outer casing explode due to the pressure. I spent a considerable time shadowing engineers from various departments, observing their work and gaining insight into their different tasks. This gave me a better understanding of the field of engineering and the challenges that come with it.",
                filters: ["Tech", "Internship"],
            },
            {
                company: "Yogscast",
                image: yogscast,
                position: "Video Editor Intern",
                dates: "July 2017",
                description:
                    "I learnt Video Editing using Adobe Premiere Pro for 2 weeks at Yogscast, a content creator agency. I learnt how this organisation took simple ideas and made them into success videos on Youtube and Twitch.",
                filters: ["Tech", "Internship"],
            },
            {
                company: "Bradfield College",
                image: bradfield,
                position: "Physics Education Organiser",
                dates: "October 2016 - April 2017",
                description:
                    "Through my last year, I organised educational events in Physics for students from Bradfield and other local schools. I arranged external speakers and organisation to give talks and run educational activities.",
                filters: ["Tech", "Volunteer"],
            },
            {
                company: "QazaqAir Almaty",
                companydesc: "Airline",
                image: qazaqair,
                position: "Engineering Intern",
                dates: "July 2016",
                description:
                    "I had work experience in the engineering department for 2 weeks, covering all aspects of aircraft safety and the protocols associated with maintenance. It was really interesting seeing how a fledgling airline copes with requirements set for much larger organisations.",
                filters: ["Tech", "Internship"],
            },
            {
                company: "Wessex Water",
                image: wessexwater,
                position: "Software Developer Intern",
                dates: "June 2015",
                description:
                    "I worked in the IT department for 2 weeks sitting and working across various desks in the department getting a good understanding of how theoretical IT translates into commercial reality and seeing all the different aspects of IT in business.",
                filters: ["Tech", "Internship"],
            }
        ]
    };
};
