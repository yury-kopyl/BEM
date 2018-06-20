'use strict';

class Btn {
	constructor() {
		this.buttons = document.querySelectorAll('.btn-js');

		this.init();
	}

	init() {
		this.addEventListener();
		this.buttons.forEach(button => {
			button.classList.remove('btn-js');
		});
	}

	static stopEventClick(event, element) {
		if ( element.classList.contains('btn_disabled') ) {
			event.preventDefault();
		}
	}

	addEventListener() {
		this.buttons.forEach(element => {
			element.addEventListener('click', (event) => {
				Btn.stopEventClick(event, element);
			})
		})
	}
}

const classList = {
	INIT_CLASS:     'btn-js',
	DISABLED_CLASS: 'btn_disabled'
};

module.exports.classList = classList;
module.exports.btn = new Btn();