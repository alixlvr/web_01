import { Router } from "./app/scripts/router";
import { WelcomeComponent } from "./app/components/welcome/welcome.component.js";
import { GameComponent } from "./app/components/game/game.component.js";
import { ScoreComponent } from "./app/components/score/score.component.js";

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./app/styles/style.css";

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
