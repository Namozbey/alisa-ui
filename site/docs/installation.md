To install the [npm package](https://www.npmjs.com/package/alisa-ui) run the following within your project directory.

```bash
npm i alisa-ui
```

Note that the library doesn't provide any styling out of the box, `tailwindcss` is a peer dependency so it's necessary to also follow the instructions at https://tailwindcss.com/docs/installation.

### TailwindCSS Plugins

React Tailwind makes use of plugins to add additional functionality within components (e.g. a `.visually-hidden` utility class to render content for screen readers only).

```js static
const plugins = require('alisa-ui/plugins')

module.exports = {
  // ...project config
  plugins: [...Object.keys(plugins).map(name => plugins[name]())],
}
```

### PurgeCSS

If you are using [PurgeCSS](https://github.com/FullHuman/purgecss) then there are specific tools available to assist in allowing PurgeCSS to parse Alisa UI props and also whitelist class names generated by the library based off of `theme` values. See the config below for how to use these when setting up PurgeCSS.

```js static
import { getWhitelist, TailwindReactExtractor } from 'alisa-ui'

new PurgecssPlugin({
  whitelist: getWhitelist({
    // project's alisa-ui theme
  }, [
    // project specific selector whitelist
  ]),
  paths:  glob.sync([
    // glob of jsx directory
  ]),
  extractors: [
    {
      extractor: TailwindReactExtractor,
      extensions: ['js', 'jsx'],
    },
  ],
}),
```