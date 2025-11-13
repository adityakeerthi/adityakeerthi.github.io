module.exports = function(eleventyConfig) {
  // Copy CSS directly to output (maps root style.css to _site/css/style.css)
  eleventyConfig.addPassthroughCopy({
    "style.css": "css/style.css"
  });

  // Set custom directories
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
      layouts: "../_includes/layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
