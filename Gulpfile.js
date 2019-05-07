const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const watch = require("gulp-watch");
const path = require("path");
var flatmap = require("gulp-flatmap");
const connect = require("gulp-connect");

const output = "./build";
const revealRoot = "./node_modules/reveal.js/";

var themeSCSS = "./src/stylesheets/index.scss";
var outputCSS = "./build/css";
var indexHTML = "./src/*.html";
var imagePath = "./data/**/img/**/*";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};

gulp.task("copyRevealJs", function() {
  gulp.src(revealRoot + "/js/*").pipe(gulp.dest(output + "/js/"));
  gulp.src(revealRoot + "/plugin/**/*").pipe(gulp.dest(output + "/plugin/"));
  gulp.src(revealRoot + "/lib/**/*").pipe(gulp.dest(output + "/lib/"));
});

gulp.task("copyIMG", function() {
  gulp.src(imagePath).pipe(gulp.dest(output + "/data/"));
  gulp.src("./data/media/**/*").pipe(gulp.dest(output + "/data/media/"));
});

gulp.task("connect", function() {
  connect.server({
    root: "./build/",
    livereload: true
  });
});

gulp.task("md", function() {
  gulp
    .src("./data/*/*/*.md")
    .pipe(gulp.dest(output + "/data/"))
    .pipe(
      // do a subtask based on the md
      flatmap(function(stream, file) {
        var currentDirectory = path.dirname(file.path);
        var relativePath = path.relative(process.cwd(), currentDirectory);

        gulp.src("./src/slides/index.html").pipe(gulp.dest(relativePath));

        return stream;
      })
    )
    .pipe(connect.reload());
});

gulp.task("index", function(obj) {
  gulp
    .src(indexHTML)
    .pipe(gulp.dest(output))
    .pipe(connect.reload());
});

gulp.task("sass", function() {
  return (
    gulp
      .src(themeSCSS)
      // .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(outputCSS))
      .pipe(connect.reload())

      // Release the pressure back and trigger flowing mode (drain)
      // See: http://sassdoc.com/gulp/#drain-event
      .resume()
  );
});

gulp.task("watch", function() {
  gulp.watch(themeSCSS, ["sass"]);
  gulp.watch(indexHTML, ["index"]);

  gulp.watch(imagePath).on("change", function(file) {
    gulp
      .src(file.path, { base: "." })
      .pipe(gulp.dest(output))
      .pipe(connect.reload());
  });

  gulp
    .watch(["./data/*/*/*.md"])
    .on("change", function(file) {
      gulp
        .src(file.path, { base: "." })
        .pipe(gulp.dest(output))
        .pipe(connect.reload());
    })
    .on("change", function(file) {
      // Workaround to keep original folder structure
      var currentDirectory = path.dirname(file.path);
      var relativePath = path.relative(process.cwd(), currentDirectory);

      gulp
        .src("./src/slides/index.html")
        .pipe(gulp.dest(output + "/" + relativePath))
        .pipe(connect.reload());
    });
});

gulp.task("default", ["build", "connect", "watch"]);

gulp.task("build", ["copyRevealJs", "sass", "md", "index", "copyIMG"]);
