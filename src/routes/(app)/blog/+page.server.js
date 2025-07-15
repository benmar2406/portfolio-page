// src/routes/(app)/projects/+page.server.js
export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch('/data/projects.json');
	const projects = await res.json();
	return { projects };
}
