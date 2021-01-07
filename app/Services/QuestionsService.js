import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { jServApi } from "./AxiosService.js";

class QuestionsService{
  constructor(){
    console.log("questions service");
  }
  async getQuestion() {
  let res = await jServApi.get()
  console.log(res.data)
  ProxyState.question = new Question(res.data[0])
  }
}

export const questionsService = new QuestionsService()