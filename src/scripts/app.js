/*jshint esversion: 6 */

/*
collection url: http://tiny-za-server.herokuapp.com/collections/ce-moonicorn-chat/
*/

const g_store = {
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

const g_rootURL = 'http://tiny-za-server.herokuapp.com/collections/ce-moonicorn-chat/';
const g_getMessagesSettings = {
  type: 'GET',
  dataType: 'json',
  url: g_rootURL
};


import Session from "./model-session.js";
let session = new Session('bitey');
session.generateId();

import ViewLogin from "./view-login.js";
import ViewChat from "./view-chat.js";


console.log(g_store);
console.log(session);



export default function app() {
	//assign and do everything on jquery ready
	$(document).ready(function(){
		let loginView = new ViewLogin();
		loginView.renderLogin();

		// let chatView = new ViewChat();
		// chatView.renderMessages();
	});
	// end document ready fucntion

}






const g_getMessages = () => {
  $.ajax(g_getMessagesSettings).then(doStuffWithMessages);
	
};
g_getMessages();


const doStuffWithMessages = (data, status, xhr) => {
	$messagesContainer = $('.messages');
	$messagesContainer.html('');
	console.log(data);
};


const postMessage = (newMessage) => {

  let postSettings = {
    type: 'POST',
    contentType: 'application/json',
    url: g_rootURL,
    data: JSON.stringify(newMessage)
  };
  $.ajax(postSettings);
	console.log('posted message:', newMessage);
  return false;
};


const deleteMessage = (item) => {
  let id = item._id;
  let itemURL = g_rootURL + id;
  let deleteSettings = {
    type: 'DELETE',
    url: itemURL
  };
  $.ajax(deleteSettings);
};


const clearAllMessages = () => {
  $.ajax(g_getMessagesSettings).then(function(data, status, xhr){
    data.forEach(function(item){
			console.log(item);
      deleteMessage(item);
    });
  });
};


const authorMessage = () => {

	if('clicked_postmessage'){

		let inputText = $inputPost.val();

		if(inputText === '' || inputText === undefined) {
	    console.log('no text input');
	    return false;
	  }

		let newMessageBody = $inputPost.val();
		$inputPost.val('');

		let newMessage = {
			body: newMessageBody,
			author: session.name
		};

		console.log('assembled message:', newMessage);
		postMessage(newMessage);
	}
};


g_store.add(authorMessage);


let $formPostMessage = $('#form-post-message');
let $inputPost = $('#input-post');
let $bntPost = $('#btn-post');


$bntPost.on('click', (e) => {
	e.preventDefault();
	g_store.fire('clicked_postmessage');
});
