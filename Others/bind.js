

let numbers = {
  value_x : 15,
  value_y : 50

}

let count = function(){
  console.log(this.value_x + this.value_y)
}

let bindFunc = count.bind(numbers)

bindFunc()
