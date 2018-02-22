var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
//var changed = require('gulp-changed');
var connect = require("gulp-connect");

var inputSCSS = "./src/stylesheets/signalwerk.scss";
var observe = "./src/stylesheets/**/*.scss";
var output = "./public";
var outputCSS = "./public/css";
var revealRoot = "./node_modules/reveal.js/";
var currentWork = "/data/2018/KW08";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};

gulp.task("copyRevealJs", function() {
  gulp.src(revealRoot + "/js/*").pipe(gulp.dest(output + "/js/"));

  gulp.src(revealRoot + "/plugin/**/*").pipe(gulp.dest(output + "/plugin/"));

  gulp.src(revealRoot + "/lib/**/*").pipe(gulp.dest(output + "/lib/"));

  gulp.src("./src/*.html").pipe(gulp.dest(output + currentWork));

  gulp.src("./src/overview/*.html").pipe(gulp.dest(output));

  gulp.src("." + currentWork + "/*.md").pipe(gulp.dest(output + currentWork));

  gulp
    .src("." + currentWork + "/img/**/*")
    .pipe(gulp.dest(output + currentWork + "/img/"));
});

gulp.task("copyIMG", function() {
  gulp
    .src("." + currentWork + "/img/**/*")
    .pipe(gulp.dest(output + currentWork + "/img/"));
});

gulp.task("sass", function() {
  return (gulp
      .src(inputSCSS)
      // .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer())
      .pipe(gulp.dest(outputCSS))
      .pipe(connect.reload())

      // Release the pressure back and trigger flowing mode (drain)
      // See: http://sassdoc.com/gulp/#drain-event
      .resume() );
});

gulp.task("connect", function() {
  connect.server({
    root: "./public/",
    livereload: true
  });
});

gulp.task("html", function() {
  gulp
    .src("./src/*.html")
    .pipe(gulp.dest(output + currentWork))
    .pipe(connect.reload());
});

gulp.task("overview", function() {
  gulp
    .src("./src/overview/*.html")
    .pipe(gulp.dest(output))
    .pipe(connect.reload());
});

// gulp.task('md', function () {
//     gulp.src('./data/**/*.md')
//     .pipe(gulp.dest(output + './data/'))
//     .pipe(connect.reload());
// });

gulp.src(["assets/file.doc"], { base: "." }).pipe(gulp.dest("dist/"));

gulp.task("watch", function() {
  gulp.watch(observe, ["sass"]);
  gulp.watch(["./src/*.html"], ["html"]);
  gulp.watch(["./src/overview/*.html"], ["overview"]);

  // gulp.watch(['.' + currentWork + '/*.md'], ['md']);
  // gulp.watch(["./data/**/*.md"], ['md_new']);

  gulp.watch(["./data/**/*.md"], function(obj) {
    return gulp
      .src(obj.path, { base: "." })
      .pipe(gulp.dest(output))
      .pipe(connect.reload());
  });

  gulp.watch(["." + currentWork + "/img/**/*"], ["copyIMG"]);
});

// gulp.task('watch', function() {
//   return gulp
//     // Watch the input folder for change,
//     // and run `sass` task when something happens
//     .watch(observe, ['sass'])
//     // .watch(themeFiles, ['copyTheme'])
//     // When there is a change,
//     // log a message in the console
//     .on('change', function(event) {
//       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//     });
// });

gulp.task("default", [
  "copyRevealJs",
  "copyIMG",
  /* 'md', */ "sass",
  "connect",
  "watch" /*, possible other tasks... */
]);
