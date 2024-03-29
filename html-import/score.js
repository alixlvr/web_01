// TODO #export-functions: remove the IIFE
(function () {
  // TODO #export-functions: export function GameComponent
  // TODO #class: use the ES6 class keyword
  /* class GameComponent constructor */
  function ScoreComponent() {
    var params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  window.ScoreComponent = ScoreComponent;

  // TODO #class: turn function into a method of GameComponent
  /* method GameComponent.init */
  ScoreComponent.prototype.init = function init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
})();
