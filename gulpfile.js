const gulp = require('gulp'); // Підключаємо Gulp
const fileInclude = require('gulp-file-include'); // Для включення файлів в HTML
const concat = require('gulp-concat'); // Для об'єднання кількох JS файлів в один
const sass = require('gulp-sass')(require('sass')); // Для компіляції SCSS в CSS
const cssnano = require('gulp-cssnano'); // Для мінімізації CSS
const rename = require('gulp-rename'); // Для перейменування файлів (додавання суфіксу .min)
const uglify = require('gulp-uglify'); // Для мінімізації JS файлів
const browserSync = require('browser-sync').create(); // Для автоматичного оновлення сторінки при зміні файлів
const imagemin = require('gulp-imagemin');

// Визначаємо шляхи до файлів
const paths = {
    scss: {
        src: './app/scss/**/*.scss',
        dest: 'dist/css'
    },
    html: {
        src: './app/*.html',
        dest: 'dist'
    },
    js: {
        src: './app/js/**/*.js',
        dest: 'dist/js'
    },
    images: {
        src: './app/images/**/*.{jpg,png,gif,svg}',
        dest: 'dist/images'
    },
    json: {
        src: './app/data/**/*.json',
        dest: 'dist/data'
    }
};

// Таск для компіляції SCSS в CSS
gulp.task('scss', function () {
    return gulp.src(paths.scss.src)
        .pipe(sass().on('error', sass.logError)) // Компіляція SCSS в CSS
        .pipe(cssnano()) // Мінімізація CSS
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
});



// Таск для обробки HTML
gulp.task('html', function () {
    return gulp.src(paths.html.src, { allowEmpty: true })
        .pipe(fileInclude({
            prefix: '@@', // Префікс для шаблонів
            basepath: '@file' // Шлях для включення файлів
        }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
});

// Таск для обробки JS
gulp.task('js', function () {
    return gulp.src(paths.js.src)
        .pipe(concat('main.js')) // Об'єднання JS файлів в один файл
        .pipe(uglify()) // Мінімізація JS
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(browserSync.stream());
});


// Таск для обробки зображень
gulp.task('images', function () {
    return gulp.src('./app/images/**/*.{jpg,png,gif,svg}', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});


gulp.task('json', function () {
    return gulp.src(paths.json.src)
        .pipe(gulp.dest(paths.json.dest))
        .pipe(browserSync.stream());
});
// Таск для запуску сервера і спостереження за змінами в файлах
gulp.task('serve', function () {
    browserSync.init({
        server: './dist' // Вказуємо папку, з якої запуститься сервер
    });

    // Спостерігаємо за змінами в SCSS, JS, HTML, зображеннях та JSON
    gulp.watch(paths.scss.src, gulp.series('scss')); // При зміні SCSS запускається відповідний таск
    gulp.watch(paths.js.src, gulp.series('js')); // При зміні JS запускається відповідний таск
    gulp.watch(paths.html.src, gulp.series('html')); // При зміні HTML запускається відповідний таск
    gulp.watch(paths.images.src, gulp.series('images')); // При зміні зображень оновлюється сторінка
    gulp.watch(paths.json.src, gulp.series('json')); // При зміні JSON-файлів запускається таск 'json'
});

gulp.task('default', gulp.series('json','html', 'scss', 'js', 'images', 'serve'));
