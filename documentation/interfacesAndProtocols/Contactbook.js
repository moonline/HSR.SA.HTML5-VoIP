/**
 * A contactbook defines import and storage logic for a specific format and source. The contactbook ist stored in the localstorage. After restarting the application, the contactbooks will be reinstanciated and injected with the data from the storage.
 * 
 * @constructor
 */
function Contactbook() {
	/**
	 * Contactbook Interface implementation declaration ('Model/Interfaces/AddressbookInterface'). The contactbook management checks for this declaration and will throw ans Error, if the declaration is missing or functions are missing.
	 * 
	 * @member {string}
	 */
	this.implementInterface = 'Model/Interfaces/AddressbookInterface';
	
	/**
	 * Contactbook path definition. Require.js uses this information to reinstanciate the contactbook after restarting the application.
	 * The path should be relatively to the 'Src' directory and the class is declared without '.js'.
	 * 
	 * @example 'Model/Domain/Addressbook/AddressbookRemoteJson'
	 * @member {string}
	 */
	this.type = 'Model/Domain/Addressbook/ContactbookXYZ';
	
	/**
	 * Contains the contactbook data.
	 * 
	 * @member {array<AddressbookEntry>}
	 */
	this.data = [];

	/**
	 * Defines the type of the contactbook. This information is used to restore the contactbook correctly from storage.
	 * The type has to correspond with the configuration in 'appConfiguration.contactbookImport.file'.
	 * 
	 * @example Addressbook.dataSourceTypes.file
	 * @member {int}
	 */
	this.dataSourceType = Addressbook.dataSourceTypes.file;	
};

/**
 * Gets the contactbook entries.
 * 
 * @function
 * @return {array<AddressbookEntry>} A list of contactbook entries. Should return a reference to a member and not a copy cause the UI will track changes on this list.
 */
Contactbook.prototype.getEntries = function () {
	/* ... */
};

/**
 * Gets the number of contactbook entries.
 * 
 * @function
 * @return {int}
 */
Contactbook.prototype.count = function () {
	/* ... */
};

/**
 * Loads the contactbook data initial or on every application start. Ever contactbook type uses an own signature of load!
 * 
 * @param {string|array<string>|url} source - A string containing the content of the file the user uploaded (contactbook type 'file') or a list of strings containing the content of the files the user uploaded (contactbook type 'directory') or the url (string) of the remote contactbook data (contactbook type 'online').
 * @param {function} [successCallback] - This function has to be called after successful loading of the online source (contactbook type 'online' only).
 * @function
 */
Contactbook.prototype.load = function(source, successCallback) {
	/* ... */
};
