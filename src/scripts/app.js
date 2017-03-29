/*jshint esversion: 6 */

/*
collection url: http://tiny-za-server.herokuapp.com/collections/ce-moonicorn-chat/
*/


const store = {
  targetFunctions: [],

  add: function (newtargetFunction) {
    this.targetFunctions.push(newtargetFunction);
  },

  fire: function (eventName) {
    this.targetFunctions.forEach(function (targetFunction) {
      targetFunction(eventName);
    });
  }
};


const rootURL = 'http://tiny-za-server.herokuapp.com/collections/ce-moonicorn-chat/';
const getMessagesSettings = {
  type: 'GET',
  dataType: 'json',
  url: rootURL
};


import Session from "./model-session.js";
let session = new Session('bitey');
session.generateId();

import ViewLogin from "./view-login.js";
import ViewChat from "./view-chat.js";


console.log(store);
console.log(session);



export default function app() {
	//assign and do everything on jquery ready
	$(document).ready(function(){
		let loginView = new ViewLogin();
		loginView.renderLogin();

		// let chatView = new ViewChat();
		// chatView.renderMessages();
		// var moment = require('moment');
		// moment().format();
	});
	// end document ready function

}






const getMessages = () => {
  $.ajax(getMessagesSettings).then( (data, status, xhr) => {
		let $messagesContainer = $('.messages');
		$messagesContainer.html('');
		data.forEach( (message, i, array) => {
			console.log(message);
			let $messageDiv = $('<div class="message">');
			$messageDiv
				.append(`<div class="timestamp">${message.timestamp}</div>`)
				.append(`<div class="author">${message.author}</div>`)
				.append(`<div class="body">${message.body}</div>`);
			$messagesContainer.append($messageDiv);
		});
	});
};
getMessages();




const postMessage = (newMessage) => {

  let postSettings = {
    type: 'POST',
    contentType: 'application/json',
    url: rootURL,
    data: JSON.stringify(newMessage)
  };
  $.ajax(postSettings).then(getMessages);
	console.log('posted message:', newMessage);
  return false;
};


const deleteMessage = (item) => {
  let id = item._id;
  let itemURL = rootURL + id;
  let deleteSettings = {
    type: 'DELETE',
    url: itemURL
  };
  $.ajax(deleteSettings);
};


const clearAllMessages = () => {
  $.ajax(getMessagesSettings).then(function(data, status, xhr){
    data.forEach(function(item){
			console.log(item);
      deleteMessage(item);
    });
  });
};


const authorMessage = () => {

	if('clicked_post_message'){

		let inputText = $inputPost.val();

		if(inputText === '' || inputText === undefined) {
	    console.log('no text input');
	    return false;
	  }

		let newMessageBody = $inputPost.val();
		$inputPost.val('');
		let currentdate = new Date();
		let newMessage = {
			body: newMessageBody,
			author: session.name,
			timestamp: currentdate.getHours() + ':' + currentdate.getMinutes()
		};

		console.log('assembled message:', newMessage);
		postMessage(newMessage);
	}
};


store.add(authorMessage);


let $formPostMessage = $('#form-post-message');
let $inputPost = $('#input-post');
let $bntPost = $('#btn-post');


$bntPost.on('click', (e) => {
	e.preventDefault();
	store.fire('clicked_post_message');
});
