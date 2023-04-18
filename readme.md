# 11tea

## Built with 

https://github.com/adamstddrd/grease

uses ESBuild and LightningCSS


## File Structure, Templates, Frontmatter

    The Homepage is in /_source/index.liquid and uses the "home" Template in /_source/_layouts/ (which uses the "base" Template to show the layout-chaining-possibilities)

### Possible Frontmatter

layout: {Which layout is used - example: home}
title: {Which title is used - example: Home}
scripts: {which js/ts-scripts are loaded in the Head-Tag, multiple srcipts are possible
- example: [alpine.js, my-js.js]}
styles: {which css-styles are loaded in the Head-Tag, multiple styles are possible
- example: [tailwind.css, my-css.css]}


    the folder for scripts is /_source/assets/js/
    the folder for styles is /_source/assets/css/


## CSS and JS Configuration


    Source Folder is /_source/
    Output Folder is /_public/
    Includes Folder is /_source/_includes/
    Layouts Folder is /_source/_layouts/

## Dev Server

    The Eleventy Dev Server is configured to run better with Tailwind. The tailwind-output file ("/_public/assets/tailwind.css") is an additional watchtarget for reloading the browser

## Minifying

    When in Production Mode ("npm run build") Eleventy/HTML-Minifier-Terser minifies the HTML, LigntningCSS minifies the CSS and ESBuild minifies the JS/TS.


