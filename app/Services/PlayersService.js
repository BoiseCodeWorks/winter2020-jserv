import { ProxyState } from "../AppState.js";
import Player from "../Models/Player.js";
import { sandboxApi } from "./AxiosService.js";
import {questionsService} from "./QuestionsService.js"
class PlayersService {
 
 
  constructor(){
    console.log("player serv");
  }
  async getPlayers() {
  let res = await sandboxApi.get()
  console.log(res)
  ProxyState.players = res.data.map(p=> new Player(p))
  }
   async complete(str) {
    //will need to go to sandbox and do a put to change the value of score of activePlayer
    let player = ProxyState.activePlayer
    let question = ProxyState.question
    if(str == "correct"){
      player.points += question.value
    } else {
      player.points -= question.value
    }    
    await sandboxApi.put(player.id, player)
    ProxyState.activePlayer = player
    this.getPlayers()
    // questionsService.getQuestion()
  }
  setActive(id) {
    let player = ProxyState.players.find(p=>p.id ==id)
    ProxyState.activePlayer = player
  }

  async createPlayer(player) {
    let res = await sandboxApi.post('',player)
    console.log(res)
    ProxyState.players = [...ProxyState.players, new Player(res.data)]
  }

 async deletePlayer(id) {
   let res = await sandboxApi.delete(id)
   ProxyState.players = ProxyState.players.filter(p => p.id != id)
  }
 
}

export const playersService = new PlayersService()