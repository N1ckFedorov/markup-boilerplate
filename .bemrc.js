module.exports = {
	root: true,
	modules: {
		'bem-tools': {
			plugins: {
				create: {
					techs: ['pug', 'scss'],
					levels: {
						'src/components': {
							default: true
						}
					}
				}
			}
		}
	}
}
