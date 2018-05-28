const gulpfile = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulpfile.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulpfile.dest('dist'));
});

gulpfile.task('watch', ['scripts'], () => {
  gulpfile.watch('src/**/*.ts', ['scripts']);
});

gulpfile.task('assets', function() {
  return gulpfile.src(JSON_FILES)
  .pipe(gulpfile.dest('dist'));
});

gulpfile.task('default', ['watch', 'assets']);