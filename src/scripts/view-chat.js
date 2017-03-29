/*jshint esversion: 6 */



export default function ViewMessages(data, status, xhr) {
  this.$messagesContainer,

  this.renderMessages = () => {
    this.$messagesContainer = $('.messages');
    this.$messagesContainer.html('');

  }

  // $g_messageUl.html('');
  // data.forEach(function(message, i, array){
  //   var $messageItem = $('<li>');
  //   $messageItem.html('<span class="message-text">' + message.message + '</span>');
  //
  //   var $deleteTaskButton = $('<button class="delete-message-button"><i class="fa fa-trash-o" aria-hidden="true"></i></button>');
  //   $messageItem.append($deleteTaskButton);
  //
  //   var $completeTaskButton = $('<button class="complete-message-button"></button>');
  //   if (message.complete === true){
  //     $completeTaskButton.html('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  //     $messageItem.addClass('complete');
  //   } else {
  //     $completeTaskButton.html('<i class="fa fa-square-o" aria-hidden="true"></i>');
  //   }
  //   $messageItem.prepend($completeTaskButton);
  //
  //   $g_messageUl.append($messageItem);
  //
  //   $deleteTaskButton.on('click', function(){deleteTask(message, $messageItem);});
  //   $completeTaskButton.on('click', function(){completeTask(message);});
  // });
  // updateFilterView();
}
