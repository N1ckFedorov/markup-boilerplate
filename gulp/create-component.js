let gulp = require('gulp')
let fs = require('fs')
let file = require('gulp-file')
let insert = require('gulp-insert')

module.exports = function () {
	$.gulp.task('create', async () => {
		let componentName = process.env.COMPONENT
		let componentsDist = `src/components/${componentName}/`
		let scssStr = `.${componentName} {}`
		let pugStr = `mixin ${componentName}(data)\n\t.${componentName}`

		fs.stat(`${componentsDist + componentName}.pug`, err => {
			if (err == null) {
				console.error(`ERROR: ${componentName} in already exists`)
			} else {
				file(`${componentName}.scss`, scssStr).pipe(gulp.dest(componentsDist))
				file(`${componentName}.pug`, pugStr).pipe(gulp.dest(componentsDist))
				gulp.src('src/components/_components.scss')
					.pipe(insert.append(`\n@import "./${componentName}/${componentName}";`))
					.pipe(gulp.dest('src/components/'))
			}
		})

		return true
	})
}
