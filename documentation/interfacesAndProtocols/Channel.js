/**
 * A channel connects the client with a signaling server. It is used for transporting signaling messages between the client (peer) and a central server. Peers can send messages over the channel and register listeners to be notified on a message arrival. A Channel does not run its service after initialization. The service has to be started on 'start'.
 * 
 * @constructor
 * @param {Account} account - A channel account (Model/Domain/Account) of a user (Model/Domain/User). Every Account is bount to it's channel. The channel will be injected with its own account.
 */
function Channel(account) {
	/**
	 * Channel Interface implementation declaration ('Model/Interfaces/ChannelInterface'). The channel management checks for this declaration and will throw ans Error, if the declaration is missing or functions are missing.
	 * 
	 * @member {string}
	 */
	this.implementInterface = 'Model/Interfaces/ChannelInterface';
	
};

/**
 * Starts the channel: begins receiving messages, listens for server push or whatever.
 * 
 * @function
 */
Channel.prototype.start = function () {
};


/**
 * Stops the channel: closes the channel connection and removes all listeners.
 * 
 * @function
 */
Channel.prototype.stop = function () {
};


/**
 * Sends a message over the channel.
 *
 * @function
 * @param { receiver: string; message: string } message - A message object
 */
Channel.prototype.send = function (message) {
};


/**
 * Adds a listener to receive messages. Adds the listener only if it's not yet registered.
 *
 * @function
 * @param { notify: function({ receiver: string; message:string }) } listener - An object implementing a notify(message) method
 * @example
 * var listener = new MyClass(param1, param2);
 * listener.notify = function(message) { console.log(message); }; 
 * 
 * channel.addReceiveListener(listener);
 * 
 * @return {boolean} listener was added or not
 */
Channel.prototype.addReceiveListener = function (listener) {
};

/**
 * Removes a listener from the receivers list.
 * 
 * @function
 * @param { notify: function({receiver: string; message: string }) } listener - An object implementing a notify(message) method
 */
Channel.prototype.removeReceiveListener = function (listener) {
};