
const gulp = require('gulp'); // Підключаємо Gulp
const fileInclude = require('gulp-file-include'); // Для включення файлів в HTML
const concat = require('gulp-concat'); // Для об'єднання кількох JS файлів в один
const sass = require('gulp-sass')(require('sass')); // Для компіляції SCSS в CSS
const cssnano = require('gulp-cssnano'); // Для мінімізації CSS
const rename = require('gulp-rename'); // Для перейменування файлів (додавання суфіксу .min)
const uglify = require('gulp-uglify'); // Для мінімізації JS файлів
const browserSync = require('browser-sync').create(); // Для автоматичного оновлення сторінки при зміні файлів
const imagemin = require('gulp-imagemin');


// Таск для компіляції SCSS в CSS
gulp.task('scss', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError)) // Компіляція SCSS в CSS
        .pipe(cssnano()) // Мінімізація CSS

        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Таск для обробки HTML
gulp.task('html', function () {
    return gulp.src('./app/*.html', { allowEmpty: true })
        .pipe(fileInclude({
            prefix: '@@', // Префікс для шаблонів
            basepath: '@file' // Шлях для включення файлів
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Таск для обробки JS
gulp.task('js', function () {
    return gulp.src('./app/js/*.js')
        .pipe(concat('main.js')) // Об'єднання JS файлів в один файл
        .pipe(uglify()) // Мінімізація JS
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});



// Таск для обробки зображень
gulp.task('images', function () {
    return gulp.src('./app/images/**/*.{jpg,png,gif,svg}', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Таск для запуску сервера і спостереження за змінами в файлах
gulp.task('serve', function () {
    browserSync.init({
        server: './dist' // Вказуємо папку, з якої запуститься сервер
    });

    // Спостерігаємо за змінами в SCSS, JS, HTML та зображеннях
    gulp.watch('./app/scss/*.scss', gulp.series('scss')); // При зміні SCSS запускається відповідний таск
    gulp.watch('./app/js/*.js', gulp.series('js')); // При зміні JS запускається відповідний таск
    gulp.watch('./app/*.html', gulp.series('html')); // При зміні HTML запускається відповідний таск
    gulp.watch('./app/images/**/*', gulp.series('images')).on('change', browserSync.reload); // При зміні зображень оновлюється сторінка
});


gulp.task('default', gulp.series('html', 'scss', 'js', 'images', 'serve'));

