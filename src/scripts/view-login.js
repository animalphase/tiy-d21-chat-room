/*jshint esversion: 6 */

export default function ViewLogin(username) {
  this.$sectionLogin,
  this.$formLogin,
  this.$inputUsername,
  this.$btnLogin,

  this.renderLogin = () => {

    //create elements:
    this.$sectionLogin = $('section.login');
    this.$formLogin = $('<form id="form-login">');
    this.$inputUsername = $('<input id="input-username" placeholder="username">');
    this.$btnLogin = $('<button id="btn-login">login</button>');

    //assemble into dom:
    this.$sectionLogin.append('<h2>login</h2>')
      .append(this.$formLogin);
    this.$formLogin.append(this.$inputUsername)
      .append(this.$btnLogin);

    //click events:
    this.$btnLogin.on('click', clickLogin);
  }
}

function clickLogin(e) {
  e.preventDefault();
  console.log('>>> LOGING IN >>>');
  switchToChatView();
}

function switchToChatView() {
  $('body').removeClass().addClass('viewing-chat');
}


// store.add(logIn);
