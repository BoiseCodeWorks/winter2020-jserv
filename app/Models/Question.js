export default class Question{
  constructor(data){
    this.answer = data.answer
    this.question = data.question
    this.category = data.category.title
    this.value = data.value
    this.categoryId = data.category_id
    this.id = data.id
  }
  get Template(){
    return /*html*/`
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${this.question}</h4>
        <p class="card-text answer text-white">${this.value} -- ${this.answer}</p>
        <button class="btn btn-success" onclick="app.playersController.complete('correct')">Correct</button>
        <button class="btn btn-danger" onclick="app.playersController.complete('incorrect')">Incorrect</button>
      </div>
    </div> `
  }
}

// airdate: "2014-02-06T12:00:00.000Z"
// answer: "(Marcus) Goldman"
// category:{
// clues_count: 10
// created_at: "2015-01-18T18:12:51.869Z"
// id: 17319
// title: "goldberg variations"
// updated_at: "2015-01-18T18:12:51.869Z"}
// __proto__: Object
// category_id: 17319
// created_at: "2015-01-22T02:36:27.482Z"
// game_id: 4420
// id: 149462
// invalid_count: null
// question: "This banker brought his son-in-law Samuel Sachs into the business in 1882"
// updated_at: "2015-01-22T02:36:27.482Z"
// value: 400