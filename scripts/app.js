(function() {
	var app = angular.module('agrr', []);

	app.controller('agrrController', function() {
		this.items = places;
	});

	app.controller('rowController', function() {
		this.type = 1;

		this.setType = function(placeType) {
			return
		};
	});

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
			type: "Ливневый коллектор",
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
			type: "Ливневый коллектор",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}
,
		{
			id: 5,
			submittedDate: 1312321212121,
			title: 'Коллектор в Буче',
			coordinates: [5.9817263, 3.23412],
			description: 'глубоко в лесу есть герма блаблабла',
			type: "Ливневый коллектор",
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
			type: "Ливневый коллектор",
			submittedBy: "ACIS",
			visited: true,
			visitDate: 123123123123,
			visitComments: ""
		}

	]
})();