import type { PageLoad } from './$types';
import { projects } from '$lib/portfolio/projects';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
    if (Object.keys(projects).includes(params.project)) {
        return projects[params.project];
    }
    return {
        title: "Error: No project found",

    };
};