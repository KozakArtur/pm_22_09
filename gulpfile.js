const gulp = require('gulp'); // Подключаем Gulp
const fileInclude = require('gulp-file-include');
const concat = require('gulp-concat'); // Модуль для объединения файлов
const sass = require('gulp-sass')(require('sass')); // Модуль для компиляции SCSS в CSS
const cssnano = require('gulp-cssnano'); // Модуль для минификации CSS
const rename = require('gulp-rename'); // Модуль для переименования файлов
const uglify = require('gulp-uglify'); // Модуль для минификации JavaScript
const browserSync = require('browser-sync').create(); // Модуль для синхронизации с браузером

// Таск для компиляции и минификации SCSS
gulp.task('scss', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))


});
gulp.task('css', function () {
    return gulp.src('./app/css/*.css') // Путь к CSS файлам
        .pipe(gulp.dest('dist/css')) // Путь назначения
        .on('end', function() {
            console.log('CSS files copied to dist/css');
        });

});


// Таск для HTML
gulp.task('html', function () {
    return gulp.src('./app/*.html', { allowEmpty: true })
        .pipe(fileInclude({
            prefix: '@@', // Префикс для включения компонентов
            basepath: '@file' // Указывает, что искать компоненты нужно относительно текущего файла
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});




// Таск для объединения и минификации JS
gulp.task('js', function () {
    return gulp.src('./app/js/*.js') // Берём все файлы .js
        .pipe(concat('main.js')) // Объединяем их в один файл main.js
        .pipe(uglify()) // Минифицируем JS
        .pipe(rename({ suffix: '.min' })) // Переименовываем в main.min.js
        .pipe(gulp.dest('dist/js')) // Сохраняем в папке dist/js
        .pipe(browserSync.stream()); // Обновляем браузер при изменениях
});

const imagemin = require('gulp-imagemin');

gulp.task('images', function () {
    return gulp.src('./app/images/**/*.{jpg,png,gif,svg}',{ encoding: false })
        .pipe(imagemin()) // Оптимизация изображений
        .pipe(gulp.dest('dist/images'))

});



// Таск для запуска сервера и слежения за файлами
gulp.task('serve', function () {
    browserSync.init({
        server: './dist' // Запускаем сервер с папкой dist как корневой
    });

    // Слежение за изменениями файлов и выполнение соответствующих тасков
    gulp.watch('./app/scss/*.scss', gulp.series('scss')); // Слежение за SCSS
    gulp.watch('./app/js/*.js', gulp.series('js')); // Слежение за JS
    gulp.watch('./app/*.html', gulp.series('html')); // Слежение за HTML
    gulp.watch('./app/images/**/*', gulp.series('images')).on('change', browserSync.reload); // Слежение за изображениями
});

// Таск по умолчанию (запускает сборку и сервер)
gulp.task('default', gulp.series('html', 'scss' ,'css', 'js','images', 'serve'));


