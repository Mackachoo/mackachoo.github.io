import type { PageLoad } from './$types';
import uoe from '$lib/aboutme/uoe.png'
import kx from '$lib/aboutme/kx.png'
import flyingfish from '$lib/aboutme/flyingfish.png'
import dofe from '$lib/aboutme/dofe.png'
import uos from '$lib/aboutme/uos.png'

export const load: PageLoad = ({ params }) => {
    return {
        education: [{
            institute: "University of Edinburgh",
            dates: "August 2017 - June 2022",
            course: "MPhys Computational Physics",
            grade: "2:1",
            extras: ["TTDS Best Project for AI Enhanced Wikipedia Search Enginer ", "EUSDC [President/Treasurer]", "GEAS [Tabletop Society]", "Improverts [Improv Society]"]
        }, {
            institute: "Bradfield College",
            dates: "September 2015 - June 2017",
            course: "Maths, Further Maths, Physics and Computer Science",
            grade: "AABB",
            extras: ["Duke of Edinburgh Gold", "Physics Prize, Computer Science Prize and McKinnon Academic Prize", "EPQ on 'Where in the solar system should Humanity make it's next home'", "Model United Nations", "Organised Physics educational events with external speakers"]
        }, {
            institute: "Monktom Combe School",
            dates: "September 2012 - June 2015",
            grade: "A*A*AAAAABBBBB",
            extras: ["Duke of Edinburgh Silver and Bronze", "REME (Engineering Cadets)"]

        }],
        qualifications: [{
            name: "Masters in Computational Physics",
            level: "2:1",
            institute: "University of Edinburgh",
            icon: uoe
        }, {
            name: "KDB+ Course",
            level: "Fundamentals and Advanced",
            institute: "KX",
            icon: kx,
            link: ""
        }, {
            name: "STCW Maritime Certification",
            institute: "Flying Fish",
            icon: flyingfish
        }, {
            name: "ECS Summer Supercomputing Course",
            institute: "University of Southampton",
            icon: uos
        }, {
            name: "Duke of Edinburgh",
            level: "Gold, Silver and Bronze",
            institute: "Bradfield College and Monkton Combe School",
            icon: dofe
        }
        ],
    };
};
