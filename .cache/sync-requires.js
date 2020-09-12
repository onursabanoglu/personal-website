const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/onursabanoglu/projects/personal-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/onursabanoglu/projects/personal-website/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/onursabanoglu/projects/personal-website/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/onursabanoglu/projects/personal-website/src/pages/index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/onursabanoglu/projects/personal-website/src/templates/blog-template.js")))
}
