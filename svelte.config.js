import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // required for deep-link refreshes
    }),
    paths: {
      base: '' // you're serving from the domain root
    }
  }
};

export default config;
