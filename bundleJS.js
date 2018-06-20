'use strict';

const util       = require('gulp-util');
const through    = require('through2');
const fs         = require('fs');

function extractClasses (html) {
	let findHtml = /class=["']?([\d\w-_ ]+)+["']?/g;
	let arr = [];
	let res;

	while (true) {
		res = findHtml.exec(html);
		if (!res) {
			break;
		}
		arr = arr.concat(res[1].split(' '));
	}

	if (arr.length <= 1) {
		return arr;
	}

	arr = arr.filter((value, index) => {
		return arr.indexOf(value) === index && value.slice(-3) === '-js';
	});

	arr = arr.map(value => {
		return value.slice(0, -3);
	});

	return arr;
}

function buildBundleJS(arr) {
	let fileContent  = '';

	arr.map(item => {
		let parsedString = item.split('_');
		let fileName = parsedString.length === 1 ? `${item}/${item}` : `${parsedString[0]}/${item}`;
		let className = parsedString.length === 1 ? item : parsedString[0];

		if ( fs.existsSync(`src/blocks/${fileName}.js`) ) {
			fileContent += `import ${className} from "../blocks/${fileName}";\n`;
		} else {
			fileContent += `//\t\t⚠ file exist ⚠\n// import ${className} from "../blocks/${fileName}";\n`;
			console.warn(`⚠ file exist: src/blocks/${fileName}.js`);
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
			const data = buildBundleJS(extractClasses(file.contents.toString()));

			file.contents = new Buffer(data);
			file.path = file.path.slice(0, -4);
			file.path += 'js';

			this.push(file);
		} catch (err) {
			this.emit('error', new util.PluginError('gulp-example-plugin', err));
		}

		// Возвращаем обработанный файл для следующего плагина
		// this.push(file);
		cb();
	});
};