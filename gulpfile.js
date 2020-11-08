var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task(
  "serve",
  gulp.series("sass", function () {
    browserSync.init({
      server: "./",
    });

    gulp.watch("app/scss/*.scss", gulp.series("sass"));
    gulp.watch("app/*.html").on("change", browserSync.reload);
  })
);

gulp.task("build-js", function () {
  return gulp.src("app/js/*.js").pipe(gulp.dest("docs/js/"));
});

gulp.task("build-css", function () {
  return gulp.src("app/css/*.css").pipe(gulp.dest("docs/css/"));
});

gulp.task("build-pdf", function () {
  return gulp.src("app/pdf/*.pdf").pipe(gulp.dest("docs/pdf/"));
});

gulp.task("build-sass", function () {
  return gulp.src("app/scss/*.scss").pipe(sass()).pipe(gulp.dest("docs/css/"));
});

gulp.task("build-html", function () {
  return gulp.src("app/*.html").pipe(gulp.dest("docs/"));
});

gulp.task("build-img", function () {
  return gulp.src("app/img/*").pipe(gulp.dest("docs/img/"));
});

gulp.task(
  "build",
  gulp.series("build-html", "build-img", "build-sass", "build-css", "build-pdf")
);

gulp.task("default", gulp.series("serve"));
