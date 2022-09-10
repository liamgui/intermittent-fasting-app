import adapter from '@sveltejs/adapter-auto';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import preprocess from 'svelte-preprocess';

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/lib/style/`;
console.log(sassPath);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}variables.scss'; @import '${sassPath}global.scss';`
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
