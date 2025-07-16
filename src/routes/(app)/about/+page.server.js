// src/routes/(app)/projects/[slug]/+page.server.js
export const prerender = true;

export async function load({ fetch, params }) {
    const res = await fetch('/data/about.json');
    const about = await res.json();
    return { about };
}
