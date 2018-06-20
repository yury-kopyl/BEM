'use strict';

const util    = require('gulp-util');
const through = require('through2');
const fs      = require('fs');

function extractClasses (html) {
	let classRegexp   = /class=["']?([\d\w-_ ]+)+["']?/g;
	let htmlClassList = [];
	let jsClassList   = [];
	let res;

	while (true) {
		res = classRegexp.exec(html);
		if (!res) {
			break;
		}

		htmlClassList = htmlClassList.concat(res[1].split(' '));
	}

	if (htmlClassList.length > 1) {
		htmlClassList = htmlClassList.filter(function (value, index) {
			return htmlClassList.indexOf(value) === index;
		});
	}

	htmlClassList.forEach(item => {
		if ( item.slice(-3) === '-js' ) {
			let parsedClassName = item.slice(0, -3);
			let parsedString = parsedClassName.split('_');
			let filePath = parsedString.length === 1 ? `./src/blocks/${parsedClassName}/${parsedClassName}.js` : `./src/blocks/${parsedString[0]}/${parsedClassName}.js`;
			let includeClassFromJS = require(filePath).classList;

			if ( includeClassFromJS ) {
				for( let key in includeClassFromJS ) {
					if ( includeClassFromJS.hasOwnProperty(key) ) {
						if ( key === 'INIT_CLASS' ) {
							jsClassList.push(includeClassFromJS[key].slice(0, -3));
						} else {
							jsClassList.push(includeClassFromJS[key]);
						}
					}
				}
			}
		}
	});

	htmlClassList = htmlClassList.concat(jsClassList);

	return htmlClassList = htmlClassList.filter(function (value, index) {
		return htmlClassList.indexOf(value) === index && value.slice(-3) !== '-js';
	});
}

function buildBundleSCSS(arr) {
	let fileContent  = '';

	arr.map(item => {
		let parsedString = item.split('_');
		let fileName = parsedString.length === 1 ? `${item}/${item}` : `${parsedString[0]}/${item}`;

		if ( fs.existsSync(`src/blocks/${fileName}.scss`) ) {
			fileContent += `@import "../blocks/${fileName}";\n`;

			if ( fs.existsSync(`src/blocks/${fileName}.js`) && fs.existsSync(`src/blocks/${fileName}.json`) ) {
				let jsClasses = require(`./src/blocks/${fileName}.json`);

				jsClasses.forEach(className => {
					fileContent += `@import "../blocks/${parsedString[0]}/${className}";\n`;
				});
			}
		} else {
			fileContent += `//\t\t⚠ file exist ⚠\n// @import "${fileName}";\n`;
			console.warn(`⚠ file exist: src/blocks/${fileName}.scss`);
		}
	});

	return fileContent;
}

module.exports = options => {
	// Какие-то действия с опциями. Например, проверка их существования,
	// задание значения по умолчанию и т.д.

	return through.obj(function(file, enc, cb) {
		// Если файл не существует
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		// Если файл представлен потоком
		if (file.isStream()) {
			cb(new util.PluginError('gulp-example-plugin', 'Streaming not supported'));
			return;
		}

		// Код плагина
		try {
			const data = buildBundleSCSS(extractClasses(file.contents.toString()));

			file.contents = new Buffer(data);
			file.path = file.path.slice(0, -4);
			file.path += 'scss';

			this.push(file);
		} catch (err) {
			this.emit('error', new util.PluginError('gulp-example-plugin', err));
		}

		// Возвращаем обработанный файл для следующего плагина
		// this.push(file);
		cb();
	});
};