/**
 * The datachannel message is sent over the datachannel of the peer connection to the other peer. Datachannel messages can contain various properties. The property 'messageType' and message are mandatory.
 * A datachannel is encrypted and bound to the two peers. Authentication is not needed, cause only this peers have access to the messages.
 * 
 * @namespace
 * @property {string} messageType - The type of the message. Types: 'system', 'user'. 
 * @property {string} message - The content of the message. System messages contain system commands like 'bye'. User messages contain chat messages.
 * 
 * @example 
 * peerConnection.dataChannel.send({
 *	messageType: 'system',
 *	message: 'bye'
 * });
 * 
 * @example 
 * peerConnection.dataChannel.send({
 *	messageType: 'user',
 *	message: 'Hello Bruce. How are you?'
 * });
 */
var datachannelMessage = {
	messageType: "user",
	message: "Hello Bruce."
};

