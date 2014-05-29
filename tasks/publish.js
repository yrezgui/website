var gulp = require("gulp")
var ghPages = require("gulp-gh-pages")

var paths = require("./paths")

/**
 * publish task
 *
 * publish build in the gh-pages branch
 */
module.exports = function(){
  console.log(process.env.GH_TOKEN ? "GH_TOKEN is here" + process.env.GH_TOKEN.length : "well gh_token is not here")
  return gulp.src(paths.dist.public + "**/*")
    .pipe(ghPages({
      remoteUrl : "https://" + (process.env.GH_TOKEN ? process.env.GH_TOKEN + "@" : "") + "github.com/putaindecode/website.git",
      branch : "gh-pages",
      cacheDir : __dirname + "/../.publish"
    }))
}
