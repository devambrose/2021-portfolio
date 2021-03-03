const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/about.js"))),
  "component---src-pages-hire-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/hire.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/projects.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/mnt/sda4/projects/node/2021-portfolio/src/pages/skills.js")))
}

