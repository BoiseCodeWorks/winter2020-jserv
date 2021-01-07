export default class Player{

constructor(data){
  this.name = data.name
  this.points = data.points
  this.id = data.id
}

get LeaderBoardTemplate(){
  return /*html*/`
  <p onclick="app.playersController.setActive('${this.id}')"> ${this.name } -- ${this.points} <i class="fa fa-trash text-danger" onclick="app.playersController.deletePlayer('${this.id}')" aria-hidden="true"></i> </p>
  `
}

}