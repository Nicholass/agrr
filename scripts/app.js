(function() {
	var app = angular.module('agrr', []);

	app.controller('agrrController', function() {
		this.items = places;
		// TODO highlght anchor
	});

	app.controller('rowController', function() {
		this.backgroundColors = styles;
		this.color = '#' + this.backgroundColors["Неизвестно/Другое"];

		this.setColor = function(placeType) {
			if (placeType in styles) {
				this.color = '#' + this.backgroundColors[placeType];
			}
			return {background: this.color };
		};

	});

	app.controller('theadController', function() {
		this.sortBy = function(col) {
			// TODO rootscope sortby; ng-click sortBy()
		}
	});

	var styles = {
		"Дренаж": "BDBDBD",
		"Ливневый коллектор": "99CCFF",
		"Бытовая канализация": "FFA347",
		"Коммунальный коллектор": "6CB56C",
		"Подвал": "FF6699",
		"Историческое сооружение": "FFF047",
		"Неизвестно/Другое": "5C5CAD"
	};

	var places = [
		{
			id: 1,
			submittedDate: 1212121212121,
			title: 'ДШС в лесу',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Дренаж",
			submittedBy: "ACIS",
			visited: false
		},
		{
			id: 2,
			submittedDate: 1212321212121,
			title: 'Коллектор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Ливневый коллектор",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		},
		{
			id: 3,
			submittedDate: 1212321212121,
			title: 'Коллектор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Подвал",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}
,
		{
			id: 4,
			submittedDate: 1212321212121,
			title: 'Коллектор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Историческое сооружение",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}
,
		{
			id: 5,
			submittedDate: 1312321212121,
			title: 'Кол1тор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Бытовggая канализация",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}
,
		{
			id: 2,
			submittedDate: 1212321212121,
			title: 'Коллектор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Коммунальный коллектор",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}

	]
})();