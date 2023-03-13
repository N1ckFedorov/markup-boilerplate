let gulp = require('gulp')
let fs = require('fs')
let file = require('gulp-file')
let insert = require('gulp-insert')

module.exports = function () {
	$.gulp.task('create', async () => {
		var kindName
		var kindDist
		var scssStr
		var pugStr
		var kindsList
		var kindsFolder

		if (process.env.COMPONENT) {
			kindName = process.env.COMPONENT
			kindDist = `src/components/${kindName}/`
			scssStr = `.${kindName} {}`
			pugStr = `mixin ${kindName}(data)\n\t.${kindName}`
			kindsFolder = 'src/components/'
			kindsList = `${kindsFolder}_components.scss`
		} else if (process.env.LAYOUT) {
			kindName = process.env.LAYOUT
			kindDist = `src/layouts/${kindName}/`
			scssStr = `.${kindName} {}`
			pugStr = `mixin ${kindName}(data)\n\t.${kindName}`
			kindsFolder = 'src/layouts/'
			kindsList = `${kindsFolder}_layouts.scss`
		} else {
			kindName = process.env.ELEMENT
			kindDist = `src/elements/${kindName}/`
			scssStr = `.${kindName} {}`
			pugStr = `mixin ${kindName}(data)\n\t.${kindName}`
			kindsFolder = 'src/elements/'
			kindsList = `${kindsFolder}_elements.scss`
		}

		fs.stat(`${kindDist + kindName}.pug`, err => {
			if (err == null) {
				console.error(`ERROR: ${kindName} in already exists`)
			} else {
				file(`${kindName}.scss`, scssStr).pipe(gulp.dest(kindDist))
				file(`${kindName}.pug`, pugStr).pipe(gulp.dest(kindDist))
				gulp.src(kindsList)
					.pipe(insert.append(`\n@import "./${kindName}/${kindName}";`))
					.pipe(gulp.dest(kindsFolder))
			}
		})

		return true
	})
}
