var words = ["ground", "control", "to", "major", "tom"];




function map(array, func) {
  var newArray = []
  array.forEach(function(element, index, array){
    newArray.push(func(element))

  })
return newArray
}
//implement map function
//takes two arguments (array, function)
console.log(map(words, function(word) {
  return word.length;
}));


