(function() {

	// TODO edit modal; visit modal; refactor; backend;
	var app = angular.module('agrr', []);

	app.controller('tableController', function() {
		this.items = places;
		this.currentPlace = 0;
		this.orderingField = "id";
		this.tab = 0;

		this.setTab = function(newValue){
			this.tab = newValue;
		};

		this.isSet = function(tabName){
			return this.tab === tabName;
		};

		this.navigate = function(id) {
			this.currentPlace = this.currentPlace != id ? id : 0;
		};

		this.checkShow = function(id) {
			return id == this.currentPlace;
		};

		this.sortBy = function(field) {
			this.currentPlace = 0;
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

		this.edit = function(place) {
			//spawn edit modal
		};

		this.turnVisited = function(place) {

		}
		//TODO show edit and visit;

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

	// TODO datamodel: add city;
	// TODO view: filter by city and type
	var places = [
		{
			id: 1,
			submittedDate: 1429604007,
			title: 'ДШС в лесу',
			city: "Киев",
			coordinates: {
				'lat': 50.468869,
				'lon': 30.516700
			},
			description: '',
			type: "Дренаж",
			submittedBy: "ACIS",
			visited: false
		}

	]
})();