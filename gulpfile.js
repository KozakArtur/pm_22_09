const gulp = require('gulp'); // Подключаем Gulp
const fileInclude = require('gulp-file-include');
const concat = require('gulp-concat'); // Модуль для объединения файлов
const sass = require('gulp-sass')(require('sass')); // Модуль для компиляции SCSS в CSS
const cssnano = require('gulp-cssnano'); // Модуль для минификации CSS
const rename = require('gulp-rename'); // Модуль для переименования файлов
const uglify = require('gulp-uglify'); // Модуль для минификации JavaScript
const imagemin = require('gulp-imagemin'); // Модуль для сжатия изображений
const browserSync = require('browser-sync').create(); // Модуль для синхронизации с браузером


gulp.task('scss', function () {
    return gulp.src('./app/scss/*.scss') // Берём все файлы .scss
        .pipe(sass().on('error', sass.logError)) // Компилируем SCSS в CSS
        .pipe(cssnano()) // Минифицируем CSS
        .pipe(rename({ suffix: '.min' })) // Переименовываем файлы, добавляем суффикс .min
        .pipe(gulp.dest('dist/css')) // Сохраняем в папке dist/css
        .pipe(browserSync.stream()); // Обновляем браузер при изменениях
});

gulp.task('html', function () {
    return gulp.src('./app/*.html', { allowEmpty: true })
        .pipe(fileInclude({
            prefix: '@@', // Префикс для включения компонентов
            basepath: '@file' // Указывает, что искать компоненты нужно относительно текущего файла
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


gulp.task('js', function () {
    return gulp.src('./app/js/*.js') // Берём все файлы .js
        .pipe(concat('main.js')) // Объединяем их в один файл main.js
        .pipe(uglify()) // Минифицируем JS
        .pipe(rename({ suffix: '.min' })) // Переименовываем в main.min.js
        .pipe(gulp.dest('dist/js')) // Сохраняем в папке dist/js
        .pipe(browserSync.stream()); // Обновляем браузер при изменениях
});


gulp.task('images', function () {
    return gulp.src('./app/images/*') // Берём все изображения
        .pipe(imagemin()) // Сжимаем изображения
        .pipe(gulp.dest('dist/images')) // Сохраняем в папке dist/images
        .pipe(browserSync.stream()); // Обновляем браузер при изменениях
});


gulp.task('serve', function () {
    browserSync.init({
        server: './dist' // Запускаем сервер с папкой dist как корневой
    });

    // Слежение за изменениями файлов и выполнение соответствующих тасков
    gulp.watch('./app/scss/*.scss', gulp.series('scss'));
    gulp.watch('./app/js/*.js', gulp.series('js'));
    gulp.watch('./app/*.html', gulp.series('html'));
    gulp.watch('./app/images/*', gulp.series('images'));
});



gulp.task('default', gulp.series('html', 'scss', 'js', 'images', 'serve'));
