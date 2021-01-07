import { ProxyState } from "../AppState.js";
import {questionsService} from "../Services/QuestionsService.js"

function _draw(){
  document.getElementById("question").innerHTML = ProxyState.question.Template
}

export default class QuestionsController{
  constructor(){
    console.log("questions controller");
    ProxyState.on("question", _draw)
    this.getQuestion()
  }

  getQuestion(){
    try {
      questionsService.getQuestion()
    } catch (error) {
      console.error(error)
    }
  }
}