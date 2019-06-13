let mix = require('laravel-mix');

mix.js('src/js/bundle.js', 'dist/js')
    .sass('src/scss/style.scss', 'dist/css')
    .copy('./src/index.html', './dist/')
    .copyDirectory('src/images','dist/images');