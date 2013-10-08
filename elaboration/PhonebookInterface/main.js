/**
 * Created by tobias on 10/8/13.
 */
var Controller = App.Controller;

window.onload = function() {
	var controller = new Controller.PhonebookController();
	controller.list();
}