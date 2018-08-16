const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const watch = require('gulp-watch');
const path = require('path');

//const changed = require('gulp-changed');
const connect = require("gulp-connect");

const output = "./public";
const revealRoot = "./node_modules/reveal.js/";

var themeSCSS = "./src/stylesheets/index.scss";
var outputCSS = "./public/css";

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};



gulp.task("copyRevealJs", function() {
  gulp.src(revealRoot + "/js/*").pipe(gulp.dest(output + "/js/"));
  gulp.src(revealRoot + "/plugin/**/*").pipe(gulp.dest(output + "/plugin/"));
  gulp.src(revealRoot + "/lib/**/*").pipe(gulp.dest(output + "/lib/"));

//
//   gulp.src("./src/*.html").pipe(gulp.dest(output + currentWork));
//
//   gulp.src("./src/overview/*.html").pipe(gulp.dest(output));
//
//   gulp.src("." + currentWork + "/*.md").pipe(gulp.dest(output + currentWork));
//
//   gulp
//     .src("." + currentWork + "/img/**/*")
//     .pipe(gulp.dest(output + currentWork + "/img/"));
});


// gulp.task('md', function () {
//     gulp.src('./data/**/*.md')
//     .pipe(gulp.dest(output + './data/'))
//     .pipe(connect.reload());
// });


gulp.task("connect", function() {
  connect.server({
    root: "./public/",
    livereload: true
  });
});

// function md(obj) {
//   return gulp
//     .src(obj.path, { base: "." })
//     .pipe(gulp.dest(output))
// }
// gulp.task('md', md);

// gulp.task("md", function(obj) {
//     return gulp
//       .src(obj.path, { base: "." })
//       .pipe(gulp.dest(output))
// });

gulp.task('md', function () {
    gulp.src('./data/**/*.md')
    .pipe(gulp.dest(output + '/data/'))
    .pipe(connect.reload());
});

gulp.task('index', function (obj) {
  console.log(obj)
    gulp.src("./src/*.html")
    .pipe(gulp.dest(output + '/data/' + obj.path))
    .pipe(connect.reload());
});

gulp.task("sass", function() {
  return (gulp
      .src(themeSCSS)
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


// function index(obj) {
//   return gulp
//
//     .src("./src/*.html")
//     .pipe(gulp.dest(output))
//
//     .pipe(connect.reload());
// }
//
// gulp.task('index', index);




gulp.task("watch", function() {
  // gulp.watch(observe, ["sass"]);
  // gulp.watch(["./src/*.html"], ["html"]);
  // gulp.watch(["./src/overview/*.html"], ["overview"]);

  // gulp.watch(['.' + currentWork + '/*.md'], ['md']);
  // gulp.watch(["./data/**/*.md"], ['md_new']);

  // gulp.watch([ './data/**/*.md' ], ['md'] );
    // gulp.watch(['./data/**/*.md'], ['md', 'index']);
      gulp.watch(themeSCSS, ["sass"]);


    gulp
      .watch(['./data/**/*.md'])
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
            .src("./src/*.html")
            .pipe(gulp.dest(output + '/' + relativePath))
            .pipe(connect.reload());
      });


  // gulp.watch({ glob: ["./data/**/*.md"]}, function(obj) {
  //   return gulp
  //     .src(obj.path, { base: "." })
  //     .pipe(gulp.dest(output))
  //     .pipe(connect.reload());
  // });

  // gulp.watch(["." + currentWork + "/img/**/*"], ["copyIMG"]);
});



gulp.task("default", [
  "copyRevealJs",
  // 'md',
  // "copyIMG",
  /* 'md', */
  "sass",
  "connect",
  "watch"
  /*, possible other tasks... */
]);


//
// var observe = "./src/stylesheets/**/*.scss";
// var output = "./public";
// var outputCSS = "./public/css";
// var revealRoot = "./node_modules/reveal.js/";
// var currentWork = "/data/2018/KW16";
//
// var sassOptions = {
//   errLogToConsole: true,
//   outputStyle: "expanded"
// };
//
// gulp.task("copyRevealJs", function() {
//   gulp.src(revealRoot + "/js/*").pipe(gulp.dest(output + "/js/"));
//
//   gulp.src(revealRoot + "/plugin/**/*").pipe(gulp.dest(output + "/plugin/"));
//
//   gulp.src(revealRoot + "/lib/**/*").pipe(gulp.dest(output + "/lib/"));
//
//   gulp.src("./src/*.html").pipe(gulp.dest(output + currentWork));
//
//   gulp.src("./src/overview/*.html").pipe(gulp.dest(output));
//
//   gulp.src("." + currentWork + "/*.md").pipe(gulp.dest(output + currentWork));
//
//   gulp
//     .src("." + currentWork + "/img/**/*")
//     .pipe(gulp.dest(output + currentWork + "/img/"));
// });
//
// gulp.task("copyIMG", function() {
//   gulp
//     .src("." + currentWork + "/img/**/*")
//     .pipe(gulp.dest(output + currentWork + "/img/"));
// });
//
// gulp.task("sass", function() {
//   return (gulp
//       .src(inputSCSS)
//       // .pipe(sourcemaps.init())
//       .pipe(sass(sassOptions).on("error", sass.logError))
//       .pipe(sourcemaps.write())
//       .pipe(autoprefixer())
//       .pipe(gulp.dest(outputCSS))
//       .pipe(connect.reload())
//
//       // Release the pressure back and trigger flowing mode (drain)
//       // See: http://sassdoc.com/gulp/#drain-event
//       .resume() );
// });
//
// gulp.task("connect", function() {
//   connect.server({
//     root: "./public/",
//     livereload: true
//   });
// });
//
// gulp.task("html", function() {
//   gulp
//     .src("./src/*.html")
//     .pipe(gulp.dest(output + currentWork))
//     .pipe(connect.reload());
// });
//
// gulp.task("overview", function() {
//   gulp
//     .src("./src/overview/*.html")
//     .pipe(gulp.dest(output))
//     .pipe(connect.reload());
// });
//
// // gulp.task('md', function () {
// //     gulp.src('./data/**/*.md')
// //     .pipe(gulp.dest(output + './data/'))
// //     .pipe(connect.reload());
// // });
//
// gulp.src(["assets/file.doc"], { base: "." }).pipe(gulp.dest("dist/"));
//
// gulp.task("watch", function() {
//   gulp.watch(observe, ["sass"]);
//   gulp.watch(["./src/*.html"], ["html"]);
//   gulp.watch(["./src/overview/*.html"], ["overview"]);
//
//   // gulp.watch(['.' + currentWork + '/*.md'], ['md']);
//   // gulp.watch(["./data/**/*.md"], ['md_new']);
//
//   gulp.watch(["./data/**/*.md"], function(obj) {
//     return gulp
//       .src(obj.path, { base: "." })
//       .pipe(gulp.dest(output))
//       .pipe(connect.reload());
//   });
//
//   gulp.watch(["." + currentWork + "/img/**/*"], ["copyIMG"]);
// });
//
// // gulp.task('watch', function() {
// //   return gulp
// //     // Watch the input folder for change,
// //     // and run `sass` task when something happens
// //     .watch(observe, ['sass'])
// //     // .watch(themeFiles, ['copyTheme'])
// //     // When there is a change,
// //     // log a message in the console
// //     .on('change', function(event) {
// //       console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// //     });
// // });
//
// gulp.task("default", [
//   "copyRevealJs",
//   "copyIMG",
//   /* 'md', */ "sass",
//   "connect",
//   "watch" /*, possible other tasks... */
// ]);
