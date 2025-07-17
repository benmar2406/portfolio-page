export const prerender = true; // or whatever you need
export const ssr = true;       // optional
export const csr = true;       // optional
export const trailingSlash = 'always';

export const load = () => {
  return {
    // prevent layout inheritance
    layout: null
  };
};
