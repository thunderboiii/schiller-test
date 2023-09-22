const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/assets');


    eleventyConfig.addPassthroughCopy({
        "./node_modules/dav/dav.min.js": "./src/assets/dav/dav.min.js"
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addCollection("faecher", function(collection) {
        return collection.getFilteredByGlob("src/_pages/fächer/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}