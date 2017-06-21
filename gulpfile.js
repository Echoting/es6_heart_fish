var gulp=require("gulp"),
  babel = require("gulp-babel"),
  es2015 = require("babel-preset-es2015"),
  webpack = require("gulp-webpack");

gulp.task("default",function(){
  gulp.src("./src/module/*.js")
    .pipe(babel({presets:[es2015]}))
    .pipe(gulp.dest("./dest/js"))//es6转js必须在webpack之前，否则webpack找不到要包装的js会报错
    .pipe(webpack({//babel编译import会转成require，webpack再包装以下代码让代码里支持require
      output:{
        filename:"all.js",
      },
      stats:{
        colors:true
      }
    }))
    .pipe(gulp.dest("./js"));//包装好的js目录
});

gulp.task('watch', ['default'], function() {
    gulp.watch("./src/module/*.js", ['default']);
});