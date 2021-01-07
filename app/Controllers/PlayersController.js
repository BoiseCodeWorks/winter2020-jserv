import { ProxyState } from "../AppState.js";
import {playersService} from "../Services/PlayersService.js"

function _drawLeaderBoard(){
  let players = ProxyState.players
  let template = ''
  players.forEach(p=> template += p.LeaderBoardTemplate)
  document.getElementById("players").innerHTML = template
}

function _drawPlayer(){
  document.getElementById('user').innerHTML = ProxyState.activePlayer.name + ProxyState.activePlayer.points
}

export default class PlayersController{
  constructor(){
    console.log("players controller");
    this.getPlayers()
    ProxyState.on("players", _drawLeaderBoard)
    ProxyState.on("activePlayer", _drawPlayer)

  }

  complete(str){
    console.log(str)
    try {
      playersService.complete(str)
    } catch (error) {
      console.error(error)
    }
  }

  getPlayers(){
    try {
      playersService.getPlayers()
    } catch (error) {
      console.error(error)
    }
  }

  createPlayer(){
    event.preventDefault()
    let form = event.target
    let player = {
      name: form.playerName.value
    }
    try {
      playersService.createPlayer(player)
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  deletePlayer(id){
    console.log(id)
    event.stopPropagation()
    try {
      playersService.deletePlayer(id)
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id){
    playersService.setActive(id)
  }
}