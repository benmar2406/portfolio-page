// src/routes/(app)/projects/[slug]/+page.server.js
export const prerender = true;

export async function load({ fetch, params }) {
    const res = await fetch('/data/projects.json');
    const projects = await res.json();

    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        throw error(404, 'Project not found');
    }

    return { project };
}
