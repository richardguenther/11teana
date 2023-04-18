const markdownIt = require('markdown-it');
const esbuild = require('./_source/_utilities/esbuild.js');
const lightingcss = require('./_source/_utilities/lightningcss.js');
const image = require('./_source/_utilities/image.js');
const style = require('./_source/_utilities/style.js');
const setVar = require('./_source/_utilities/setVar.js');
const fullDate = require('./_source/_utilities/fullDate.js');
const getRandom = require('./_source/_utilities/getRandom.js');
const markdownify = require('./_source/_utilities/markdownify.js');
const sortBy = require('./_source/_utilities/sortBy.js');
const where = require('./_source/_utilities/where.js');
const htmlmin = require('html-minifier-terser');
const { isProduction, isStaging } = require('./_source/_data/env.js');

module.exports = function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  Plugins, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addPairedShortcode('style', style);
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('getRandom', getRandom);
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter('sortBy', sortBy);
  eleventyConfig.addFilter('where', where);

  /* --------------------------------------------------------------------------
Dev Server settings
-------------------------------------------------------------------------- */

  eleventyConfig.setServerOptions({
    domDiff: true,
    watch: ["_public/assets/css/tailwind.css"],
  });

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));


  /* --------------------------------------------------------------------------
  Minify HTML in Production
  -------------------------------------------------------------------------- */
  if (isProduction || isStaging) {
    eleventyConfig.addTransform('html-minify', (content, path) => {
      if (path && path.endsWith('.html')) {
        return htmlmin.minify(
          content, {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          includeAutoGeneratedTags: false,
          removeComments: true,

        }
        );
      }

      return content;
    });
  }

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.addPassthroughCopy('_source/assets/fonts');
  eleventyConfig.addPassthroughCopy({ "_source/assets/static": "/" });
  eleventyConfig.addPassthroughCopy('_source/assets/images');
  if (isProduction || isStaging) {
    eleventyConfig.addPassthroughCopy({ "_tinacms/": "/_public/admin/" });
  }

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
};
