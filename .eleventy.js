module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
}; 