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

gulp.task(
  "copyRevealJs",
  gulp.parallel(function(done) {
    gulp.src(revealRoot + "/js/*").pipe(gulp.dest(output + "/js/"));
    gulp.src(revealRoot + "/plugin/**/*").pipe(gulp.dest(output + "/plugin/"));
    gulp.src(revealRoot + "/lib/**/*").pipe(gulp.dest(output + "/lib/"));

    done();
  })
);

gulp.task(
  "copyIMG",
  gulp.parallel(function(done) {
    gulp.src(imagePath).pipe(gulp.dest(output + "/data/"));
    gulp.src("./data/media/**/*").pipe(gulp.dest(output + "/data/media/"));
    done();
  })
);

gulp.task(
  "md",
  gulp.parallel(function(done) {
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
    done();
  })
);

gulp.task(
  "index",
  gulp.parallel(function(done) {
    gulp
      .src(indexHTML)
      .pipe(gulp.dest(output))
      .pipe(connect.reload());
    done();
  })
);

gulp.task(
  "sass",
  gulp.parallel(function(done) {
    // return (
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
      .resume();
    // );
    done();
  })
);

gulp.task(
  "connect",
  gulp.parallel(function(done) {
    connect.server({
      root: "./build/",
      livereload: true
    });
    done();
  })
);

gulp.task(
  "watch",
  gulp.parallel(function(done) {
    gulp.watch(themeSCSS, gulp.parallel("sass"));
    gulp.watch(indexHTML, gulp.parallel("index"));

    gulp.watch(imagePath).on(
      "change",
      gulp.parallel(function(file) {
        gulp
          .src(file.path, { base: "." })
          .pipe(gulp.dest(output))
          .pipe(connect.reload());
      })
    );

    gulp
      .watch(["./data/*/*/*.md"])
      .on(
        "change",
        gulp.parallel(function(file) {
          gulp
            .src(file.path, { base: "." })
            .pipe(gulp.dest(output))
            .pipe(connect.reload());
        })
      )
      .on(
        "change",
        gulp.parallel(function(file) {
          // Workaround to keep original folder structure
          var currentDirectory = path.dirname(file.path);
          var relativePath = path.relative(process.cwd(), currentDirectory);

          gulp
            .src("./src/slides/index.html")
            .pipe(gulp.dest(output + "/" + relativePath))
            .pipe(connect.reload());
        })
      );
    done();
  })
);

gulp.task(
  "build",
  gulp.parallel("copyRevealJs", "sass", "md", "index", "copyIMG")
);

gulp.task("default", gulp.parallel("build", "connect", "watch"));
