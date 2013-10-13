


var connection = {
    server: "",		//server url ws://sip-ws.example.com
    userAddr: "",   //user uri sip:example@example.com,
	uaInstance: "", //instance of the jssip user agent

	/**
	* Sets the basic option of a SIP connection
	* full option list here -> http://jssip.net/documentation/0.3.x/api/ua_configuration_parameters/
	* @param {String} server
	* @param {String} userAddr
	* @param {String} pasword
	*/
    setOptions: function (server, userAddr, password) {
		this.server = server;
		this.userAddr = userAddr;
        var configuration = {
				'ws_servers': server,
				'uri': userAddr,
				'password': password
		};
		uaInstance = new JsSIP.UA(configuration);
    },
	start: function () {
		uaInstance.start();
	},
	addListener: function (event, listener){
		uaInstance.on(event, listener);
	},
	/**
	* Set a listener function for the successful SIP connection
	* @param {Function} listener
	*/
	addListenerConnected: function (listener) {
		event = 'connected';
		this.addListener(event, listener);
	},
	/**
	* Set a listener function for the successful SIP disconnect
	* @param {Function} listener
	*/
	addListenerDisconnected: function (listener) {
		event = 'disconnected';
		this.addListener(event, listener);
	},
	/**
	* Set a listener function for an call (in and out)
	* @param {Function} listener
	*/
	addListenerCall: function (listener) {
		event = 'newRTCSession';
		this.addListener(event, listener);
	},
	/**
	* Set a listener function for an Message (in and out)
	* @param {Function} listener
	*/
	addListenerCall: function (listener) {
		event = 'newMessage';
		this.addListener(event, listener);
	}
};
