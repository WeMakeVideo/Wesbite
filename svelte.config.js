import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter({
      // Match Vercel’s default Node runtime; use 'edge' only if you need the Edge runtime
      runtime: 'nodejs20.x'
    })
  }
};
