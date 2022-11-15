To fix this, we have an option:
Exclude @babel/plugin-transform-exponentiation-operator but this is bundled into many @babel/preset-env and other similar presets
For people using react, vue or other frameworks, this is a problem since they have to manually exclude this plugin
Many of them have to eject just to remove this plugin

Also, 32n syntax is not supported by other browsers like ios safari/safari 13 etc. which is a problem for people who want to support those browsers
there's one plugin `babel-plugin-transform-bigint` which can convert 32n to BigInt(32) but it has so many edge cases and bugs that it's not reliable

So, we have to use BigInt syntax in libraries while publishing so that the dependents can choose to polyfill BigInt via (`big-integer`) npm package directly.

I've also included dist folder here to show how the output looks like
