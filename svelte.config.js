// ✅ SvelteKit adapter-static config for Netlify deployment
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html' // ✅ Required for SPA fallback support
    }),
    prerender: {
      crawl: true,
      enabled: true,
      onError: 'continue',
      default: true
    },
    // ❗ Only use `paths.base` if deploying to a subdirectory (e.g., /portfolio)
    // For root domain (https://yourdomain.com), omit `paths.base` entirely or keep it as ''
  }
};

export default config;