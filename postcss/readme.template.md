Reframe + PostCSS = :heart:

# `@reframe/postcss`

Use Reframe with PostCSS.

### Usage

Add `@reframe/postcss` to your `reframe.config` to use Reframe with PostCSS:

~~~js
// reframe.config

const postcss = require('@reframe/postcss'); // npm install @reframe/postcss

module.exports = {
    plugins: [
        postcss({
            loaderOptions: {
                // Loader options
                // This is where you add PostCSS plugins, PostCSS parser, etc
                // All options defined here are passed down to the `postcss-loader` options.
            },
        })
    ],
};
~~~

### Example

~~~js
!INLINE ./example/reframe.config
~~~

~~~sugarss
!INLINE ./example/pages/landing.css
~~~

~~~js
!INLINE ./example/pages/landing.universal.js
~~~
