import { parseUrl } from "./utils";
import { Component } from "./component";
import template from "../views/score.html";


/* class ScoreComponent constructor */
export class ScoreComponent extends Component{
    constructor(){
        super(template)
        let params = parseUrl();

        this.template = template;
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
    }



/* method ScoreComponent.init */
    init() {
        document.getElementById("name").innerText = this.name;
        document.getElementById("size").innerText = this.size;
        document.getElementById("time").innerText = this.time;
    }
}
