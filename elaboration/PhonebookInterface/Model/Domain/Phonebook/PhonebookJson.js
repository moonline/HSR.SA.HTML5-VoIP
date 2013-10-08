/**
 * Created by tobias on 10/8/13.
 */
var Phonebook = App.Model.Domain.Phonebook;


Domain.PhonebookJson = function() {
	var self = this;
	var data = new Array();

	var initialize = (function() {
		var inputData = JSON.parse(prompt('Please insert phonebook data in JSON Style with fields "sip", "name", "photo"'));
		for(i in inputData) {
			if(!inputData[i].hasOwnProperty('sip') || !inputData[i].hasOwnProperty('name') || !inputData[i].hasOwnProperty('photo')) {
				data.push(new PhonebookEntry(inputData[i].sip, inputData[i].name, inputData[i].photo));
			}
		}
	})();

	this.getEntries = function() {
		return data;
	}
	this.count = function() {
		return data.length;
	}
}