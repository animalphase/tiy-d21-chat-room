/*jshint esversion: 6 */

// https://newline.theironyard.com/paths/938/units/5387/lessons/22560

export default function Store() {
  this.targetFunctions = [],

  this.add = function (newTargetFunction) {
    this.targetFunctions.push(newTargetFunction);
  },

  this.fire = function (eventName) {
    this.targetFunctions.forEach(function(targetFunction, i, array){
      targetFunction(eventName);
    });
  }
}
