(function() {
	var app = angular.module('agrr', []);

	app.controller('tableController', function() {
		this.items = places;
		this.currentPlace = 0;
		this.orderingField = "id";

		this.navigate = function(id) {
			this.currentPlace = this.currentPlace != id ? id : 0;
		};

		this.checkShow = function(id) {
			return id == this.currentPlace;
		};

		this.sortBy = function(field) {
			this.orderingField = (this.orderingField != field ? "" : "-") + field ;
		};
	});

	app.controller('rowController', function() {
		this.backgroundColors = styles;
		this.color = this.backgroundColors["Неизвестно/Другое"];

		this.setColor = function(placeType) {
			if (placeType in styles) {
				this.color = this.backgroundColors[placeType];
			}
			return this.color;
		};

	});

	app.controller('TabController', function(){
		this.tab = 0;

		this.setTab = function(newValue){
			this.tab = newValue;
		};

		this.isSet = function(tabName){
			return this.tab === tabName;
		};
	});


	var styles = {
		"Дренаж": "#B0BEC5",
		"Ливневый коллектор": "#90CAF9",
		"Бытовая канализация": "#FFCC80",
		"Коммунальный коллектор": "#81C784",
		"Подвал": "#F48FB1",
		"Историческое сооружение": "#FFEB3B",
		"Неизвестно/Другое": "#CE93D8"
	};

	var places = [
		{
			id: 1,
			submittedDate: 1212121212121,
			title: 'ДШС в лесу',
			coordinates: {
				'lat': 50.468869,
				'lon': 3.23412
			},
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
			visitComments: "Interesting place to see"
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
			id: 6,
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