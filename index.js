const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here

class ToDos {

  constructor(item) {

    this.item = item
    this.toDo = []

  }

  addItem(item) {
    this.toDo.push(item)

  }

  removeItem(item) {

    this.toDo = this.toDo.filter(this.ToDos.includes(item))

  }
}








console.log(RenderToDosListTemplate())