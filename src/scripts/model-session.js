/*jshint esversion: 6 */

export default function Session(username) {
	this.id,
	this.name = username,

	this.generateId = function(){
		let str = '';
		for(let i = 0; i < 20; i++){
			str = String(str) + String( Math.floor(Math.random()*10) );
		}
		this.id = str;
	}
}
